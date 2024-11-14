"use client"

import { createBrowserRouter, RouterProvider, useLocation, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarTrigger,
  SidebarProvider,
} from "@/components/ui/sidebar"
import Dashboard from './components/Dashboard';
import VideoAnalysis from './components/VideoAnalysis';
import PlayerMetrics from './components/PlayerMetrics';
import TacticalBoard from './components/TacticalBoard';
import TeamOverview from './components/TeamOverview';
import PerformanceAnalytics from './components/PerformanceAnalytics';
import MatchStrategy from './components/MatchStrategy';
import CalendarPage from './components/CalendarPage';
import { PlayerProfile } from './components/player/PlayerProfile'
import { AICoach } from './components/player/AICoach'
import { GameSimulation } from './components/player/GameSimulation';
import { PlayerClips } from './components/player/PlayerClips';
import { AppSidebar } from '@/components/layout/Sidebar'
import { Landing } from '@/components/landing/index'

function DashboardLayout() {
  const { pathname } = useLocation();

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex h-16 shrink-0 items-center gap-2"
        >
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Your Team</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {pathname === '/dashboard' ? 'Dashboard' : pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </motion.header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/player-profile",
        element: <PlayerProfile />,
      },
      {
        path: "/dashboard/video",
        element: <VideoAnalysis />,
      },
      {
        path: "/dashboard/metrics",
        element: <PlayerMetrics />,
      },
      {
        path: "/dashboard/tactics",
        element: <TacticalBoard />,
      },
      {
        path: "/dashboard/team-overview",
        element: <TeamOverview />,
      },
      {
        path: "/dashboard/performance-analytics",
        element: <PerformanceAnalytics />,
      },
      {
        path: "/dashboard/match-strategy",
        element: <MatchStrategy />,
      },
      {
        path: "/dashboard/ai-coach",
        element: <AICoach />,
      },
      {
        path: "/dashboard/game-sim",
        element: <GameSimulation />,
      },
      {
        path: "/dashboard/clips",
        element: <PlayerClips />,
      },
      {
        path: "/dashboard/calendar",
        element: <CalendarPage />,
      },
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
