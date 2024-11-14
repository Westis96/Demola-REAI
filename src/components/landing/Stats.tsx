import { motion } from "framer-motion"

const stats = [
  { value: "10-25", label: "Player Age Range" },
  { value: "1-5", label: "Years to Implementation" },
  { value: "100%", label: "AI-Powered Analysis" },
  { value: "24/7", label: "Development Tracking" }
]

export default function Stats() {
  return (
    <section id="stats" className="py-20 bg-primary text-primary-foreground relative">
      <div 
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517747614396-d21a78b850e8?q=80&w=2225&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.15'  // Darkened for better text visibility
        }}
      />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 