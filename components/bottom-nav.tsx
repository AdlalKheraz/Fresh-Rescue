"use client"

import { Home, QrCode, User, LayoutGrid, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface BottomNavProps {
  activeTab: "home" | "catalog" | "scan" | "profile" | "more"
  onTabChange: (tab: "home" | "catalog" | "scan" | "profile" | "more") => void
}

const navItems = [
  { id: "home" as const, label: "Accueil", icon: Home },
  { id: "catalog" as const, label: "Catalogue", icon: LayoutGrid },
  { id: "scan" as const, label: "QR Code", icon: QrCode, isCenter: true },
  { id: "profile" as const, label: "Profil", icon: User },
  { id: "more" as const, label: "Plus", icon: MoreHorizontal },
]

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 glass border-t border-border/50 z-50 pb-safe">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const IconComponent = item.icon
          const isActive = activeTab === item.id

          if (item.isCenter) {
            return (
              <button
                key={item.id}
                className="flex flex-col items-center justify-center relative -mt-8"
                onClick={() => onTabChange(item.id)}
              >
                <div
                  className={cn(
                    "rounded-2xl p-4 shadow-xl transition-all duration-300 border-4 border-background",
                    isActive ? "bg-gradient-primary scale-110" : "bg-gradient-accent hover:scale-105",
                  )}
                >
                  <Image src="/logo.png" alt="Fresh Rescue" width={32} height={32} className="rounded-lg" />
                </div>
                <span
                  className={cn(
                    "text-[10px] font-semibold mt-1.5 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </span>
              </button>
            )
          }

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all min-w-[56px]",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <div className={cn("p-2 rounded-xl transition-all", isActive ? "bg-primary/10" : "bg-transparent")}>
                <IconComponent className={cn("h-5 w-5", isActive && "text-primary")} />
              </div>
              <span className={cn("text-[10px] font-medium", isActive && "font-bold")}>{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
