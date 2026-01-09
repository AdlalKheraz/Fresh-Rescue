import { Tabs } from "expo-router";
import React from "react";
import { View, StyleSheet } from "react-native";
import { CustomTabBar } from "@/components/custom-tab-bar";

export default function TabLayout() {
  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
        tabBar={() => <CustomTabBar />}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="catalog" />
        <Tabs.Screen name="scanner" />
        <Tabs.Screen name="cart" />
        <Tabs.Screen name="profile" />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
});
