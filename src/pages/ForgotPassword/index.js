import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, TextInput,Alert} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import {auth} from '../../../firebase';
export default function ForgotPassword(){
    const navigation = useNavigation();
    const [email, onChangeEmail] = React.useState("");

    const ResetPassword = () =>{
        try{
            auth.sendPasswordResetEmail(email)
                .then(function (user){
                Alert.alert('Email enviado!','Verifique sua caixa de entrada para realizar a mudança da senha!')
                })
                .catch(error => {
                    switch(error.code){
                        case 'auth/email-already-in-use':
                            Alert.alert('Email já está cadastrado!','O email informado já está cadastrado em nosso sistema!')
                            break;
                        case 'auth/invalid-email':
                            Alert.alert('Email inexistente!','Por favor, verifique o email digitado e tente novamente!');
                    }       
                })
        }catch(e){
            Alert.alert("Erro")
        }
    }

    return(
        <View style= {styles.container}>
        <ScrollView>
            <View style = {{alignItems:'center', justifyContent:'center', paddingTop:20}}>
                <Image source = {require('../../../assets/LoginLogo.png')} />
            </View>
            <View style={{paddingTop:20}}>
                <Text style={{color:'white', fontWeight:'bold', paddingLeft:20, fontSize:20}}>Redefinição de Senha</Text>
                <Text style={{color:'#7C7C7C', fontWeight:'bold', paddingLeft:20, fontSize:16, paddingTop:5, paddingRight:20}}>Digite seu email para receber as instruções para mudança da sua senha.</Text>
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
            <View style = {{alignItems:'center', paddingTop:20}}>
                <TouchableOpacity style = {styles.buttom} onPress={()=> ResetPassword()}>
                    <Text style={styles.textbuttom}>Redefinir Senha</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')}>
                    <Text style ={{paddingTop:10, fontSize:16, fontWeight:'bold'}}>Voltar</Text>
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
        padding:5
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