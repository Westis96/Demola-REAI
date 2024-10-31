import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Camera, Maximize2, Minimize2, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Slider } from './ui/slider';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { highlight_events } from '@/lib/data/EventData';

interface FormattedEvent {
  id: string;
  start: number;
  time: string;
  event: string;
}

const VideoAnalysis = () => {
  const formatTimeFromSeconds = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [events, setEvents] = useState<FormattedEvent[]>(() => {
    return highlight_events.map(event => ({
      id: event.id,
      start: event.start,
      time: formatTimeFromSeconds(event.start),
      event: event.tags[0]?.name || 'Unknown Event'
    }));
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newEvent, setNewEvent] = useState<FormattedEvent>({ id: "", start: 0, time: "", event: "" });
  const eventListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', () => {
        setDuration(videoRef.current?.duration || 0);
      });

      videoRef.current.addEventListener('timeupdate', () => {
        const progress = (videoRef.current?.currentTime || 0) / (videoRef.current?.duration || 1) * 100;
        setProgress(progress);
      });
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleTimelineChange = (value: number[]) => {
    if (videoRef.current) {
      const newTime = (value[0] / 100) * (videoRef.current.duration || 0);
      videoRef.current.currentTime = newTime;
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const seekToTime = (timeString: string) => {
    if (videoRef.current) {
      const [minutes, seconds] = timeString.split(':').map(Number);
      const timeInSeconds = minutes * 60 + seconds;
      videoRef.current.currentTime = timeInSeconds;
      if (!isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const findNearestEvent = (direction: 'prev' | 'next') => {
    const currentTime = videoRef.current?.currentTime || 0;
    
    // Convert event times to seconds for comparison
    const eventTimes = events.map(({ time }) => {
      const [minutes, seconds] = time.split(':').map(Number);
      return minutes * 60 + seconds;
    });

    if (direction === 'next') {
      const nextTime = eventTimes.find(time => time > currentTime);
      return nextTime ?? eventTimes[0]; // Loop to start if no next event
    } else {
      const prevTime = eventTimes.reverse().find(time => time < currentTime);
      return prevTime ?? eventTimes[0]; // Loop to end if no previous event
    }
  };

  const scrollEventIntoView = (time: string) => {
    if (!eventListRef.current) return;
    
    const eventElement = eventListRef.current.querySelector(`[data-time="${time}"]`);
    if (eventElement) {
      eventElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handlePrevEvent = () => {
    const prevTime = findNearestEvent('prev');
    if (videoRef.current) {
      videoRef.current.currentTime = prevTime;
      const timeString = formatTime(prevTime);
      scrollEventIntoView(timeString);
    }
  };

  const handleNextEvent = () => {
    const nextTime = findNearestEvent('next');
    if (videoRef.current) {
      videoRef.current.currentTime = nextTime;
      const timeString = formatTime(nextTime);
      scrollEventIntoView(timeString);
    }
  };

  const isCurrentEvent = (timeString: string) => {
    if (!videoRef.current) return false;
    const [minutes, seconds] = timeString.split(':').map(Number);
    const eventTimeInSeconds = minutes * 60 + seconds;
    const currentTime = videoRef.current.currentTime;
    // Allow for a 1-second margin of error
    return Math.abs(eventTimeInSeconds - currentTime) < 1;
  };

  const handleAddEvent = () => {
    if (videoRef.current) {
      const currentTime = formatTime(videoRef.current.currentTime);
      const newId = crypto.randomUUID();
      setNewEvent({ 
        id: newId,
        start: videoRef.current.currentTime,
        time: currentTime, 
        event: "" 
      });
    }
    setIsDialogOpen(true);
  };

  const handleSaveEvent = () => {
    if (newEvent.time && newEvent.event) {
      setEvents(prev => [...prev, newEvent]);
      setIsDialogOpen(false);
      setNewEvent({ id: "", start: 0, time: "", event: "" });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3">
        <div 
          ref={containerRef} 
          className={cn(
            "bg-card rounded-xl shadow-sm overflow-hidden relative",
            isFullscreen && "fixed inset-0 z-50 flex items-center justify-center bg-black"
          )}
        >
          <div className={cn(
            "relative aspect-video bg-gray-900",
            isFullscreen && "w-full h-full"
          )}>
            <video 
              ref={videoRef}
              className={cn(
                "w-full h-full object-contain",
                isFullscreen ? "absolute inset-0" : "object-cover"
              )}
              src="https://c.veocdn.com/f6f720b0-3fd6-4828-80de-916487ccc8bb/standard/machine/fcf92276/video.mp4"
              autoPlay={isPlaying}
              controls={false}
              playsInline
            />
            <div className={cn(
              "absolute left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4",
              isFullscreen ? "bottom-0" : "bottom-0"
            )}>
              <div className="space-y-3">
                <Slider
                  variant="timetrack"
                  value={[progress]}
                  max={100}
                  step={0.1}
                  onValueChange={handleTimelineChange}
                  className="cursor-pointer"
                />
                <div className="flex items-center justify-between text-white">
                  <div className="space-x-4">
                    <button 
                      className="p-2 hover:bg-card/20 rounded-full"
                      onClick={handlePrevEvent}
                    >
                      <ArrowLeft className="h-6 w-6" />
                    </button>
                    <button 
                      className="p-2 hover:bg-card/20 rounded-full"
                      onClick={togglePlayPause}
                    >
                      {isPlaying ? (
                        <Pause className="h-6 w-6" />
                      ) : (
                        <Play className="h-6 w-6" />
                      )}
                    </button>
                    <button 
                      className="p-2 hover:bg-card/20 rounded-full"
                      onClick={handleNextEvent}
                    >
                      <ArrowRight className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm">
                      {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}
                    </span>
                    <button className="p-2 hover:bg-card/20 rounded-full">
                      <Camera className="h-6 w-6" />
                    </button>
                    <button 
                      className="p-2 hover:bg-card/20 rounded-full"
                      onClick={toggleFullscreen}
                    >
                      {isFullscreen ? (
                        <Minimize2 className="h-6 w-6" />
                      ) : (
                        <Maximize2 className="h-6 w-6" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-card p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold">Analysis Notes</h2>
          <div className="mt-4 space-y-4">
            <Textarea
              className="w-full h-32 p-3 border border-foreground/30 rounded-lg focus:ring-2 focus:border-transparent"
              placeholder="Add your analysis notes here..."
            />
            <div className="flex space-x-4">
              <Button className="px-4 py-2">
                Save Notes
              </Button>
              <Button variant="outline" className="px-4 py-2">
                Clear
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card p-6 rounded-xl shadow-sm max-h-[500px] overflow-y-auto">
        <div className='flex flex-row justify-between items-center mb-4'>
          <h2 className="text-lg font-semibold">Key Events</h2>
          <Button variant="default" className="px-4 py-2" onClick={handleAddEvent}>
            Add Event
          </Button>
        </div>
        <div ref={eventListRef} className="space-y-2">
          {events.sort((a, b) => (a.start-b.start)).map(({ time, event }) => (
            <div
              key={time}
              data-time={time}
              onClick={() => seekToTime(time)}
              className={cn(
                "flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors",
                isCurrentEvent(time) 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-foreground/10 hover:bg-foreground/20"
              )}
            >
              <span className="text-sm font-medium">{event}</span>
              <span className={cn(
                "text-sm",
                isCurrentEvent(time) ? "text-primary-foreground" : "text-muted-foreground"
              )}>{time}</span>
            </div>
          ))}
        </div>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Event</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="time" className="text-right">Time</label>
              <Input
                id="time"
                value={newEvent.time}
                onChange={(e) => setNewEvent(prev => ({ ...prev, time: e.target.value }))}
                className="col-span-3"
                placeholder="00:00"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="event" className="text-right">Event</label>
              <Input
                id="event"
                value={newEvent.event}
                onChange={(e) => setNewEvent(prev => ({ ...prev, event: e.target.value }))}
                className="col-span-3"
                placeholder="Event description"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveEvent}>Save Event</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default VideoAnalysis;