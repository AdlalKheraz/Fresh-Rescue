import { Card } from "@/components/ui/card"
import { ShoppingBag, Clock, ChevronRight } from "lucide-react"

const recentPurchases = [
  {
    id: 1,
    item: "Salade Cesar",
    store: "HyperFresh Marly",
    price: 3.2,
    time: "Hier",
    saved: 4.8,
  },
  {
    id: 2,
    item: "Yaourts bio x6",
    store: "HyperFresh Anzin",
    price: 2.1,
    time: "Il y a 3 jours",
    saved: 3.15,
  },
  {
    id: 3,
    item: "Pizza margherita",
    store: "HyperFresh Valenciennes",
    price: 2.5,
    time: "Il y a 5 jours",
    saved: 3.75,
  },
]

export function PurchaseHistory() {
  return (
    <Card className="p-5 shadow-lg border-0 animate-slide-up">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-foreground flex items-center gap-2">
            <div className="p-2 bg-gradient-accent rounded-xl shadow-md">
              <ShoppingBag className="h-5 w-5 text-white" />
            </div>
            Historique
          </h3>
          <span className="text-xs text-muted-foreground">{recentPurchases.length} recents</span>
        </div>

        <div className="space-y-3">
          {recentPurchases.map((purchase) => (
            <div
              key={purchase.id}
              className="flex items-center justify-between p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary/10 flex items-center justify-center">
                  <ShoppingBag className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{purchase.item}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="text-primary font-medium">{purchase.store}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {purchase.time}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-primary block">{purchase.price.toFixed(2)} EUR</span>
                <span className="text-[10px] text-muted-foreground">-{purchase.saved.toFixed(2)} EUR economises</span>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full text-sm text-primary hover:text-primary/80 font-semibold flex items-center justify-center gap-1 pt-2 transition-colors">
          Voir l'historique complet
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </Card>
  )
}
