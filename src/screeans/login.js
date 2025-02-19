import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,Alert,StyleSheet,} from "react-native";
import api from "../axios/axios";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function handleLogin(){
    await api.postLogin(user).then(
        (response)=>{
            console.log(response.data.message)
            Alert.alert(response.data.message)
        },(error)=>{
            console.log(error)
        }
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça o Login</Text>
      <TextInput
      style={styles.input}
      placeholder="Email"
      value={user.email}
      onChangeText={(value) => {setUser({...user,email:value})}}
      />
      <TextInput
      style={styles.input}
       placeholder="Senha"
       value={user.password}
       onChangeText={(value) => {setUser({...user,password:value})}}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  input:{
    widht:'100%',
    height:40,
    borderBottomWidth:1,
    margin:20,
    paddingHorizontal:10
  },
  button:{
    backgroundColor:'orange',
    padding:10,
    borderRadius:5,
  }
});
