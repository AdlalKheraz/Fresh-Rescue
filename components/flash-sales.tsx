"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Zap, Plus, Clock } from "lucide-react"

const flashProducts = [
  {
    id: 1,
    name: "Plateau sushi premium",
    store: "HyperFresh Marly",
    image: "/premium-sushi-platter-fresh.jpg",
    originalPrice: 15.9,
    flashPrice: 4.77,
    discount: 70,
    stock: 3,
  },
  {
    id: 2,
    name: "Salade Cesar poulet",
    store: "HyperFresh Anzin",
    image: "/caesar-salad-chicken-fresh.jpg",
    originalPrice: 8.5,
    flashPrice: 2.55,
    discount: 70,
    stock: 5,
  },
  {
    id: 3,
    name: "Wrap veggie avocat",
    store: "HyperFresh Valenciennes",
    image: "/veggie-avocado-wrap-fresh.jpg",
    originalPrice: 6.9,
    flashPrice: 2.07,
    discount: 70,
    stock: 2,
  },
]

export function FlashSales() {
  return (
    <div className="space-y-4 animate-slide-up">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
          <div className="p-2 bg-gradient-secondary rounded-xl shadow-md">
            <Zap className="h-5 w-5 text-white" />
          </div>
          Flash Sales
        </h2>
        <Badge className="bg-destructive text-destructive-foreground font-bold px-3 py-1.5 animate-pulse-glow border-0">
          <Clock className="h-3.5 w-3.5 mr-1.5" />
          EXPIRE DANS 2H
        </Badge>
      </div>

      {/* Horizontal Scroll */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
        {flashProducts.map((product, index) => (
          <Card
            key={product.id}
            className="flex-shrink-0 w-[180px] p-0 overflow-hidden shadow-lg border-0 card-hover"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative">
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-32 object-cover" />
              <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground font-black text-sm px-2.5 py-1 shadow-lg border-0">
                -{product.discount}%
              </Badge>
              {/* Urgency indicator */}
              <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/70 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-destructive rounded-full animate-pulse" />
                Plus que {product.stock}
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-sm font-semibold text-foreground mb-1 line-clamp-2">{product.name}</h3>
              <p className="text-[11px] text-muted-foreground mb-3">{product.store}</p>

              <div className="flex items-end justify-between">
                <div>
                  <span className="text-xs text-muted-foreground line-through block">
                    {product.originalPrice.toFixed(2)} EUR
                  </span>
                  <span className="text-2xl font-black text-secondary">{product.flashPrice.toFixed(2)}</span>
                  <span className="text-xs text-secondary font-medium"> EUR</span>
                </div>
                <Button size="icon" className="h-10 w-10 rounded-xl bg-gradient-primary hover:opacity-90 shadow-lg">
                  <Plus className="h-5 w-5 text-white" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
