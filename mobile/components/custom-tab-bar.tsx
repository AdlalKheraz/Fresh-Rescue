import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { BlurView } from 'expo-blur';

interface TabItem {
  name: string;
  route: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconActive: keyof typeof Ionicons.glyphMap;
  label: string;
  badge?: number;
}

const tabs: TabItem[] = [
  {
    name: 'index',
    route: '/(tabs)',
    icon: 'home-outline',
    iconActive: 'home',
    label: 'Accueil',
  },
  {
    name: 'catalog',
    route: '/(tabs)/catalog',
    icon: 'grid-outline',
    iconActive: 'grid',
    label: 'Catalogue',
  },
  {
    name: 'scanner',
    route: '/(tabs)/scanner',
    icon: 'qr-code-outline',
    iconActive: 'qr-code',
    label: 'Scanner',
  },
  {
    name: 'cart',
    route: '/(tabs)/cart',
    icon: 'cart-outline',
    iconActive: 'cart',
    label: 'Panier',
    badge: 2,
  },
  {
    name: 'profile',
    route: '/(tabs)/profile',
    icon: 'person-outline',
    iconActive: 'person',
    label: 'Profil',
  },
];

export function CustomTabBar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleTabPress = (route: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push(route as any);
  };

  const isActive = (tabRoute: string) => {
    if (tabRoute === '/(tabs)') {
      return pathname === '/' || pathname === '/(tabs)';
    }
    return pathname === tabRoute;
  };

  return (
    <View style={styles.container}>
      <BlurView intensity={90} tint="light" style={styles.blurContainer}>
        <View style={styles.tabBar}>
          {tabs.map((tab, index) => {
            const active = isActive(tab.route);
            const isMiddle = index === 2; // Scanner is in the middle

            return (
              <TouchableOpacity
                key={tab.name}
                style={[styles.tabItem, isMiddle && styles.tabItemMiddle]}
                onPress={() => handleTabPress(tab.route)}
                activeOpacity={0.7}>
                <View style={[
                  styles.iconContainer,
                  active && styles.iconContainerActive,
                  isMiddle && styles.iconContainerMiddle,
                  isMiddle && active && styles.iconContainerMiddleActive
                ]}>
                  <Ionicons
                    name={active ? tab.iconActive : tab.icon}
                    size={isMiddle ? 28 : 24}
                    color={active ? '#ffffff' : '#64748b'}
                  />
                  {tab.badge && tab.badge > 0 && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>{tab.badge}</Text>
                    </View>
                  )}
                </View>
                <Text style={[styles.label, active && styles.labelActive]}>{tab.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  blurContainer: {
    borderRadius: 28,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 10,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 8,
  },
  tabItemMiddle: {
    marginTop: -16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    position: 'relative',
  },
  iconContainerActive: {
    backgroundColor: '#16a34a',
  },
  iconContainerMiddle: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderWidth: 3,
    borderColor: '#f8fafc',
    shadowColor: '#16a34a',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  iconContainerMiddleActive: {
    backgroundColor: '#16a34a',
    borderColor: '#16a34a',
  },
  badge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: '#ef4444',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '700',
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
    color: '#94a3b8',
  },
  labelActive: {
    color: '#16a34a',
    fontWeight: '700',
  },
});
