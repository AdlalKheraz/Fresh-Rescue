"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Search, SlidersHorizontal, Plus } from "lucide-react"

const categories = ["Tous", "Boulangerie", "Fruits", "Legumes", "Viande", "Poisson", "Laitier", "Surgeles"]

const allProducts = [
  {
    id: 1,
    name: "Baguette tradition",
    store: "HyperFresh Marly",
    distance: 0.5,
    image: "/fresh-french-baguette-bread.jpg",
    expiryDate: "07/01",
    originalPrice: 1.2,
    price: 0.4,
    discount: 67,
    stock: 15,
    category: "Boulangerie",
  },
  {
    id: 2,
    name: "Pommes Golden 1kg",
    store: "HyperFresh Anzin",
    distance: 1.2,
    image: "/fresh-golden-apples-in-wooden-basket.jpg",
    expiryDate: "10/01",
    originalPrice: 3.5,
    price: 1.4,
    discount: 60,
    stock: 8,
    category: "Fruits",
  },
  {
    id: 3,
    name: "Filet de saumon 200g",
    store: "HyperFresh Valenciennes",
    distance: 2.1,
    image: "/fresh-salmon-fillet.jpg",
    expiryDate: "08/01",
    originalPrice: 8.9,
    price: 3.56,
    discount: 60,
    stock: 4,
    category: "Poisson",
  },
  {
    id: 4,
    name: "Yaourt nature x12",
    store: "HyperFresh Denain",
    distance: 0.8,
    image: "/plain-yogurt-pack.jpg",
    expiryDate: "09/01",
    originalPrice: 4.8,
    price: 1.92,
    discount: 60,
    stock: 20,
    category: "Laitier",
  },
  {
    id: 5,
    name: "Carottes bio 500g",
    store: "HyperFresh Petite-Foret",
    distance: 1.5,
    image: "/organic-carrots-bunch.png",
    expiryDate: "11/01",
    originalPrice: 2.2,
    price: 0.88,
    discount: 60,
    stock: 12,
    category: "Legumes",
  },
  {
    id: 6,
    name: "Pizza margherita surgele",
    store: "HyperFresh Aulnoy",
    distance: 3.0,
    image: "/frozen-margherita-pizza.jpg",
    expiryDate: "15/01",
    originalPrice: 4.5,
    price: 1.8,
    discount: 60,
    stock: 6,
    category: "Surgeles",
  },
]

export function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = allProducts.filter((p) => {
    const matchesCategory = selectedCategory === "Tous" || p.category === selectedCategory
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-card/95 backdrop-blur border-b border-border p-4 space-y-3">
        <h1 className="text-xl font-bold text-foreground">Catalogue</h1>

        {/* Search */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher un produit..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-4 px-4">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer whitespace-nowrap px-3 py-1.5 ${
                selectedCategory === category ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="p-2 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative mb-2">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <Badge variant="destructive" className="absolute top-1 right-1 font-bold text-xs px-1.5">
                  -{product.discount}%
                </Badge>
              </div>

              <h3 className="text-xs font-semibold text-foreground mb-1 line-clamp-2">{product.name}</h3>

              <div className="flex items-center gap-1 text-[10px] text-muted-foreground mb-2">
                <span>{product.store}</span>
                <span>-</span>
                <MapPin className="h-2.5 w-2.5" />
                <span>{product.distance}km</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-muted-foreground line-through block">
                    {product.originalPrice.toFixed(2)}EUR
                  </span>
                  <span className="text-sm font-bold text-primary">{product.price.toFixed(2)}EUR</span>
                </div>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full bg-primary hover:bg-primary/90">
                  <Plus className="h-4 w-4 text-primary-foreground" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
