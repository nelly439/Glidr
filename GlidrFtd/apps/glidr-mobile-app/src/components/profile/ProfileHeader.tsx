import { Image, StyleSheet, Text, View } from "react-native";

interface Props {
    name: string;
    email: string;
    avatar: any;
}

export default function ProfileHeader({
    name,
    email,
    avatar,
}: Props) {

    return (

        <View style={styles.container}>

            <Image
                source={avatar}
                style={styles.avatar}
            />

            <Text style={styles.name}>
                {name}
            </Text>

            <Text style={styles.email}>
                {email}
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {

        alignItems: "center",

        paddingVertical: 32,

        backgroundColor: "#FFF",

    },

    avatar: {

        width: 90,

        height: 90,

        borderRadius: 45,

    },

    name: {

        marginTop: 16,

        fontSize: 30,

        fontWeight: "700",

        color: "#111",

    },

    email: {

        marginTop: 6,

        fontSize: 18,

        color: "#8E8E93",

    },

});