import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, TextInput,Alert} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import {auth} from '../../../firebase';

export default function Login(){
    const navigation = useNavigation();
    const [email, onChangeEmail] = React.useState("");
    const [senha, onChangeSenha] = React.useState("");
    const [visivel, setVisivel] = useState(true);

    const login = () =>{
        auth.signInWithEmailAndPassword(email, senha).then(function(val){
            onChangeEmail("");
            onChangeSenha("");
            navigation.navigate('Menu');
        }).catch(function(error){
            Alert.alert("Credenciais inválidas","Verifique as credenciais inseridas e tente novamente!");
        })
    }

    return(
        <View style= {styles.container}>
        <ScrollView>
            <View style = {{alignItems:'center', justifyContent:'center', paddingTop:20}}>
                <Image source = {require('../../../assets/LoginLogo.png')} />
            </View>
            <View style={{paddingTop:20}}>
                <Text style={{color:'white', fontWeight:'bold', paddingLeft:20, fontSize:20}}>Login</Text>
                <Text style={{color:'#7C7C7C', fontWeight:'bold', paddingLeft:20, fontSize:16, paddingTop:5,paddingRight:20}}>Coloque seus dados abaixo para realizar o login</Text>
            </View>
            <Text style={{color:'black', fontWeight:'bold', paddingLeft:20, fontSize:16, paddingTop:10}}>Email</Text>
            <View style = {{alignItems:'center', justifyContent:'center', paddingTop:10}}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    color='white'
                    backgroundColor= '#2A4239'
                    width="90%"
                />
            </View>
            <Text style={{color:'black', fontWeight:'bold', paddingLeft:20, fontSize:16, paddingTop:10}}>Senha</Text>
            <View style = {{alignItems:'center', justifyContent:'center', flexDirection:'row', paddingLeft:25, paddingRight:10, paddingTop:10}}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeSenha}
                    value={senha}
                    color='white'
                    backgroundColor= '#2A4239'
                    width="90%"
                    secureTextEntry = {visivel}
                />
                <TouchableOpacity onPress={() => setVisivel(!visivel)}>
                    <Entypo name="eye" size={24} color="black" style = {{paddingLeft:5, paddingRight:15}}/>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress = {() => navigation.navigate('ForgotPassword')}>
                    <Text style={{color:'#7C7C7C', fontWeight:'bold', paddingLeft:20, fontSize:16, paddingTop:10, textAlign:'right', paddingRight:20}}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>
            <View style = {{alignItems:'center', paddingTop:10}}>
                <TouchableOpacity style = {styles.buttom} onPress={()=> login()}>
                    <Text style={styles.textbuttom}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('RegisterScreen')}>
                    <Text style ={{paddingTop:10, fontSize:16, fontWeight:'bold'}}>Ainda não possui cadastro? 
                            <Text style={{color:'#53B175'}}> Registre-se</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#21362E',
        width:'100%',
        height:'100%',
        position:'absolute',
        paddingTop:50
    },
    input:{
        paddingLeft:20,
        borderRadius:8,
        padding:5,
    },
    buttom:{
        backgroundColor:"#2D7B49",
        width:'90%',
        height:'20%',
        padding:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5
    },
    textbuttom:{
        ...Platform.select({
            ios: {
                color:'white',
                fontSize:14,
                padding:30,
                marginTop:-15,
                alignItems:'center',
                justifyContent:'center',
                fontWeight:'bold',
            },
            android: {
                color:'white',
                fontSize:14,
                padding:30,
                alignItems:'center',
                justifyContent:'center',
                fontWeight:'bold',
            }
        })
    }
})