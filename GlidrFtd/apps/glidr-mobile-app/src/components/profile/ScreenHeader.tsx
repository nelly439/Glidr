import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface Props {
    title: string;
}

export default function ScreenHeader({
    title,
}: Props) {

    return (

        <View style={styles.container}>

            <TouchableOpacity
                onPress={() => router.back()}
            >

                <Ionicons
                    name="arrow-back"
                    size={26}
                    color="#1A1A1A"
                />

            </TouchableOpacity>

            <Text style={styles.title}>
                {title}
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {

        flexDirection: "row",

        alignItems: "center",

        marginBottom: 28,

    },

    title: {

        marginLeft: 16,

        fontSize: 28,

        fontWeight: "700",

        color: "#1A1A1A",

    },

});