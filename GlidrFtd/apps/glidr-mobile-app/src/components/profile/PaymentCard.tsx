import {
    StyleSheet,
    Text,
    View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

interface Props {

    brand: string;

    last4: string;

    isDefault?: boolean;

}

export default function PaymentCard({

    brand,

    last4,

    isDefault,

}: Props) {

    return (

        <View style={styles.container}>

            <View style={styles.left}>

                <Ionicons

                    name="card"

                    size={24}

                    color="#18B7AE"

                />

                <View style={{ marginLeft: 12 }}>

                    <Text style={styles.brand}>

                        {brand}

                    </Text>

                    <Text style={styles.number}>

                        **** {last4}

                    </Text>

                </View>

            </View>

            {isDefault && (

                <Text style={styles.default}>

                    Default

                </Text>

            )}

        </View>

    );

}

const styles = StyleSheet.create({

    container: {

        flexDirection: "row",

        justifyContent: "space-between",

        alignItems: "center",

        marginBottom: 18,

    },

    left: {

        flexDirection: "row",

        alignItems: "center",

    },

    brand: {

        fontSize: 16,

        fontWeight: "700",

    },

    number: {

        color: "#777",

        marginTop: 4,

    },

    default: {

        color: "#18B7AE",

        fontWeight: "700",

    },

});