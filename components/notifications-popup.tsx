"use client"

import { X, Bell, Tag, Trophy, AlertTriangle, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface NotificationsPopupProps {
  isOpen: boolean
  onClose: () => void
}

const notifications = [
  {
    id: 1,
    type: "flash",
    title: "Flash Sale!",
    message: "Sushi -70% disponible maintenant",
    time: "Il y a 2 min",
    icon: Tag,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    id: 2,
    type: "badge",
    title: "Nouveau Badge!",
    message: "Tu as debloque 'Sauveur du Week-end'",
    time: "Il y a 1h",
    icon: Trophy,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    id: 3,
    type: "expiry",
    title: "Rappel DLC",
    message: "Ta reservation expire dans 2h",
    time: "Il y a 2h",
    icon: AlertTriangle,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    id: 4,
    type: "nearby",
    title: "Pres de toi",
    message: "3 nouveaux paniers a 500m",
    time: "Il y a 3h",
    icon: MapPin,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

export function NotificationsPopup({ isOpen, onClose }: NotificationsPopupProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-[60] animate-in fade-in duration-200" onClick={onClose} />

      {/* Popup */}
      <div className="fixed top-0 right-0 w-full max-w-sm h-full bg-card z-[70] shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">Notifications</h2>
            <Badge variant="secondary" className="font-bold">
              {notifications.length}
            </Badge>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Notifications List */}
        <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-80px)]">
          {notifications.map((notif) => {
            const IconComponent = notif.icon
            return (
              <Card key={notif.id} className="p-3 hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="flex gap-3">
                  <div className={`p-2 rounded-full ${notif.bgColor} flex-shrink-0`}>
                    <IconComponent className={`h-4 w-4 ${notif.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-semibold text-foreground">{notif.title}</h3>
                      <span className="text-[10px] text-muted-foreground">{notif.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{notif.message}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}
