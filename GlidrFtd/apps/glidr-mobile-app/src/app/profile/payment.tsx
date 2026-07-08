import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ScreenHeader from "@/components/profile/ScreenHeader";
import SectionCard from "@/components/profile/SectionCard";
import PaymentCard from "@/components/profile/PaymentCard";

export default function PaymentScreen() {

    function handleAddCard() {

        Alert.alert(
            "Coming Soon",
            "Card payments will be available when online payment is integrated."
        );

    }

    return (

        <SafeAreaView style={styles.container}>

            <ScreenHeader title="Payment Methods" />

            <SectionCard>

                <PaymentCard
                    brand="Visa"
                    last4="3402"
                    isDefault
                />

                <PaymentCard
                    brand="Mastercard"
                    last4="8214"
                />

            </SectionCard>

            <TouchableOpacity
                style={styles.button}
                onPress={handleAddCard}
            >

                <Text style={styles.buttonText}>
                    Add New Card
                </Text>

            </TouchableOpacity>

        </SafeAreaView>

    );

}

const styles = StyleSheet.create({

    container: {

        flex: 1,

        backgroundColor: "#F7F7F7",

        padding: 20,

    },

    button: {

        height: 55,

        backgroundColor: "#18B7AE",

        borderRadius: 14,

        justifyContent: "center",

        alignItems: "center",

        marginTop: 20,

    },

    buttonText: {

        color: "#FFF",

        fontSize: 17,

        fontWeight: "700",

    },

});