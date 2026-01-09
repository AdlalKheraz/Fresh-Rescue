import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Mock Data
const categories = [
  { id: 'all', name: 'Tout', icon: 'apps' },
  { id: 'bakery', name: 'Boulangerie', icon: 'restaurant' },
  { id: 'fruits', name: 'Fruits & Légumes', icon: 'leaf' },
  { id: 'meal', name: 'Plats préparés', icon: 'fast-food' },
  { id: 'fresh', name: 'Frais', icon: 'fish' },
];

const products = [
  {
    id: '1',
    name: 'Plateau Sushi Premium',
    store: 'HyperFresh Marly',
    category: 'meal',
    price: 4.77,
    originalPrice: 15.9,
    discount: 70,
    distance: 2.3,
    pickupTime: '18h - 20h',
    image: null,
  },
  {
    id: '2',
    name: 'Salade Mesclun Bio',
    store: 'HyperFresh Anzin',
    category: 'fruits',
    price: 1.75,
    originalPrice: 3.5,
    discount: 50,
    distance: 1.8,
    pickupTime: '17h - 19h',
    image: null,
  },
  {
    id: '3',
    name: 'Baguette Tradition',
    store: 'Boulangerie Paul',
    category: 'bakery',
    price: 0.8,
    originalPrice: 1.2,
    discount: 33,
    distance: 0.5,
    pickupTime: '17h - 19h',
    image: null,
  },
  {
    id: '4',
    name: 'Saumon Frais 200g',
    store: 'Carrefour City',
    category: 'fresh',
    price: 3.99,
    originalPrice: 8.99,
    discount: 56,
    distance: 1.2,
    pickupTime: '19h - 21h',
    image: null,
  },
  {
    id: '5',
    name: 'Panier Surprise Viennoiseries',
    store: 'Boulangerie Marie',
    category: 'bakery',
    price: 2.99,
    originalPrice: 9.0,
    discount: 67,
    distance: 0.8,
    pickupTime: '17h30 - 19h',
    image: null,
  },
  {
    id: '6',
    name: 'Salade César Poulet',
    store: 'HyperFresh Marly',
    category: 'meal',
    price: 3.5,
    originalPrice: 7.9,
    discount: 56,
    distance: 2.3,
    pickupTime: '12h - 14h',
    image: null,
  },
];

export default function CatalogScreen() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderProductItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.productCard}>
      <View style={styles.productImagePlaceholder}>
        <Ionicons name="basket" size={40} color="#16a34a" />
      </View>

      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>-{item.discount}%</Text>
      </View>

      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>
          {item.name}
        </Text>

        <View style={styles.storeInfo}>
          <Ionicons name="storefront-outline" size={12} color="#64748b" />
          <Text style={styles.storeText} numberOfLines={1}>
            {item.store}
          </Text>
        </View>

        <View style={styles.productDetails}>
          <View style={styles.detailRow}>
            <Ionicons name="time-outline" size={12} color="#64748b" />
            <Text style={styles.detailText}>{item.pickupTime}</Text>
          </View>
          <View style={styles.detailRow}>
            <Ionicons name="location-outline" size={12} color="#64748b" />
            <Text style={styles.detailText}>{item.distance} km</Text>
          </View>
        </View>

        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.originalPrice}>{item.originalPrice.toFixed(2)} €</Text>
            <Text style={styles.price}>{item.price.toFixed(2)} €</Text>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Catalogue</Text>
        <Text style={styles.headerSubtitle}>{filteredProducts.length} produits disponibles</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchSection}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#94a3b8" />
          <TextInput
            style={styles.searchInput}
            placeholder="Rechercher un produit..."
            placeholderTextColor="#94a3b8"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color="#94a3b8" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Categories */}
      <View style={styles.categoriesSection}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categories}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[styles.categoryChip, selectedCategory === category.id && styles.categoryChipActive]}
              onPress={() => setSelectedCategory(category.id)}>
              <Ionicons
                name={category.icon as any}
                size={16}
                color={selectedCategory === category.id ? 'white' : '#64748b'}
              />
              <Text
                style={[styles.categoryText, selectedCategory === category.id && styles.categoryTextActive]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Products Grid */}
      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.productsList}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Ionicons name="basket-outline" size={64} color="#cbd5e1" />
            <Text style={styles.emptyStateText}>Aucun produit trouvé</Text>
            <Text style={styles.emptyStateSubtext}>Essayez de modifier vos filtres</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#0f172a',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  searchSection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#0f172a',
  },
  categoriesSection: {
    backgroundColor: 'white',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  categories: {
    paddingHorizontal: 20,
    gap: 8,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f1f5f9',
    borderRadius: 20,
  },
  categoryChipActive: {
    backgroundColor: '#16a34a',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748b',
  },
  categoryTextActive: {
    color: 'white',
  },
  productsList: {
    padding: 16,
    paddingBottom: 120,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  productCard: {
    flex: 1,
    maxWidth: '48%',
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  productImagePlaceholder: {
    width: '100%',
    height: 140,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#ef4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  discountText: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 6,
    minHeight: 36,
  },
  storeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 8,
  },
  storeText: {
    fontSize: 11,
    color: '#64748b',
    flex: 1,
  },
  productDetails: {
    gap: 4,
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  detailText: {
    fontSize: 11,
    color: '#64748b',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  addButton: {
    backgroundColor: '#16a34a',
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
    marginTop: 16,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
});
