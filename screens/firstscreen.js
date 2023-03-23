import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import {BarCodeScanner} from "expo-barcode-scanner";

export default class Firstscreen extends Component {
constructor(props){
  super(props);
  this.state={
  domState:"normal",
  hasCameraPermissions:null,
  scanned:false,
  scannedData:"",
  bookId:"",
  studentId:""
 }
}
GetCameraPermission=async domState=>{
  const { status } = await Permissions.askAsync(Permissions.CAMERA); 
  this.setState({ 
/*status === "granted" é verdadeiro se o usuário concedeu permissão status === "granted" é falso se o usuário não concedeu permissão */
 hasCameraPermissions: status === "granted", 
 domState: domState, 
 scanned: false });
}
BarCodeScanner=async({type,data})=>{
this.setState({
scannedData:data,
domState:"normal",
scanned:true
});
};
render() {
  const {domState, hasCameraPermissions, scanned, scannedData, bookId, studentId} = this.state;
  if(domState==="bookId"){
this.setState({
bookId:data,
domState:"normal",
scanned:true
})}
  if(domState==="studentId"){
this.setState({
studentId:data,
domState:"normal",
scanned:true
})}
return (
<View style={styles.container}>
<View style={styles.textinputContainer}>
<TouchableOpacity onPress={()=>this.GetCameraPermission("bookId")}>
<Text style={styles.text}>Digitalizar o qr code</Text>
</TouchableOpacity>
<TextInput placeholder={"ID do livro"} value={bookId} style={styles.textinput}></TextInput>
</View>
<View style={styles.textinputContainer}>
<TouchableOpacity onPress={()=>this.GetCameraPermission("studentId")}>
<Text style={styles.text}>Digitalizar o qr code</Text>
</TouchableOpacity>
<TextInput placeholder={"ID do usuário"} value={studentId} style={styles.textinput}></TextInput>
</View>
<TouchableOpacity style={styles.button}>
  <Text style={styles.buttonText}>Enviar</Text>
</TouchableOpacity>
</View>
);}
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
alignItems: "center",
backgroundColor: "#5653D4"
},
text: {
color: "#ffff",
fontSize: 30
},
textinputContainer: { borderWidth: 2, 
  borderRadius: 10, 
  flexDirection: "row", 
  backgroundColor: "#9DFD24", 
  borderColor: "#FFFFFF" }, 

  textinput: { width: "57%", 
  height: 50, padding: 10, 
  borderColor: "#FFFFFF", 
  borderRadius: 10, borderWidth: 3, 
  fontSize: 18, backgroundColor: "#5653D4", 
  fontFamily: "Rajdhani_500Medium", color: "#FFFFFF" },

  button: { width: "43%", height: 55, justifyContent: "center", alignItems: "center", backgroundColor: "#F48D20", borderRadius: 15 }

  buttonText: { fontSize: 24, color: "#FFFFFF", fontFamily: "Rajdhani_600SemiBold" }
});

