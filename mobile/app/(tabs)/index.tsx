import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, SafeAreaView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/theme';

// Mock Data
const userStats = {
  co2Saved: "18.5 kg",
  mealsSaved: 34,
};

const flashSales = [
  { id: '1', title: 'Panier Boulangerie', price: '3.99 €', oldPrice: '12.00 €', image: require('@/assets/images/react-logo.png') }, // Placeholder image
  { id: '2', title: 'Fruits & Légumes', price: '4.50 €', oldPrice: '15.00 €', image: require('@/assets/images/react-logo.png') },
];

const availableBaskets = [
  { id: '1', store: 'HyperFresh Marly', title: 'Panier Surprise', price: '4.99 €', time: '18h - 20h', distance: '1.2 km' },
  { id: '2', store: 'Boulangerie Paul', title: 'Viennoiseries', price: '2.99 €', time: '17h - 19h', distance: '0.5 km' },
  { id: '3', store: 'Carrefour City', title: 'Frais Généraux', price: '5.99 €', time: '12h - 14h', distance: '2.3 km' },
];

export default function HomeScreen() {
  const renderFlashSaleItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.flashSaleItem}>
      <View style={styles.flashImagePlaceholder}>
        {/* In a real app, use <Image source={{ uri: item.imageUrl }} ... /> */}
        <Ionicons name="basket" size={40} color="#16a34a" />
      </View>
      <View style={styles.flashInfo}>
        <Text style={styles.flashTitle}>{item.title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.flashPrice}>{item.price}</Text>
          <Text style={styles.flashOldPrice}>{item.oldPrice}</Text>
        </View>
      </View>
      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>-66%</Text>
      </View>
    </TouchableOpacity>
  );

  const renderBasketItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.basketItem}>
      <View style={styles.basketHeader}>
        <View style={styles.storeAvatar}>
          <Text style={styles.storeAvatarText}>{item.store.charAt(0)}</Text>
        </View>
        <View>
          <Text style={styles.storeName}>{item.store}</Text>
          <Text style={styles.basketTitle}>{item.title}</Text>
        </View>
      </View>
      <View style={styles.basketDetails}>
        <View style={styles.basketDetailRow}>
          <Ionicons name="time-outline" size={14} color="#666" />
          <Text style={styles.basketDetailText}>{item.time}</Text>
        </View>
        <View style={styles.basketDetailRow}>
          <Ionicons name="location-outline" size={14} color="#666" />
          <Text style={styles.basketDetailText}>{item.distance}</Text>
        </View>
      </View>
      <View style={styles.basketFooter}>
        <Text style={styles.basketPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            {/* Logo Placeholder */}
            <View style={styles.logoContainer}>
              <Text style={styles.logoText}>FR</Text>
            </View>
            <View>
              <Text style={styles.welcomeText}>Bienvenue</Text>
              <Text style={styles.userName}>Léa</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="bag-handle-outline" size={24} color="#000" />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>2</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="notifications-outline" size={24} color="#000" />
              <View style={[styles.badge, { backgroundColor: '#ef4444' }]}>
                <Text style={styles.badgeText}>3</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Premium Banner (Simplified) */}
        <View style={styles.premiumBanner}>
          <View style={styles.premiumContent}>
            <Text style={styles.premiumTitle}>Deviens un Héros Anti-Gaspi !</Text>
            <Text style={styles.premiumSubtitle}>Accès prioritaire aux paniers</Text>
          </View>
          <TouchableOpacity style={styles.premiumButton}>
            <Text style={styles.premiumButtonText}>Voir</Text>
          </TouchableOpacity>
        </View>

        {/* Impact Score */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ton Impact</Text>
          <View style={styles.impactContainer}>
            <View style={[styles.impactCard, { backgroundColor: '#ecfdf5' }]}>
              <Ionicons name="leaf" size={24} color="#16a34a" />
              <Text style={styles.impactValue}>{userStats.co2Saved}</Text>
              <Text style={styles.impactLabel}>CO2 évité</Text>
            </View>
            <View style={[styles.impactCard, { backgroundColor: '#fff7ed' }]}>
              <Ionicons name="restaurant" size={24} color="#f97316" />
              <Text style={styles.impactValue}>{userStats.mealsSaved}</Text>
              <Text style={styles.impactLabel}>Repas sauvés</Text>
            </View>
          </View>
        </View>

        {/* Flash Sales */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Ventes Flash ⚡️</Text>
            <Text style={styles.seeAll}>Voir tout</Text>
          </View>
          <FlatList
            horizontal
            data={flashSales}
            renderItem={renderFlashSaleItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
          />
        </View>

        {/* Available Baskets */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Paniers disponibles</Text>
            <Text style={styles.seeAll}>Filtrer</Text>
          </View>
          {/* Vertical List for Baskets */}
          <View style={styles.verticalList}>
            {availableBaskets.map(item => (
              <View key={item.id} style={styles.verticalItemWrapper}>
                {renderBasketItem({ item })}
              </View>
            ))}
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContent: {
    paddingBottom: 120,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20, // Adjust for status bar if mostly using SafeAreaView
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoContainer: {
    width: 44,
    height: 44,
    backgroundColor: '#16a34a',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  welcomeText: {
    fontSize: 12,
    color: '#64748b',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    width: 44,
    height: 44,
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: '#f59e0b',
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  badgeText: {
    color: 'white',
    fontSize: 8,
    fontWeight: 'bold',
  },
  premiumBanner: {
    margin: 20,
    marginTop: 0,
    backgroundColor: '#2D1B4E',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#2D1B4E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  premiumContent: {
    flex: 1,
  },
  premiumTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  premiumSubtitle: {
    color: '#e2e8f0',
    fontSize: 12,
  },
  premiumButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  premiumButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
    marginLeft: 20,
  },
  seeAll: {
    fontSize: 14,
    color: '#16a34a',
    fontWeight: '600',
  },
  impactContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
  },
  impactCard: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    gap: 8,
  },
  impactValue: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0f172a',
  },
  impactLabel: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '500',
  },
  horizontalList: {
    paddingHorizontal: 20,
    gap: 16,
  },
  flashSaleItem: {
    width: 160,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 12,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  flashImagePlaceholder: {
    width: '100%',
    height: 100,
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flashInfo: {
    gap: 4,
  },
  flashTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0f172a',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  flashPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#16a34a',
  },
  flashOldPrice: {
    fontSize: 12,
    color: '#94a3b8',
    textDecorationLine: 'line-through',
  },
  discountBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#ef4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  discountText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  verticalList: {
    paddingHorizontal: 20,
    gap: 16,
  },
  verticalItemWrapper: {
    marginBottom: 12,
  },
  basketItem: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  basketHeader: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  storeAvatar: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fef3c7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storeAvatarText: {
    color: '#d97706',
    fontWeight: 'bold',
    fontSize: 18,
  },
  storeName: {
    fontSize: 12,
    color: '#64748b',
  },
  basketTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  basketDetails: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  basketDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  basketDetailText: {
    fontSize: 12,
    color: '#64748b',
  },
  basketFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  basketPrice: {
    fontSize: 18,
    fontWeight: '900',
    color: '#16a34a',
  },
  addButton: {
    backgroundColor: '#16a34a',
    padding: 8,
    borderRadius: 12,
  },
});
