"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Hero() {
  const navigate = useNavigate()

  const handleLearnMore = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '1.0',
            animation: 'fadeInOut 10s infinite'
          }}
        />
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/50 via-background/70 to-background/80" />
      
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            For Players Age 10-25
          </span>
          <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Your Digital Twin for Football Excellence
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Transform your football journey with AI-powered personal development, from practice to match day
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center px-6">
            <Button 
              size="lg" 
              className="h-12 px-8"
              onClick={() => navigate('/dashboard')}
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-12 px-8"
              onClick={handleLearnMore}
            >
              See How It Works
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 