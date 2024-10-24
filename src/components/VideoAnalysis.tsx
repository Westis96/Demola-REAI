import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Camera } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

const VideoAnalysis = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-xl shadow-sm overflow-hidden">
        <div className="relative aspect-video bg-gray-900">
          <img 
            src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80"
            alt="Football match"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
            <div className="flex items-center justify-between text-white">
              <div className="space-x-4">
                <button className="p-2 hover:bg-card/20 rounded-full">
                  <SkipBack className="h-6 w-6" />
                </button>
                <button 
                  className="p-2 hover:bg-card/20 rounded-full"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <Pause className="h-6 w-6" />
                  ) : (
                    <Play className="h-6 w-6" />
                  )}
                </button>
                <button className="p-2 hover:bg-card/20 rounded-full">
                  <SkipForward className="h-6 w-6" />
                </button>
              </div>
              <button className="p-2 hover:bg-card/20 rounded-full">
                <Camera className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 bg-card p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold ">Analysis Notes</h2>
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

        <div className="bg-card p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold ">Key Events</h2>
          <div className="mt-4 space-y-2">
            {[
              { time: '15:30', event: 'Goal Attempt' },
              { time: '23:45', event: 'Defensive Formation' },
              { time: '35:12', event: 'Counter Attack' },
              { time: '42:00', event: 'Set Piece' },
            ].map(({ time, event }) => (
              <div
                key={time}
                className="flex items-center justify-between p-3 bg-foreground/10 rounded-lg hover:bg-foreground/20 cursor-pointer"
              >
                <span className="text-sm font-medium ">{event}</span>
                <span className="text-sm text-muted-foreground">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoAnalysis;