import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ScreenHeader from "@/components/profile/ScreenHeader";
import PromoCard from "@/components/profile/PromoCard";

export default function PromoScreen(){

    return(

        <SafeAreaView style={styles.container}>

            <ScreenHeader title="Promo Codes"/>

            <PromoCard

                code="WELCOME10"

                description="10% OFF your next purchase"

                expiry="31 Dec 2026"

            />

            <PromoCard

                code="SAVE500"

                description="₦500 OFF orders above ₦10,000"

                expiry="31 Dec 2026"

            />

            <TouchableOpacity
                style={styles.button}
                onPress={()=>Alert.alert("Coming Soon")}
            >

                <Text style={styles.buttonText}>
                    Apply Promo Code
                </Text>

            </TouchableOpacity>

        </SafeAreaView>

    )

}

const styles=StyleSheet.create({

container:{

flex:1,

padding:20,

backgroundColor:"#F7F7F7",

},

button:{

marginTop:20,

height:55,

backgroundColor:"#18B7AE",

borderRadius:14,

justifyContent:"center",

alignItems:"center",

},

buttonText:{

color:"#FFF",

fontWeight:"700",

fontSize:16,

}

});