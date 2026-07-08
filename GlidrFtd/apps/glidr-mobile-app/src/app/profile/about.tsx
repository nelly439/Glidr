import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ScreenHeader from "@/components/profile/ScreenHeader";

export default function AboutScreen(){

return(

<SafeAreaView style={styles.container}>

<ScreenHeader title="About Glidr"/>

<View style={styles.card}>

<Text style={styles.name}>

Glidr

</Text>

<Text style={styles.version}>

Version 1.0.0

</Text>

<Text style={styles.description}>

Glidr helps shoppers discover products, compare supermarkets, manage shopping lists, and enjoy a smoother shopping experience.

</Text>

</View>

</SafeAreaView>

)

}

const styles=StyleSheet.create({

container:{

flex:1,

padding:20,

backgroundColor:"#F7F7F7",

},

card:{

backgroundColor:"#FFF",

padding:20,

borderRadius:16,

},

name:{

fontSize:30,

fontWeight:"700",

},

version:{

marginTop:8,

color:"#18B7AE",

},

description:{

marginTop:20,

lineHeight:24,

fontSize:16,

color:"#555",

}

});