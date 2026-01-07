"use client"
import { Bell, ShoppingBag, Sparkles } from "lucide-react"
import Image from "next/image"

interface DashboardHeaderProps {
  userName: string
  level: number
  isPremium: boolean
  notificationCount: number
  cartCount: number
  onNotificationClick: () => void
  onCartClick: () => void
}

export function DashboardHeader({
  userName,
  level,
  isPremium,
  notificationCount,
  cartCount,
  onNotificationClick,
  onCartClick,
}: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-50 glass border-b border-border/50 px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        {/* Left: Logo + Greeting */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image src="/logo.png" alt="Fresh Rescue" width={44} height={44} className="rounded-xl shadow-lg" />
            {isPremium && (
              <div className="absolute -top-1 -right-1 bg-gradient-secondary rounded-full p-1">
                <Sparkles className="h-3 w-3 text-white" />
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Bienvenue</span>
            <span className="text-base font-bold text-foreground">{userName}</span>
          </div>
        </div>

        {/* Center: Level Badge */}

        {/* Right: Cart + Notifications */}
        <div className="flex items-center gap-2">
          {/* Cart button */}
          <button
            className="relative p-2.5 rounded-xl bg-card hover:bg-muted transition-colors shadow-sm"
            onClick={onCartClick}
          >
            <ShoppingBag className="h-5 w-5 text-foreground" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-secondary text-white text-[10px] font-bold flex items-center justify-center shadow-md">
                {cartCount}
              </span>
            )}
          </button>
          {/* Notification button */}
          <button
            className="relative p-2.5 rounded-xl bg-card hover:bg-muted transition-colors shadow-sm"
            onClick={onNotificationClick}
          >
            <Bell className="h-5 w-5 text-foreground" />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold flex items-center justify-center shadow-md animate-pulse">
                {notificationCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
