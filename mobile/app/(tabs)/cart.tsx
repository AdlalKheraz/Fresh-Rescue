import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CartItem {
  id: number;
  name: string;
  store: string;
  distance: number;
  expiryDate: string;
  originalPrice: number;
  price: number;
  quantity: number;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: 'Plateau sushi premium',
    store: 'HyperFresh Marly',
    distance: 2.3,
    expiryDate: '09/01',
    originalPrice: 15.9,
    price: 4.77,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Salade mesclun bio 200g',
    store: 'HyperFresh Anzin',
    distance: 1.8,
    expiryDate: '08/01',
    originalPrice: 3.5,
    price: 1.75,
    quantity: 2,
  },
];

export default function CartScreen() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    Alert.alert('Supprimer l\'article', 'Voulez-vous vraiment supprimer cet article du panier ?', [
      { text: 'Annuler', style: 'cancel' },
      {
        text: 'Supprimer',
        style: 'destructive',
        onPress: () => setCartItems((items) => items.filter((item) => item.id !== id)),
      },
    ]);
  };

  const handleCheckout = () => {
    Alert.alert('Confirmation', 'Voulez-vous confirmer votre réservation ?', [
      { text: 'Annuler', style: 'cancel' },
      {
        text: 'Confirmer',
        onPress: () => Alert.alert('Succès', 'Votre réservation a été confirmée !'),
      },
    ]);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const originalTotal = cartItems.reduce((sum, item) => sum + item.originalPrice * item.quantity, 0);
  const savings = originalTotal - subtotal;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.iconContainer}>
            <Ionicons name="cart" size={24} color="white" />
          </View>
          <View>
            <Text style={styles.headerTitle}>Mon Panier</Text>
            <Text style={styles.headerSubtitle}>{cartItems.length} articles</Text>
          </View>
        </View>
      </View>

      {/* Cart Content */}
      {cartItems.length === 0 ? (
        <View style={styles.emptyCart}>
          <View style={styles.emptyIconContainer}>
            <Ionicons name="cart-outline" size={80} color="#cbd5e1" />
          </View>
          <Text style={styles.emptyTitle}>Panier vide</Text>
          <Text style={styles.emptySubtitle}>Découvre les offres et sauve des produits!</Text>
        </View>
      ) : (
        <>
          <ScrollView style={styles.cartItems} contentContainerStyle={styles.cartItemsContent}>
            {cartItems.map((item) => (
              <View key={item.id} style={styles.cartItem}>
                <View style={styles.itemImagePlaceholder}>
                  <Ionicons name="basket" size={32} color="#16a34a" />
                </View>

                <View style={styles.itemDetails}>
                  <View style={styles.itemHeader}>
                    <Text style={styles.itemName} numberOfLines={2}>
                      {item.name}
                    </Text>
                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={() => removeItem(item.id)}>
                      <Ionicons name="trash-outline" size={18} color="#ef4444" />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.itemMeta}>
                    <View style={styles.storeInfo}>
                      <Ionicons name="storefront" size={12} color="#16a34a" />
                      <Text style={styles.storeName}>{item.store}</Text>
                    </View>
                    <View style={styles.distanceInfo}>
                      <Ionicons name="location" size={12} color="#64748b" />
                      <Text style={styles.distanceText}>{item.distance} km</Text>
                    </View>
                  </View>

                  <View style={styles.itemFooter}>
                    <View style={styles.quantityControls}>
                      <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => updateQuantity(item.id, -1)}>
                        <Ionicons name="remove" size={16} color="#0f172a" />
                      </TouchableOpacity>
                      <Text style={styles.quantity}>{item.quantity}</Text>
                      <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => updateQuantity(item.id, 1)}>
                        <Ionicons name="add" size={16} color="#0f172a" />
                      </TouchableOpacity>
                    </View>

                    <View style={styles.priceInfo}>
                      <Text style={styles.originalPrice}>
                        {(item.originalPrice * item.quantity).toFixed(2)} €
                      </Text>
                      <Text style={styles.price}>{(item.price * item.quantity).toFixed(2)} €</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>

          {/* Footer */}
          <View style={styles.footer}>
            <View style={styles.summarySection}>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Sous-total</Text>
                <Text style={styles.summaryValue}>{subtotal.toFixed(2)} €</Text>
              </View>
              <View style={styles.summaryRow}>
                <View style={styles.savingsLabel}>
                  <Ionicons name="sparkles" size={14} color="#16a34a" />
                  <Text style={styles.savingsText}>Économie</Text>
                </View>
                <Text style={styles.savingsValue}>-{savings.toFixed(2)} €</Text>
              </View>
              <View style={[styles.summaryRow, styles.totalRow]}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalValue}>{subtotal.toFixed(2)} €</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
              <Text style={styles.checkoutButtonText}>Confirmer la réservation</Text>
              <Ionicons name="arrow-forward" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: '#16a34a',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0f172a',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 2,
  },
  emptyCart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  emptyIconContainer: {
    width: 160,
    height: 160,
    backgroundColor: '#f1f5f9',
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#0f172a',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
  },
  cartItems: {
    flex: 1,
  },
  cartItemsContent: {
    padding: 16,
    paddingBottom: 120,
  },
  cartItem: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  itemImagePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemDetails: {
    flex: 1,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  itemName: {
    flex: 1,
    fontSize: 15,
    fontWeight: '700',
    color: '#0f172a',
    paddingRight: 8,
  },
  deleteButton: {
    padding: 4,
  },
  itemMeta: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  storeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  storeName: {
    fontSize: 12,
    color: '#16a34a',
    fontWeight: '600',
  },
  distanceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  distanceText: {
    fontSize: 12,
    color: '#64748b',
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  quantityButton: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  quantity: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0f172a',
    minWidth: 32,
    textAlign: 'center',
  },
  priceInfo: {
    alignItems: 'flex-end',
  },
  originalPrice: {
    fontSize: 11,
    color: '#94a3b8',
    textDecorationLine: 'line-through',
  },
  price: {
    fontSize: 18,
    fontWeight: '900',
    color: '#16a34a',
  },
  footer: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    padding: 20,
    paddingBottom: 100,
  },
  summarySection: {
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#64748b',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0f172a',
  },
  savingsLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  savingsText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#16a34a',
  },
  savingsValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#16a34a',
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    marginTop: 8,
    paddingTop: 16,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0f172a',
  },
  totalValue: {
    fontSize: 24,
    fontWeight: '900',
    color: '#16a34a',
  },
  checkoutButton: {
    backgroundColor: '#16a34a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: '#16a34a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
