"use client"

import * as React from "react"
import {
  Box,
  ScanLine,
  Folder,
  Layers,
  PenLine,
  LayoutGrid,
  Gauge,
  Tag,
  Users,
  Circle,
  MessageCircle,
  Settings,
  PieChart,
  Flag,
  ShoppingCart,
  Wallet,
  Plus,
  FileText,
  SlidersHorizontal,
  Activity,
  Monitor,
  Search,
  HardDrive,
  Cpu
} from "lucide-react"

import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuBadge,
  useSidebar,
} from "@/components/ui/sidebar"

// Sample data structured to support dynamic secondary sidebar content
const teamsData = [
  {
    name: "Untitled UI",
    logo: Box,
    plan: "store.untitledui.com",
  },
  {
    name: "Acme Corp.",
    logo: LayoutGrid,
    plan: "Startup",
  },
  {
    name: "Personal",
    logo: Users,
    plan: "Free",
  },
]

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navFirstBottom: [
    { icon: MessageCircle, title: "Messages" },
    { icon: Settings, title: "Settings" },
  ],
  nav: [
    {
      id: "scan",
      icon: ScanLine,
      title: "Scanner",
      navMain: [
        { title: "Quick Scan", url: "#", icon: ScanLine, isActive: true },
        { title: "Deep Scan", url: "#", icon: Search, isActive: false },
        { title: "Scan History", url: "#", icon: Activity, isActive: false },
      ],
    },
    {
      id: "folder",
      icon: Folder,
      title: "Files",
      navMain: [
        { title: "My Files", url: "#", icon: Folder, isActive: true },
        { title: "Shared with me", url: "#", icon: Users, isActive: false },
        { title: "Recent", url: "#", icon: Activity, isActive: false },
      ],
    },
    {
      id: "layers",
      icon: Layers,
      title: "Projects",
      navMain: [
        { title: "All Projects", url: "#", icon: Layers, isActive: true },
        { title: "Active", url: "#", icon: Activity, isActive: false },
        { title: "Archived", url: "#", icon: Folder, isActive: false },
      ],
    },
    {
      id: "pen",
      icon: PenLine,
      title: "Design",
      navMain: [
        { title: "Drafts", url: "#", icon: PenLine, isActive: true },
        { title: "Templates", url: "#", icon: LayoutGrid, isActive: false },
      ],
    },
    {
      id: "grid",
      icon: LayoutGrid,
      title: "Dashboard",
      navMain: [
        { title: "Overview", url: "#", icon: LayoutGrid, isActive: true },
        { title: "Real-time", url: "#", icon: Activity, isActive: false },
      ],
    },
    {
      id: "analytics",
      icon: Gauge,
      title: "Store", // Context from the image
      navMain: [
        { title: "Products", url: "#", icon: Layers, isActive: false },
        { title: "Analytics", url: "#", icon: Activity, isActive: true },
        { title: "Transactions", url: "#", icon: PieChart, isActive: false },
        { title: "Orders", url: "#", icon: Flag, isActive: false },
        { title: "Subscribers", url: "#", icon: ShoppingCart, isActive: false },
        { title: "Payouts", url: "#", icon: Wallet, isActive: false },
      ],
      navPosts: [
        { title: "Drafts", url: "#", badge: "10" },
        { title: "Scheduled", url: "#", badge: "2" },
        { title: "Published", url: "#", badge: "28" },
      ],
      navBottom: [
        { title: "Performance", url: "#", icon: Gauge },
        { title: "Team management", url: "#", icon: Users },
        { title: "Customize", url: "#", icon: SlidersHorizontal },
      ]
    },
    {
      id: "tag",
      icon: Tag,
      title: "Tags",
      navMain: [
        { title: "All Tags", url: "#", icon: Tag, isActive: true },
        { title: "Categories", url: "#", icon: Layers, isActive: false },
      ],
    },
    {
      id: "users",
      icon: Users,
      title: "Team",
      navMain: [
        { title: "Members", url: "#", icon: Users, isActive: true },
        { title: "Roles", url: "#", icon: Tag, isActive: false },
        { title: "Permissions", url: "#", icon: Settings, isActive: false },
      ],
    },
    {
      id: "circle",
      icon: Circle,
      title: "Servers",
      navMain: [
        { title: "Clusters", url: "#", icon: Circle, isActive: true },
        { title: "Databases", url: "#", icon: HardDrive, isActive: false },
        { title: "Compute", url: "#", icon: Cpu, isActive: false },
      ],
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // Start with the 'Analytics/Store' item selected (index 5)
  const [activeItem, setActiveItem] = React.useState(data.nav[5])
  const { setOpen } = useSidebar()

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden *:data-[sidebar=sidebar]:flex-row"
      {...props}
    >
      {/* First Sidebar (Icons) */}
      <Sidebar
        collapsible="none"
        className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r"
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                <a href="#">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-foreground text-background">
                    <Box className="size-5" />
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                {data.nav.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      tooltip={{
                        children: item.title,
                        hidden: false,
                      }}
                      onClick={() => {
                        setActiveItem(item)
                        setOpen(true)
                      }}
                      isActive={activeItem.id === item.id}
                      className="px-2.5 md:px-2"
                    >
                      <item.icon className="size-5" />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarGroup className="p-0 mb-0">
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                {data.navFirstBottom.map((item, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton 
                      tooltip={{
                        children: item.title,
                        hidden: false,
                      }}
                      className="px-2.5 md:px-2"
                    >
                      <item.icon className="size-5" />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>

      {/* Second Sidebar (Dynamic Content based on activeItem) */}
      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarHeader className="border-b-0 p-4 pb-2">
          <TeamSwitcher teams={teamsData} />
        </SidebarHeader>
        
        <SidebarContent className="px-2 pb-2 scrollbar-hide">
          {/* Main Navigation Section */}
          {activeItem.navMain && (
            <SidebarGroup className="p-0 mb-4">
              <SidebarGroupContent>
                <SidebarMenu>
                  {activeItem.navMain.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton isActive={item.isActive} className="font-medium">
                        <item.icon className="size-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )}

          {/* Posts Section (Only shown if defined for the active item) */}
          {activeItem.navPosts && (
            <SidebarGroup className="p-0 mb-4">
              <div className="flex items-center justify-between px-2 py-1 mb-1">
                <SidebarMenuButton className="font-medium text-muted-foreground flex w-full justify-between hover:bg-transparent">
                  <div className="flex items-center gap-2">
                    <FileText className="size-4" />
                    <span className="text-sm font-medium">Posts</span>
                  </div>
                  <Plus className="size-4 text-muted-foreground" />
                </SidebarMenuButton>
              </div>
              <SidebarGroupContent>
                <SidebarMenu>
                  {activeItem.navPosts.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton className="pl-8 text-muted-foreground font-medium flex justify-between">
                        <span>{item.title}</span>
                        {item.badge && (
                          <SidebarMenuBadge className="bg-muted text-muted-foreground text-[10px] h-5 min-w-5 justify-center px-1 rounded-sm">
                            {item.badge}
                          </SidebarMenuBadge>
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )}

          {/* Pages Section (Shown as example if posts are present to mimic the image) */}
          {activeItem.navPosts && (
            <SidebarGroup className="p-0 mb-4">
              <div className="flex items-center justify-between px-2 py-1">
                <SidebarMenuButton className="font-medium text-muted-foreground flex w-full justify-between hover:bg-transparent">
                  <div className="flex items-center gap-2">
                    <Monitor className="size-4" />
                    <span className="text-sm font-medium">Pages</span>
                  </div>
                  <Plus className="size-4 text-muted-foreground" />
                </SidebarMenuButton>
              </div>
            </SidebarGroup>
          )}

        </SidebarContent>

        {/* Bottom Section (Only shown if defined for the active item) */}
        {activeItem.navBottom && (
          <SidebarFooter className="border-t-0 p-2">
            <SidebarGroup className="p-0">
              <SidebarGroupContent>
                <SidebarMenu>
                  {activeItem.navBottom.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton className="text-muted-foreground font-medium">
                        <item.icon className="size-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarFooter>
        )}
      </Sidebar>
    </Sidebar>
  )
}
