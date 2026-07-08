import { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ScreenHeader from "@/components/profile/ScreenHeader";
import SettingItem from "@/components/profile/SettingItem";

export default function SettingsScreen(){

const[notifications,setNotifications]=useState(true);

const[darkMode,setDarkMode]=useState(false);

const[location,setLocation]=useState(true);

return(

<SafeAreaView style={styles.container}>

<ScreenHeader title="Settings"/>

<SettingItem

title="Notifications"

value={notifications}

onValueChange={setNotifications}

/>

<SettingItem

title="Dark Mode"

value={darkMode}

onValueChange={setDarkMode}

/>

<SettingItem

title="Location"

value={location}

onValueChange={setLocation}

/>

<TouchableOpacity

style={styles.logout}

onPress={()=>Alert.alert(

"Logout",

"Are you sure you want to logout?",

[
{ text:"Cancel", style:"cancel" },
{ text:"Logout", style:"destructive" }
]

)}

>

<Text style={styles.logoutText}>

Logout

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

logout:{

marginTop:30,

backgroundColor:"#E53935",

height:55,

borderRadius:14,

justifyContent:"center",

alignItems:"center",

},

logoutText:{

color:"#FFF",

fontWeight:"700",

fontSize:17,

}

});