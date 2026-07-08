import { StyleSheet, Switch, Text, View } from "react-native";

interface Props{

title:string;

value:boolean;

onValueChange:(value:boolean)=>void;

}

export default function SettingItem({

title,

value,

onValueChange,

}:Props){

return(

<View style={styles.container}>

<Text style={styles.title}>

{title}

</Text>

<Switch

value={value}

onValueChange={onValueChange}

/>

</View>

)

}

const styles=StyleSheet.create({

container:{

flexDirection:"row",

justifyContent:"space-between",

alignItems:"center",

backgroundColor:"#FFF",

padding:18,

marginBottom:14,

borderRadius:14,

},

title:{

fontSize:17,

}

});