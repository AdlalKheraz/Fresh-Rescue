"use client"

import { X, Minus, Plus, Trash2, ShoppingBag, MapPin, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface CartPageProps {
  isOpen: boolean
  onClose: () => void
}

const initialCartItems = [
  {
    id: 1,
    name: "Plateau sushi premium",
    store: "HyperFresh Marly",
    distance: 2.3,
    image: "/sushi-platter-premium.jpg",
    expiryDate: "09/01",
    originalPrice: 15.9,
    price: 4.77,
    quantity: 1,
  },
  {
    id: 2,
    name: "Salade mesclun bio 200g",
    store: "HyperFresh Anzin",
    distance: 1.8,
    image: "/organic-mesclun-salad.jpg",
    expiryDate: "08/01",
    originalPrice: 3.5,
    price: 1.75,
    quantity: 2,
  },
]

export function CartPage({ isOpen, onClose }: CartPageProps) {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item)),
    )
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const originalTotal = cartItems.reduce((sum, item) => sum + item.originalPrice * item.quantity, 0)
  const savings = originalTotal - subtotal

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Page */}
      <div className="fixed inset-0 bg-background z-[70] animate-in slide-in-from-bottom duration-300 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border glass">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-xl shadow-md">
              <ShoppingBag className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">Mon Panier</h2>
              <p className="text-xs text-muted-foreground">{cartItems.length} articles</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-xl">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-8">
              <div className="p-6 bg-muted rounded-3xl mb-6">
                <ShoppingBag className="h-16 w-16 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Panier vide</h3>
              <p className="text-sm text-muted-foreground">Decouvre les offres et sauve des produits!</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <Card key={item.id} className="p-4 shadow-lg border-0 animate-scale-in">
                <div className="flex gap-4">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl flex-shrink-0 shadow-md"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-sm font-bold text-foreground line-clamp-2 pr-2">{item.name}</h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg flex-shrink-0"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <span className="font-medium text-primary">{item.store}</span>
                      <span className="flex items-center gap-0.5">
                        <MapPin className="h-3 w-3" />
                        {item.distance} km
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-muted rounded-xl p-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-lg hover:bg-background"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-sm font-bold w-6 text-center">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-lg hover:bg-background"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-muted-foreground line-through block">
                          {(item.originalPrice * item.quantity).toFixed(2)} EUR
                        </span>
                        <span className="text-xl font-black text-primary">
                          {(item.price * item.quantity).toFixed(2)} EUR
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-border glass p-5 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Sous-total</span>
                <span className="text-foreground font-medium">{subtotal.toFixed(2)} EUR</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-primary font-semibold flex items-center gap-1">
                  <Sparkles className="h-4 w-4" />
                  Economie
                </span>
                <span className="text-primary font-bold">-{savings.toFixed(2)} EUR</span>
              </div>
              <div className="flex justify-between text-xl font-black border-t border-border pt-3">
                <span>Total</span>
                <span className="text-primary">{subtotal.toFixed(2)} EUR</span>
              </div>
            </div>
            <Button className="w-full bg-gradient-primary hover:opacity-90 text-white font-bold py-6 rounded-2xl shadow-xl text-base">
              Confirmer la reservation
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
