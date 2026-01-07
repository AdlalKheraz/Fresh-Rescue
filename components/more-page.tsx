"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Store, Heart, History, Gift, Users, Star, ChevronRight, Sparkles } from "lucide-react"

const menuSections = [
  {
    title: "Decouvrir",
    items: [
      { icon: Store, label: "Magasins partenaires", badge: "42", color: "text-primary" },
      { icon: Heart, label: "Mes favoris", badge: "8", color: "text-destructive" },
      { icon: History, label: "Historique complet", badge: null, color: "text-muted-foreground" },
    ],
  },
  {
    title: "Recompenses",
    items: [
      { icon: Gift, label: "Mes bons de reduction", badge: "3", color: "text-secondary" },
      { icon: Sparkles, label: "Fresh+ Premium", badge: "Nouveau", color: "text-accent" },
      { icon: Star, label: "Programme fidelite", badge: null, color: "text-amber-500" },
    ],
  },
  {
    title: "Communaute",
    items: [{ icon: Users, label: "Parrainer un ami", badge: "+20pts", color: "text-primary" }],
  },
]

export function MorePage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="p-4 border-b border-border bg-card">
        <h1 className="text-xl font-bold text-foreground">Plus</h1>
      </div>

      {/* Menu Sections */}
      <div className="p-4 space-y-6">
        {menuSections.map((section) => (
          <div key={section.title}>
            <h2 className="text-sm font-semibold text-muted-foreground mb-2 px-1">{section.title}</h2>
            <Card className="divide-y divide-border">
              {section.items.map((item) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={item.label}
                    className="p-4 flex items-center justify-between hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-muted`}>
                        <IconComponent className={`h-5 w-5 ${item.color}`} />
                      </div>
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <Badge
                          variant={item.badge === "Nouveau" ? "default" : "secondary"}
                          className={item.badge === "Nouveau" ? "bg-accent text-accent-foreground" : ""}
                        >
                          {item.badge}
                        </Badge>
                      )}
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                )
              })}
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
