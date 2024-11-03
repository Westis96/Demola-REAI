"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FileUploader } from "@/components/upload/file-uploader"
import { PlayCircle } from "lucide-react"
import { formatDistance } from "date-fns"

interface Clip {
  id: string
  title: string
  date: string
  rating: number
  url: string
}

export function PlayerClips() {
  const clips: Clip[] = [
    {
      id: "1",
      title: "Free Kick Practice",
      date: "2024-03-15T10:00:00Z",
      rating: 8.5,
      url: "/videos/clip1.mp4"
    },
    {
      id: "2",
      title: "Dribbling Session",
      date: "2024-03-14T15:30:00Z",
      rating: 9.0,
      url: "/videos/clip2.mp4"
    },
    {
      id: "3",
      title: "Sprint Training",
      date: "2024-03-13T09:15:00Z",
      rating: 7.5,
      url: "/videos/clip3.mp4"
    },
    {
      id: "4",
      title: "Penalty Practice",
      date: "2024-03-12T16:45:00Z",
      rating: 8.0,
      url: "/videos/clip4.mp4"
    }
  ]

  async function handleUpload(files: File[]) {
    // TODO: Implement actual upload logic
    console.log("Uploading files:", files)
  }

  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle>My Training Clips</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 w-full">
        <FileUploader
          className="w-full"
          accept={{ "video/*": [".mp4", ".mov", ".avi"] }}
          maxSize={1024 * 1024 * 100} // 100MB
          onUpload={handleUpload}
          maxFiles={3}
          multiple
        />
        <ScrollArea className="h-full">
          <div className="grid grid-cols-2 gap-4 pr-4">
            {clips.map((clip) => (
              <Card key={clip.id} className="overflow-hidden">
                <div className="relative aspect-video bg-muted flex items-center justify-center">
                  <PlayCircle className="w-12 h-12 text-muted-foreground/50" />
                </div>
                <CardContent className="p-4">
                  <div className="space-y-1">
                    <h3 className="font-semibold leading-none">{clip.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {formatDistance(new Date(clip.date), new Date(), { addSuffix: true })}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Rating</span>
                    <span className="text-sm font-medium text-yellow-500">
                      {clip.rating.toFixed(1)}/10
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
} 