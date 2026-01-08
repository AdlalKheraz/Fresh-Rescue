import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';

export default function ScannerScreen() {
    const currentOrder = {
        orderId: "FR-2025-0107-4829",
        store: "HyperFresh Marly",
        items: 3,
        total: 12.45,
        status: "ready",
        pickupTime: "Aujourd'hui 18h-20h",
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Mon QR Code</Text>
                <Text style={styles.headerSubtitle}>Présentez ce code en magasin</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.statusBadge}>
                    <Ionicons name="checkmark-circle" size={16} color="white" />
                    <Text style={styles.statusText}>Commande prête</Text>
                </View>

                <View style={styles.qrContainer}>
                    <Svg width="200" height="200" viewBox="0 0 200 200" style={styles.qr}>
                        {/* QR Code Pattern */}
                        <Rect width="200" height="200" fill="white" />
                        {/* Position patterns */}
                        <Rect x="10" y="10" width="50" height="50" fill="#2D1B4E" />
                        <Rect x="17" y="17" width="36" height="36" fill="white" />
                        <Rect x="24" y="24" width="22" height="22" fill="#2D1B4E" />

                        <Rect x="140" y="10" width="50" height="50" fill="#2D1B4E" />
                        <Rect x="147" y="17" width="36" height="36" fill="white" />
                        <Rect x="154" y="24" width="22" height="22" fill="#2D1B4E" />

                        <Rect x="10" y="140" width="50" height="50" fill="#2D1B4E" />
                        <Rect x="17" y="147" width="36" height="36" fill="white" />
                        <Rect x="24" y="154" width="22" height="22" fill="#2D1B4E" />

                        {/* Data modules */}
                        <Rect x="70" y="10" width="8" height="8" fill="#3ECF8E" />
                        <Rect x="86" y="10" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="102" y="10" width="8" height="8" fill="#3ECF8E" />
                        <Rect x="118" y="10" width="8" height="8" fill="#2D1B4E" />

                        <Rect x="70" y="26" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="94" y="26" width="8" height="8" fill="#3ECF8E" />
                        <Rect x="110" y="26" width="8" height="8" fill="#2D1B4E" />

                        <Rect x="78" y="42" width="8" height="8" fill="#3ECF8E" />
                        <Rect x="102" y="42" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="126" y="42" width="8" height="8" fill="#3ECF8E" />

                        <Rect x="10" y="70" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="26" y="70" width="8" height="8" fill="#3ECF8E" />
                        <Rect x="42" y="70" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="70" y="70" width="8" height="8" fill="#F5A623" />
                        <Rect x="86" y="70" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="110" y="70" width="8" height="8" fill="#3ECF8E" />
                        <Rect x="134" y="70" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="150" y="70" width="8" height="8" fill="#F5A623" />
                        <Rect x="166" y="70" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="182" y="70" width="8" height="8" fill="#3ECF8E" />

                        <Rect x="10" y="86" width="8" height="8" fill="#3ECF8E" />
                        <Rect x="34" y="86" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="50" y="86" width="8" height="8" fill="#3ECF8E" />
                        <Rect x="78" y="86" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="94" y="86" width="8" height="8" fill="#F5A623" />
                        <Rect x="118" y="86" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="142" y="86" width="8" height="8" fill="#3ECF8E" />
                        <Rect x="158" y="86" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="182" y="86" width="8" height="8" fill="#3ECF8E" />

                        <Rect x="10" y="102" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="26" y="102" width="8" height="8" fill="#3ECF8E" />
                        <Rect x="42" y="102" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="70" y="102" width="8" height="8" fill="#3ECF8E" />
                        <Rect x="94" y="102" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="110" y="102" width="8" height="8" fill="#F5A623" />
                        <Rect x="126" y="102" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="150" y="102" width="8" height="8" fill="#3ECF8E" />
                        <Rect x="174" y="102" width="8" height="8" fill="#2D1B4E" />

                        <Rect x="10" y="118" width="8" height="8" fill="#3ECF8E" />
                        <Rect x="34" y="118" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="58" y="118" width="8" height="8" fill="#3ECF8E" />
                        <Rect x="86" y="118" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="102" y="118" width="8" height="8" fill="#3ECF8E" />
                        <Rect x="134" y="118" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="158" y="118" width="8" height="8" fill="#3ECF8E" />
                        <Rect x="182" y="118" width="8" height="8" fill="#2D1B4E" />

                        <Rect x="70" y="142" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="86" y="142" width="8" height="8" fill="#3ECF8E" />
                        <Rect x="110" y="142" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="134" y="142" width="8" height="8" fill="#F5A623" />
                        <Rect x="158" y="142" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="182" y="142" width="8" height="8" fill="#3ECF8E" />

                        <Rect x="70" y="158" width="8" height="8" fill="#3ECF8E" />
                        <Rect x="94" y="158" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="118" y="158" width="8" height="8" fill="#3ECF8E" />
                        <Rect x="142" y="158" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="166" y="158" width="8" height="8" fill="#3ECF8E" />

                        <Rect x="132" y="174" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="86" y="174" width="8" height="8" fill="#3ECF8E" />
                        <Rect x="102" y="174" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="126" y="174" width="8" height="8" fill="#F5A623" />
                        <Rect x="150" y="174" width="8" height="8" fill="#2D1B4E" />
                        <Rect x="174" y="174" width="8" height="8" fill="#3ECF8E" />
                    </Svg>
                </View>

                <View style={styles.detailsContainer}>
                    <Text style={styles.label}>Numéro de commande</Text>
                    <Text style={styles.orderId}>{currentOrder.orderId}</Text>
                </View>

                <View style={styles.row}>
                    <View style={[styles.detailBox, styles.storeBox]}>
                        <Ionicons name="location" size={16} color="#16a34a" />
                        <Text style={styles.boxLabel}>Magasin</Text>
                        <Text style={styles.boxValue}>{currentOrder.store}</Text>
                    </View>
                    <View style={[styles.detailBox, styles.totalBox]}>
                        <Text style={styles.boxLabel}>{currentOrder.items} articles</Text>
                        <Text style={styles.price}>{currentOrder.total.toFixed(2)} €</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 20,
        alignItems: 'center',
        paddingBottom: 40,
    },
    header: {
        marginTop: 60,
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '900',
        color: '#000',
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    card: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 5,
        alignItems: 'center',
    },
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#16a34a',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        marginBottom: 24,
    },
    statusText: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 6,
    },
    qrContainer: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        marginBottom: 24,
        borderWidth: 4,
        borderColor: 'rgba(22, 163, 74, 0.1)',
    },
    qr: {},
    detailsContainer: {
        alignItems: 'center',
        backgroundColor: 'rgba(22, 163, 74, 0.05)',
        width: '100%',
        padding: 15,
        borderRadius: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'rgba(22, 163, 74, 0.1)',
    },
    label: {
        fontSize: 12,
        color: '#666',
        marginBottom: 4,
    },
    orderId: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#16a34a',
        fontFamily: 'Courier',
    },
    row: {
        flexDirection: 'row',
        gap: 10,
        width: '100%',
    },
    detailBox: {
        flex: 1,
        padding: 15,
        borderRadius: 15,
        borderWidth: 1,
    },
    storeBox: {
        backgroundColor: 'rgba(22, 163, 74, 0.05)',
        borderColor: 'rgba(22, 163, 74, 0.1)',
    },
    totalBox: {
        backgroundColor: 'rgba(100, 116, 139, 0.05)',
        borderColor: 'rgba(100, 116, 139, 0.1)',
        alignItems: 'flex-end',
    },
    boxLabel: {
        fontSize: 12,
        color: '#666',
    },
    boxValue: {
        fontWeight: 'bold',
        color: '#000',
    },
    price: {
        fontSize: 20,
        fontWeight: '900',
        color: '#475569',
    },
});
