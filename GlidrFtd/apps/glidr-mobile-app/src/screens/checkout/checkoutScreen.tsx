import { useOrders } from "@/hooks/useOrders";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { CheckoutFooter, DeliveryOptionCard, OrderSummary, PaymentMethodCard } from "@/components/checkout";

import { useCart } from "@/hooks/useCart";

export default function CheckoutScreen() {
    const {
        placeOrder,
    } = useOrders();

    const { getSubtotal, getTotalItems, clearCart, cartItems } = useCart();

    const [deliveryMethod, setDeliveryMethod] = useState<
        "pickup" | "delivery"
    >("pickup");

    const [paymentMethod, setPaymentMethod] = useState<
        "pickup" | "online"
    >("pickup");

    const deliveryFee = deliveryMethod === "delivery" ? 1500 : 0;

    const total = getSubtotal() + deliveryFee;

    function handlePlaceOrder() {

        const subtotal =
            getSubtotal();

        const deliveryFee =
            deliveryMethod === "delivery"

                ? 1500

                : 0;

        placeOrder({

            items: cartItems,

            subtotal,

            deliveryFee,

            total:
                subtotal + deliveryFee,

            deliveryMethod,

            paymentMethod,

            status: "placed",

        });

        clearCart();

        router.replace(
            "/order-success"
        );

    }

    return (

        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>
                Checkout
            </Text>

            <DeliveryOptionCard
                selected={deliveryMethod}
                onSelect={setDeliveryMethod}
            />

            <PaymentMethodCard
                selected={paymentMethod}
                onSelect={setPaymentMethod}
            />

            <OrderSummary
                subtotal={getSubtotal()}
                totalItems={getTotalItems()}
                deliveryMethod={deliveryMethod}
            />

            <CheckoutFooter
                total={total}
                onPlaceOrder={handlePlaceOrder}
            />

        </SafeAreaView>

    );

}

const styles = StyleSheet.create({

    container: {

        flex: 1,

        backgroundColor: "#F8F8F8",

        padding: 20,

    },

    title: {

        fontSize: 28,

        fontWeight: "700",

        marginBottom: 24,

    },

});