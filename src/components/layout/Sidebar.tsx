"use client"

import { useLocation, Link } from 'react-router-dom';
import {
  BadgeCheck,
  Bell,
  Calendar,
  ChartArea,
  ChevronsUpDown,
  CreditCard,
  Folder,
  Frame,
  Gamepad2,
  LayoutIcon,
  LifeBuoy,
  LogOut,
  Map,
  MoreHorizontal,
  PieChart,
  Send,
  Share,
  Sparkles,
  Trash2,
  Users,
  Video,
} from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Collapsible,
} from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar as SidebarPrimitive,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useAtom } from 'jotai'
import { Role, userAtom, users } from '@/lib/store/Atoms'

const data = {
  navSecondary: [
    {
      title: "Support",
      path: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      path: "#",
      icon: Send,
    },
  ],
  team: [
    {
      title: "Team Overview",
      path: "/team-overview",
      icon: Frame,
    },
    {
      title: "Performance Analytics",
      path: "/performance-analytics",
      icon: PieChart,
    },
    {
      title: "Match Strategy",
      path: "/match-strategy",
      icon: Map,
    },
  ],
}

function getNavigation(role: Role) {
  const commonNav = [
    { title: 'Calendar', icon: Calendar, path: '/calendar' },
  ]

  const coachNav = [
    { title: 'Dashboard', icon: LayoutIcon, path: '/', isActive: true },
    { title: 'Video Analysis', icon: Video, path: '/video' },
    { title: 'Player Metrics', icon: ChartArea, path: '/metrics' },
    { title: 'Tactical Board', icon: Users, path: '/tactics' },
    ...commonNav
  ]

  const playerNav = [
    { title: 'My Profile', icon: LayoutIcon, path: '/player-profile', isActive: true },
    { title: 'AI Coach', icon: Sparkles, path: '/ai-coach' },
    { title: 'Game Simulation', icon: Gamepad2, path: '/game-sim' },
    { title: 'My Clips', icon: Video, path: '/clips' },
    ...commonNav
  ]

  return role === 'coach' ? coachNav : playerNav
}

export function AppSidebar() {
  const { pathname } = useLocation();
  const [user, setUser] = useAtom(userAtom);

  const userDropdownContent = (
    <DropdownMenuContent
      className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
      side="bottom"
      align="end"
      sideOffset={4}
    >
      <DropdownMenuLabel>Switch User</DropdownMenuLabel>
      <DropdownMenuSeparator />
      {users.map((u) => (
        <DropdownMenuItem key={u.id} onClick={() => setUser(u)}>
          <Avatar className="h-8 w-8 rounded-lg mr-2">
            <AvatarImage src={u.avatar} alt={u.name} />
            <AvatarFallback>{u.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span>{u.name}</span>
            <span className="text-xs text-muted-foreground">{u.role}</span>
          </div>
        </DropdownMenuItem>
      ))}
      <DropdownMenuItem>
        <Sparkles className="mr-2" />
        Upgrade to Pro
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <BadgeCheck className="mr-2" />
          Account
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard className="mr-2" />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Bell className="mr-2" />
          Notifications
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LogOut className="mr-2" />
        Log out
      </DropdownMenuItem>
    </DropdownMenuContent>
  )

  return (
    <SidebarPrimitive variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-transparent text-sidebar-primary-foreground">
                  <img src="/media/images/logo.svg" alt="REAI Logo" className="w-full h-full object-contain" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">REAI</span>
                  <span className="truncate text-xs">Sports Analytics</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* Platform Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarMenu>
            {getNavigation(user.role).map((item) => (
              <Collapsible key={item.title} asChild>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    asChild 
                    tooltip={item.title} 
                    className={pathname === item.path ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}
                  >
                    <Link to={item.path}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        {/* Team Navigation */}
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Team</SidebarGroupLabel>
          <SidebarMenu>
            {data.team.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton 
                  asChild 
                  className={pathname === item.path ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}
                >
                  <Link to={item.path}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
                <TeamItemDropdown />
              </SidebarMenuItem>
            ))}
            <SidebarMenuItem>
              <SidebarMenuButton>
                <MoreHorizontal />
                <span>More</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* Secondary Navigation */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navSecondary.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size="sm">
                    <Link to={item.path}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer with User Menu */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="rounded-lg">{user.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">{user.name}</span>
                    <span className="truncate text-xs">{user.email}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              {userDropdownContent}
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </SidebarPrimitive>
  )
}

function TeamItemDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuAction showOnHover>
          <MoreHorizontal />
          <span className="sr-only">More</span>
        </SidebarMenuAction>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" side="bottom" align="end">
        <DropdownMenuItem>
          <Folder className="mr-2 text-muted-foreground" />
          <span>View Team</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Share className="mr-2 text-muted-foreground" />
          <span>Share Team</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Trash2 className="mr-2 text-muted-foreground" />
          <span>Delete Team</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 