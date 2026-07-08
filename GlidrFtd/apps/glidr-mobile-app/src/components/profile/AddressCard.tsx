import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

interface Props {

    title: string;

    address: string;

    isDefault?: boolean;

    onEdit?: () => void;

}

export default function AddressCard({

    title,

    address,

    isDefault = false,

    onEdit,

}: Props) {

    return (

        <View style={styles.card}>

            <View style={styles.header}>

                <View style={styles.left}>

                    <Ionicons
                        name="location"
                        size={24}
                        color="#18B7AE"
                    />

                    <Text style={styles.title}>
                        {title}
                    </Text>

                </View>

                {isDefault && (

                    <View style={styles.badge}>

                        <Text style={styles.badgeText}>
                            Default
                        </Text>

                    </View>

                )}

            </View>

            <Text style={styles.address}>
                {address}
            </Text>

            <TouchableOpacity
                style={styles.editButton}
                onPress={onEdit}
            >

                <Text style={styles.editText}>
                    Edit
                </Text>

            </TouchableOpacity>

        </View>

    );

}

const styles = StyleSheet.create({

    card: {

        backgroundColor: "#FFF",

        borderRadius: 16,

        padding: 18,

        marginBottom: 18,

    },

    header: {

        flexDirection: "row",

        justifyContent: "space-between",

        alignItems: "center",

    },

    left: {

        flexDirection: "row",

        alignItems: "center",

    },

    title: {

        marginLeft: 10,

        fontSize: 18,

        fontWeight: "700",

    },

    badge: {

        backgroundColor: "#18B7AE",

        paddingHorizontal: 10,

        paddingVertical: 4,

        borderRadius: 20,

    },

    badgeText: {

        color: "#FFF",

        fontSize: 12,

        fontWeight: "700",

    },

    address: {

        marginTop: 14,

        color: "#666",

        lineHeight: 24,

        fontSize: 15,

    },

    editButton: {

        marginTop: 18,

        alignSelf: "flex-end",

    },

    editText: {

        color: "#18B7AE",

        fontWeight: "700",

    },

});