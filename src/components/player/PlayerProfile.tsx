"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Star, Gauge, Target, Heart, Zap, Users, Timer } from "lucide-react"
import { useAtom } from "jotai"
import { userAtom } from "@/lib/store/Atoms"

export function PlayerProfile() {
  const [user] = useAtom(userAtom)
  
  return (
    <div className="space-y-6">
      {/* Player Header */}
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <Card className="w-[300px] h-[400px] relative overflow-hidden">
          <img
            src="/media/players/silva.jpg"
            alt={user.name}
            className="object-cover"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
            <h2 className="text-2xl font-bold text-white">{user.name}</h2>
            <p className="text-yellow-400">{user.position} • #{user.number}</p>
          </div>
        </Card>

        {/* Key Attributes */}
        <div className="flex-1 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overall Rating</CardTitle>
              <Star className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user.rating}</div>
              <Progress value={user.rating} className="mt-2" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Form</CardTitle>
              <Zap className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Excellent</div>
              <Progress value={85} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Matches</CardTitle>
              <Users className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground mt-1">This season</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Detailed Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pace</CardTitle>
            <Gauge className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <Progress value={87} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Shooting</CardTitle>
            <Target className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92</div>
            <Progress value={92} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stamina</CardTitle>
            <Heart className="h-4 w-4 text-pink-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78</div>
            <Progress value={78} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Play Time</CardTitle>
            <Timer className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,840</div>
            <p className="text-xs text-muted-foreground mt-1">Minutes played</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 