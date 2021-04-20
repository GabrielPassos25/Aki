import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, TextInput, Alert} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { auth } from '../../../firebase';
import firebase from 'firebase';

export default function Register(){
    const navigation = useNavigation();
    const [email, onChangeEmail] = React.useState("");
    const [senha, onChangeSenha] = React.useState("");
    const [visivel, setVisivel] = useState(true);
    const createUser = () => {
        if(!senha || senha.length < 6){
            Alert.alert("Senha inválida","A senha deve conter no mínimo 6 caractéres!");
            return
        }
        try {
            auth.createUserWithEmailAndPassword(email, senha)
                .then(() => navigation.navigate('Menu'))
                .catch(error => {
                    switch(error.code){
                        case 'auth/email-already-in-use':
                            Alert.alert('Email já está cadastrado!','O email informado já está cadastrado em nosso sistema!')
                            break;
                        case 'auth/invalid-email':
                            Alert.alert('Email inexistente!','Por favor, verifique o email digitado e tente novamente!');
                    }       
                })
            }catch(err){
                alert("Error : ", err);
            }
            onChangeEmail("");
            onChangeSenha("");
        }

    return(
        <View style= {styles.container}>
        <ScrollView>
            <View style = {{alignItems:'center', justifyContent:'center', paddingTop:20}}>
                <Image source = {require('../../../assets/LoginLogo.png')} />
            </View>
            <View style={{paddingTop:20}}>
                <Text style={{color:'white', fontWeight:'bold', paddingLeft:20, fontSize:20}}>Registrar</Text>
                <Text style={{color:'#7C7C7C', fontWeight:'bold', paddingLeft:20, fontSize:16, paddingTop:5, paddingRight:20}}>Coloque seus dados abaixo para continuar</Text>
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
                <Text style={{color:'#7C7C7C', fontWeight:'bold', paddingLeft:20, textAlign:'center',fontSize:14, paddingTop:10, paddingRight:20}}>Ao continuar, você está concordando com os nossos <Text style={{color:'#53B175'}}>Termos de serviços</Text> e <Text style={{color:'#53B175'}}>Política de Privacidade</Text></Text>
            </View>
            <View style = {{alignItems:'center', paddingTop:10}}>
                <TouchableOpacity style = {styles.buttom} onPress={()=> createUser()}>
                    <Text style={styles.textbuttom}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')}>
                    <Text style ={{paddingTop:10, fontSize:16, fontWeight:'bold'}}>Já possui cadastro?
                            <Text style={{color:'#53B175'}}> Entrar</Text>
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