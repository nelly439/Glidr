import { StyleSheet, Text, View } from "react-native";

interface Props {

    code: string;

    description: string;

    expiry: string;

}

export default function PromoCard({

    code,

    description,

    expiry,

}: Props) {

    return (

        <View style={styles.card}>

            <Text style={styles.code}>
                {code}
            </Text>

            <Text style={styles.description}>
                {description}
            </Text>

            <Text style={styles.expiry}>
                Expires {expiry}
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    card: {

        backgroundColor:"#FFF",

        padding:20,

        borderRadius:16,

        marginBottom:16,

    },

    code:{

        fontWeight:"700",

        fontSize:20,

    },

    description:{

        marginTop:8,

        color:"#555",

    },

    expiry:{

        marginTop:12,

        color:"#18B7AE",

    },

});