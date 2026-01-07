"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Settings,
  CreditCard,
  MapPin,
  Bell,
  HelpCircle,
  LogOut,
  ChevronRight,
  Leaf,
  Trophy,
  ShoppingBag,
  Sparkles,
} from "lucide-react"

const menuItems = [
  { icon: CreditCard, label: "Moyens de paiement", badge: null },
  { icon: MapPin, label: "Adresses sauvegardees", badge: "2" },
  { icon: Bell, label: "Preferences de notification", badge: null },
  { icon: Settings, label: "Parametres", badge: null },
  { icon: HelpCircle, label: "Aide & Support", badge: null },
]

const stats = [
  { icon: Leaf, label: "CO2 economise", value: "18.5 kg", gradientClass: "from-primary to-emerald-600" },
  { icon: Trophy, label: "Badges", value: "12", gradientClass: "from-secondary to-amber-600" },
  { icon: ShoppingBag, label: "Commandes", value: "34", gradientClass: "from-accent to-purple-600" },
]

export function ProfilePage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10" />
        <div className="relative pt-10 pb-8 px-4">
          <div className="flex flex-col items-center">
            <div className="relative">
              <Avatar className="h-28 w-28 border-4 border-white shadow-xl">
                <AvatarFallback className="bg-gradient-primary text-white text-3xl font-bold">L</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 p-2 bg-gradient-secondary rounded-full shadow-lg">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-black text-foreground mt-4">Lea Martin</h1>
            <p className="text-sm text-muted-foreground">lea.martin@email.com</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 -mt-4">
        <Card className="p-5 shadow-xl border-0">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => {
              const IconComponent = stat.icon
              return (
                <div key={stat.label} className="flex flex-col items-center text-center">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradientClass} shadow-md mb-2`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-black text-foreground">{stat.value}</span>
                  <span className="text-[10px] text-muted-foreground font-medium">{stat.label}</span>
                </div>
              )
            })}
          </div>
        </Card>
      </div>

      {/* Menu */}
      <div className="px-4 mt-6 space-y-2">
        {menuItems.map((item) => {
          const IconComponent = item.icon
          return (
            <Card
              key={item.label}
              className="p-4 flex items-center justify-between card-hover cursor-pointer border-0 shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-muted">
                  <IconComponent className="h-5 w-5 text-muted-foreground" />
                </div>
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Logout */}
      <div className="px-4 mt-8">
        <Button
          variant="outline"
          className="w-full text-destructive hover:bg-destructive/10 border-destructive/30 bg-transparent font-semibold py-6 rounded-xl"
        >
          <LogOut className="h-5 w-5 mr-2" />
          Se deconnecter
        </Button>
      </div>
    </div>
  )
}
