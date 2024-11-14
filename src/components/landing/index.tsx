import { Suspense, lazy } from "react"
import { Skeleton } from "@/components/ui/skeleton"

const Hero = lazy(() => import("./Hero"))
const Features = lazy(() => import("./Features"))
const Stats = lazy(() => import("./Stats"))
const CTA = lazy(() => import("./CTA"))
const Navbar = lazy(() => import("./Navbar"))

export function Landing() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<Skeleton className="h-16 w-full" />}>
        <Navbar />
      </Suspense>
      
      <Suspense fallback={<Skeleton className="h-screen w-full" />}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<Skeleton className="h-96 w-full" />}>
        <Features />
      </Suspense>
      
      <Suspense fallback={<Skeleton className="h-48 w-full" />}>
        <Stats />
      </Suspense>
      
      <Suspense fallback={<Skeleton className="h-96 w-full" />}>
        <CTA />
      </Suspense>
    </main>
  )
} 