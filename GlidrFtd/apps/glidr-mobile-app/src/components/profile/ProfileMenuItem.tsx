import {
    Ionicons,
    Feather,
} from "@expo/vector-icons";

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface Props {

    title: string;

    icon: keyof typeof Feather.glyphMap;

    onPress: () => void;

}

export default function ProfileMenuItem({

    title,

    icon,

    onPress,

}: Props) {

    return (

        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >

            <View style={styles.left}>

                <Feather
                    name={icon}
                    size={24}
                    color="#222"
                />

                <Text style={styles.title}>
                    {title}
                </Text>

            </View>

            <Ionicons
                name="chevron-forward"
                size={24}
                color="#222"
            />

        </TouchableOpacity>

    );

}

const styles = StyleSheet.create({

    container: {

        flexDirection: "row",

        justifyContent: "space-between",

        alignItems: "center",

        backgroundColor: "#FFF",

        paddingHorizontal: 20,

        paddingVertical: 22,

        borderBottomWidth: 1,

        borderBottomColor: "#ECECEC",

    },

    left: {

        flexDirection: "row",

        alignItems: "center",

    },

    title: {

        marginLeft: 18,

        fontSize: 22,

        color: "#222",

    },

});