"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, ShoppingBag } from "lucide-react"

const categories = ["Tous", "Fruits & Legumes", "Frais", "Surgeles"]

const products = [
  {
    id: 1,
    name: "Plateau de sushi saumon avocat",
    store: "HyperFresh Marly",
    distance: 2.3,
    image: "/sushi-salmon-avocado-platter.jpg",
    expiryDate: "09/01",
    originalPrice: 12.9,
    price: 6.45,
    discount: 50,
    stock: 7,
    category: "Frais",
  },
  {
    id: 2,
    name: "Salade mesclun bio 200g",
    store: "HyperFresh Anzin",
    distance: 1.8,
    image: "/organic-mesclun-salad-fresh.jpg",
    expiryDate: "08/01",
    originalPrice: 3.5,
    price: 1.75,
    discount: 50,
    stock: 12,
    category: "Fruits & Legumes",
  },
  {
    id: 3,
    name: "Pizza 4 fromages",
    store: "HyperFresh Valenciennes",
    distance: 3.1,
    image: "/four-cheese-pizza-frozen.jpg",
    expiryDate: "10/01",
    originalPrice: 5.9,
    price: 2.36,
    discount: 60,
    stock: 4,
    category: "Surgeles",
  },
  {
    id: 4,
    name: "Yaourts bio fraise x6",
    store: "HyperFresh Denain",
    distance: 2.3,
    image: "/strawberry-yogurt-pack-organic.jpg",
    expiryDate: "11/01",
    originalPrice: 4.2,
    price: 1.68,
    discount: 60,
    stock: 9,
    category: "Frais",
  },
]

export function AvailableBaskets() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")

  const filteredProducts =
    selectedCategory === "Tous" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <div className="space-y-4 animate-slide-up">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
          <div className="p-2 bg-gradient-primary rounded-xl shadow-md">
            <ShoppingBag className="h-5 w-5 text-white" />
          </div>
          Paniers Dispos
        </h2>
        <span className="text-sm text-muted-foreground">{filteredProducts.length} produits</span>
      </div>

      {/* Category Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              selectedCategory === category
                ? "bg-gradient-primary text-white shadow-lg"
                : "bg-card text-muted-foreground hover:bg-muted border border-border"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className="space-y-3">
        {filteredProducts.map((product, index) => (
          <Card
            key={product.id}
            className="p-0 overflow-hidden shadow-lg border-0 card-hover"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex">
              {/* Product Image */}
              <div className="relative flex-shrink-0">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-28 h-full object-cover"
                />
                <Badge className="absolute top-2 left-2 bg-gradient-secondary text-white font-bold text-xs px-2 py-1 shadow-md border-0">
                  -{product.discount}%
                </Badge>
              </div>

              {/* Product Info */}
              <div className="flex-1 p-4 flex flex-col justify-between min-w-0">
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs font-semibold text-primary">{product.store}</span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{product.distance} km</span>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-foreground mb-2 line-clamp-1">{product.name}</h3>

                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className="text-xs px-2 py-1 border-secondary/40 text-secondary bg-secondary/5"
                    >
                      <Clock className="h-3 w-3 mr-1" />
                      Expire le {product.expiryDate}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{product.stock} dispo</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <div>
                    <span className="text-xs text-muted-foreground line-through block">
                      {product.originalPrice.toFixed(2)} EUR
                    </span>
                    <span className="text-xl font-black text-primary">{product.price.toFixed(2)}</span>
                    <span className="text-xs text-primary font-medium"> EUR</span>
                  </div>
                  <Button className="bg-gradient-primary hover:opacity-90 text-white font-bold rounded-xl px-5 shadow-lg">
                    Reserver
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
