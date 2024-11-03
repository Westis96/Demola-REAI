"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from "lucide-react"

export function AICoach() {
  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle>AI Coach Chat</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <ScrollArea className="flex-1 pr-4">
          {/* Chat messages would go here */}
        </ScrollArea>
        <div className="flex gap-2 mt-4">
          <Input placeholder="Ask your AI coach..." />
          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 