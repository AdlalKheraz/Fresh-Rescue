import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const menuItems = [
  {
    id: 'orders',
    icon: 'receipt-outline',
    title: 'Mes commandes',
    subtitle: '12 commandes',
    color: '#16a34a',
  },
  {
    id: 'favorites',
    icon: 'heart-outline',
    title: 'Mes favoris',
    subtitle: '8 magasins',
    color: '#ef4444',
  },
  {
    id: 'notifications',
    icon: 'notifications-outline',
    title: 'Notifications',
    subtitle: 'Gérer les alertes',
    color: '#f59e0b',
  },
  {
    id: 'payment',
    icon: 'card-outline',
    title: 'Moyens de paiement',
    subtitle: '2 cartes enregistrées',
    color: '#8b5cf6',
  },
];

const settingsItems = [
  {
    id: 'language',
    icon: 'language-outline',
    title: 'Langue',
    value: 'Français',
  },
  {
    id: 'theme',
    icon: 'moon-outline',
    title: 'Thème',
    value: 'Automatique',
  },
  {
    id: 'location',
    icon: 'location-outline',
    title: 'Localisation',
    value: 'Activée',
  },
];

export default function ProfileScreen() {
  const handleMenuPress = (id: string) => {
    Alert.alert('Navigation', `Ouvrir ${id}`);
  };

  const handleSettingPress = (id: string) => {
    Alert.alert('Paramètre', `Modifier ${id}`);
  };

  const handleLogout = () => {
    Alert.alert('Déconnexion', 'Voulez-vous vraiment vous déconnecter ?', [
      { text: 'Annuler', style: 'cancel' },
      { text: 'Déconnexion', style: 'destructive', onPress: () => Alert.alert('Déconnecté') },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>L</Text>
            </View>
            <TouchableOpacity style={styles.editAvatarButton}>
              <Ionicons name="camera" size={16} color="white" />
            </TouchableOpacity>
          </View>

          <Text style={styles.userName}>Léa Dubois</Text>
          <Text style={styles.userEmail}>lea.dubois@example.com</Text>

          {/* Premium Badge */}
          <View style={styles.premiumBadge}>
            <Ionicons name="star" size={14} color="#f59e0b" />
            <Text style={styles.premiumText}>Membre Premium</Text>
          </View>
        </View>

        {/* Impact Stats */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Mon Impact</Text>
          <View style={styles.statsContainer}>
            <View style={[styles.statCard, { backgroundColor: '#ecfdf5' }]}>
              <Ionicons name="leaf" size={28} color="#16a34a" />
              <Text style={styles.statValue}>18.5 kg</Text>
              <Text style={styles.statLabel}>CO2 évité</Text>
            </View>
            <View style={[styles.statCard, { backgroundColor: '#fff7ed' }]}>
              <Ionicons name="restaurant" size={28} color="#f97316" />
              <Text style={styles.statValue}>34</Text>
              <Text style={styles.statLabel}>Repas sauvés</Text>
            </View>
            <View style={[styles.statCard, { backgroundColor: '#fef3c7' }]}>
              <Ionicons name="trophy" size={28} color="#f59e0b" />
              <Text style={styles.statValue}>156</Text>
              <Text style={styles.statLabel}>Points</Text>
            </View>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Mon compte</Text>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={() => handleMenuPress(item.id)}>
              <View style={[styles.menuIcon, { backgroundColor: `${item.color}15` }]}>
                <Ionicons name={item.icon as any} size={22} color={item.color} />
              </View>
              <View style={styles.menuContent}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#cbd5e1" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Settings */}
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Paramètres</Text>
          {settingsItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.settingItem}
              onPress={() => handleSettingPress(item.id)}>
              <View style={styles.settingLeft}>
                <Ionicons name={item.icon as any} size={20} color="#64748b" />
                <Text style={styles.settingTitle}>{item.title}</Text>
              </View>
              <View style={styles.settingRight}>
                <Text style={styles.settingValue}>{item.value}</Text>
                <Ionicons name="chevron-forward" size={18} color="#cbd5e1" />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Support */}
        <View style={styles.supportSection}>
          <Text style={styles.sectionTitle}>Support</Text>
          <TouchableOpacity style={styles.supportItem}>
            <Ionicons name="help-circle-outline" size={20} color="#64748b" />
            <Text style={styles.supportText}>Centre d'aide</Text>
            <Ionicons name="chevron-forward" size={18} color="#cbd5e1" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.supportItem}>
            <Ionicons name="document-text-outline" size={20} color="#64748b" />
            <Text style={styles.supportText}>Conditions d'utilisation</Text>
            <Ionicons name="chevron-forward" size={18} color="#cbd5e1" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.supportItem}>
            <Ionicons name="shield-checkmark-outline" size={20} color="#64748b" />
            <Text style={styles.supportText}>Politique de confidentialité</Text>
            <Ionicons name="chevron-forward" size={18} color="#cbd5e1" />
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color="#ef4444" />
          <Text style={styles.logoutText}>Se déconnecter</Text>
        </TouchableOpacity>

        {/* Version */}
        <Text style={styles.versionText}>Version 1.0.0</Text>
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
  profileHeader: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#16a34a',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#ecfdf5',
  },
  avatarText: {
    fontSize: 40,
    fontWeight: '900',
    color: 'white',
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#16a34a',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'white',
  },
  userName: {
    fontSize: 24,
    fontWeight: '900',
    color: '#0f172a',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 12,
  },
  premiumBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#fef3c7',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  premiumText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#d97706',
  },
  statsSection: {
    padding: 20,
    backgroundColor: 'white',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0f172a',
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    gap: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0f172a',
  },
  statLabel: {
    fontSize: 11,
    color: '#64748b',
    fontWeight: '600',
    textAlign: 'center',
  },
  menuSection: {
    padding: 20,
    backgroundColor: 'white',
    marginTop: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  menuIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 13,
    color: '#64748b',
  },
  settingsSection: {
    padding: 20,
    backgroundColor: 'white',
    marginTop: 8,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0f172a',
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  settingValue: {
    fontSize: 14,
    color: '#64748b',
  },
  supportSection: {
    padding: 20,
    backgroundColor: 'white',
    marginTop: 8,
  },
  supportItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  supportText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#0f172a',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#fee2e2',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ef4444',
  },
  versionText: {
    textAlign: 'center',
    fontSize: 13,
    color: '#94a3b8',
    marginTop: 20,
  },
});
