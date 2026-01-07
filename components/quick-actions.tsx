import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, MapPin, Gift, Sparkles } from "lucide-react"

const actions = [
  {
    id: 1,
    label: "Mes reservations",
    icon: Package,
    badge: 2,
    gradientClass: "from-primary to-emerald-600",
  },
  {
    id: 2,
    label: "Magasins proches",
    icon: MapPin,
    badge: null,
    gradientClass: "from-secondary to-amber-600",
  },
  {
    id: 3,
    label: "Parrainer",
    icon: Gift,
    badge: "+20 pts",
    gradientClass: "from-accent to-purple-600",
  },
]

export function QuickActions() {
  return (
    <div className="space-y-4 animate-slide-up">
      <h2 className="text-base font-bold text-foreground flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-secondary" />
        Actions rapides
      </h2>

      <div className="grid grid-cols-3 gap-3">
        {actions.map((action) => {
          const IconComponent = action.icon
          return (
            <Card
              key={action.id}
              className="relative p-4 flex flex-col items-center justify-center gap-3 cursor-pointer card-hover border-0 shadow-lg"
            >
              {action.badge && (
                <Badge className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-[10px] font-bold px-2 py-1 shadow-md border-0">
                  {action.badge}
                </Badge>
              )}
              <div className={`p-4 rounded-xl bg-gradient-to-br ${action.gradientClass} shadow-md`}>
                <IconComponent className="h-6 w-6 text-white" />
              </div>
              <span className="text-xs font-semibold text-center text-foreground leading-tight">{action.label}</span>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
