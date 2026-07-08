import { Alert, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ScreenHeader from "@/components/profile/ScreenHeader";
import ProfileMenuItem from "@/components/profile/ProfileMenuItem";

export default function HelpScreen(){

return(

<SafeAreaView style={styles.container}>

<ScreenHeader title="Help & Support"/>

<ProfileMenuItem

title="Frequently Asked Questions"

icon="help-circle"

onPress={()=>Alert.alert("Coming Soon")}

/>

<ProfileMenuItem

title="Contact Support"

icon="mail"

onPress={()=>Alert.alert("Coming Soon")}

/>

<ProfileMenuItem

title="Live Chat"

icon="message-circle"

onPress={()=>Alert.alert("Coming Soon")}

/>

<ProfileMenuItem

title="Report a Bug"

icon="alert-circle"

onPress={()=>Alert.alert("Coming Soon")}

/>

</SafeAreaView>

)

}

const styles=StyleSheet.create({

container:{

flex:1,

backgroundColor:"#F7F7F7",

padding:20,

}

});