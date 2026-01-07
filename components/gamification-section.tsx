"use client"

import { Card } from "@/components/ui/card"
import { Award, Flame, Zap, Target, Star, Lock, Utensils, Calendar, ShoppingBag, Heart } from "lucide-react"
import { useState } from "react"

interface Badge {
  id: number
  name: string
  description: string
  icon: typeof Award
  unlocked: boolean
  color: string
  gradientClass: string
  progress?: number
  maxProgress?: number
}

const badges: Badge[] = [
  {
    id: 1,
    name: "Premiere Rescue",
    description: "Premier panier sauve",
    icon: Award,
    unlocked: true,
    color: "text-primary",
    gradientClass: "from-primary to-emerald-600",
  },
  {
    id: 2,
    name: "Streak 7 jours",
    description: "7 jours consecutifs",
    icon: Flame,
    unlocked: true,
    color: "text-secondary",
    gradientClass: "from-secondary to-amber-600",
  },
  {
    id: 3,
    name: "Flash Hunter",
    description: "5 ventes flash achetees",
    icon: Zap,
    unlocked: true,
    color: "text-destructive",
    gradientClass: "from-destructive to-red-600",
  },
  {
    id: 4,
    name: "50 repas sauves",
    description: "Tu as sauve 50 repas!",
    icon: Target,
    unlocked: true,
    color: "text-primary",
    gradientClass: "from-primary to-emerald-600",
  },
  {
    id: 5,
    name: "Warrior du mercredi",
    description: "10 achats le mercredi",
    icon: Calendar,
    unlocked: true,
    color: "text-accent",
    gradientClass: "from-accent to-purple-600",
  },
  {
    id: 6,
    name: "Roi du fromage",
    description: "20 produits laitiers sauves",
    icon: Utensils,
    unlocked: true,
    color: "text-secondary",
    gradientClass: "from-secondary to-amber-600",
  },
  {
    id: 7,
    name: "Early Bird",
    description: "Achat avant 9h",
    icon: Star,
    unlocked: false,
    color: "text-secondary",
    gradientClass: "from-secondary to-amber-600",
    progress: 2,
    maxProgress: 5,
  },
  {
    id: 8,
    name: "Panier VIP",
    description: "Achete 10 paniers premium",
    icon: ShoppingBag,
    unlocked: false,
    color: "text-accent",
    gradientClass: "from-accent to-purple-600",
    progress: 4,
    maxProgress: 10,
  },
  {
    id: 9,
    name: "Eco Hero",
    description: "100kg de CO2 economises",
    icon: Heart,
    unlocked: false,
    color: "text-primary",
    gradientClass: "from-primary to-emerald-600",
    progress: 45,
    maxProgress: 100,
  },
]

export function GamificationSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedBadges = showAll ? badges : badges.slice(0, 6)
  const unlockedCount = badges.filter((b) => b.unlocked).length

  return (
    <Card className="p-5 shadow-lg border-0 animate-slide-up">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-foreground flex items-center gap-2">
            <div className="p-2 bg-gradient-secondary rounded-xl shadow-md">
              <Award className="h-5 w-5 text-white" />
            </div>
            Tes badges
          </h2>
          <span className="text-xs font-semibold text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
            {unlockedCount}/{badges.length} debloques
          </span>
        </div>

        {/* Badge Grid */}
        <div className="grid grid-cols-3 gap-3">
          {displayedBadges.map((badge) => {
            const IconComponent = badge.icon
            return (
              <div
                key={badge.id}
                className={`relative flex flex-col items-center justify-center p-4 rounded-xl transition-all ${
                  badge.unlocked
                    ? "bg-card shadow-md card-hover border border-border/50"
                    : "bg-muted/30 border border-border/30"
                }`}
              >
                {/* Progress ring for locked badges */}
                {!badge.unlocked && badge.progress !== undefined && (
                  <div className="absolute inset-2 flex items-center justify-center pointer-events-none">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="6"
                        className="text-border"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="6"
                        strokeDasharray={`${(badge.progress! / badge.maxProgress!) * 264} 264`}
                        strokeLinecap="round"
                        className="text-primary/50"
                      />
                    </svg>
                  </div>
                )}

                <div
                  className={`relative z-10 p-3 rounded-xl mb-2 ${
                    badge.unlocked ? `bg-gradient-to-br ${badge.gradientClass} shadow-md` : "bg-muted"
                  }`}
                >
                  {badge.unlocked ? (
                    <IconComponent className="h-6 w-6 text-white" />
                  ) : (
                    <Lock className="h-6 w-6 text-muted-foreground" />
                  )}
                </div>
                <span className="relative z-10 text-[11px] text-center font-semibold text-foreground leading-tight">
                  {badge.unlocked ? badge.name : "???"}
                </span>
                {!badge.unlocked && badge.progress !== undefined && (
                  <span className="relative z-10 text-[10px] text-muted-foreground mt-1 font-medium">
                    {badge.progress}/{badge.maxProgress}
                  </span>
                )}
              </div>
            )
          })}
        </div>

        {/* View All Button */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="w-full text-sm text-primary hover:text-primary/80 font-semibold flex items-center justify-center gap-1 pt-2 transition-colors"
        >
          {showAll ? "Voir moins" : `Voir tous mes badges (${badges.length})`}
          <span className="text-lg">{showAll ? "↑" : "→"}</span>
        </button>
      </div>
    </Card>
  )
}
