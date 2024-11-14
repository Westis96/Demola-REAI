import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-lg border-b py-4" : "py-6"
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">REAI</div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How it Works</a>
          <a href="#stats" className="text-muted-foreground hover:text-primary transition-colors">Results</a>
          <Button onClick={() => navigate('/dashboard')}>
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  )
} 