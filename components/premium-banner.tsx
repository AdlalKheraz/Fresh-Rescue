import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Crown, Percent, Sparkles, Zap } from "lucide-react"

export function PremiumBanner() {
  return (
    <Card className="relative overflow-hidden bg-gradient-accent border-0 p-5 shadow-xl animate-scale-in">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-white/20 rounded-xl">
              <Crown className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Fresh+ Premium</h3>
              <p className="text-xs text-white/70">Debloque tous les avantages</p>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-2">
            <span className="text-xl font-black text-white">4,99</span>
            <span className="text-xs text-white/80"> EUR/mois</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
            <Percent className="h-4 w-4 text-secondary" />
            <span className="text-sm font-semibold text-white">-15% sur tous les paniers</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
            <Zap className="h-4 w-4 text-secondary" />
            <span className="text-sm font-semibold text-white">Acces VIP</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-sm font-semibold text-white">Points x2</span>
          </div>
        </div>

        <Button size="lg" className="w-full bg-white text-accent hover:bg-white/90 font-bold rounded-xl shadow-lg">
          S'abonner maintenant
        </Button>
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 animate-shimmer pointer-events-none" />
    </Card>
  )
}
