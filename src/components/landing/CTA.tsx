import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function CTA() {
  const navigate = useNavigate()

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-background/80 backdrop-blur-lg border rounded-2xl p-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Game?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join the future of football development and unlock your full potential with AI-powered personal training.
          </p>
          <Button 
            size="lg" 
            className="h-12 px-8"
            onClick={() => navigate('/dashboard')}
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 