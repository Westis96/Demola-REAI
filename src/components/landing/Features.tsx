import { motion } from "framer-motion"
import { Brain, Video, Target, Trophy } from "lucide-react"

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Digital Twin Technology",
    description: "Create your digital persona that evolves with your real-world performance"
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Smart Recording",
    description: "Capture and analyze every match and practice session with AI-powered insights"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Personal Goals",
    description: "Set and track individual development goals with personalized challenges"
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Gamified Progress",
    description: "Turn real-life achievements into digital rewards and track improvement"
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium">The Future of Football Training</span>
          <h2 className="mt-4 text-4xl font-bold">Your Personal AI Coach</h2>
          <p className="mt-4 text-muted-foreground">
            Experience the next evolution in football development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background/80 backdrop-blur-sm p-6 rounded-xl border hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 