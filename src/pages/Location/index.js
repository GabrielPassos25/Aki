import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, View, Image, Text, Picker, ScrollView, TouchableOpacity} from 'react-native';

export default function Location(){
    const [value, setValue] = useState("Selecione seu Bairro");
    const navigation = useNavigation();
    return(
        <View style= {styles.container}>
            <ScrollView>
                <View style = {{justifyContent:'center', alignItems:'center', paddingTop:'20%'}}>
                    <Image source = {require('../../../assets/Location0.png')}/>
                    <Image source = {require('../../../assets/Location1.png')}/>
                </View>
                <View>
                    <Text style={{textAlign:'center', paddingTop:30, fontSize:24, fontWeight:'bold', color:'#F4F1F1'}}>Informe-nos sua localização</Text>
                    <Text style={{textAlign:'center', paddingTop:10, paddingLeft:10, paddingRight:10, fontSize:16, color:'#7C7C7C'}}>Essa informação é essencial para o cálculo do frete. Além disso, saberemos se você está na nossa área de cobertura para entregas!</Text>
                </View>
                <View style={{paddingLeft:10}}>
                    <Text style = {{paddingTop:20, color:'#F4F1F1', fontSize:20, paddingLeft:10, fontWeight:'bold', textAlign:'center'}}>Escolha seu Bairro:</Text>
                    <Picker
                        selectedValue ={value}
                        onValueChange = {(itemValue, itemIndex) => setValue(itemValue)}
                        style = {styles.picker}
                    >
                        <Picker.Item label = "Aldeota" value = "Aldeota" color='#black' backgroundColor = "#1E2E2A"/>
                        <Picker.Item label = "Benfica" value = "Benfica" color='#black'/>
                        <Picker.Item label = "Cocó" value = "Cocó" color='#black'/>
                        <Picker.Item label = "Meireles" value = "Meireles" color='#black'/>
                        <Picker.Item label = "Pici" value = "Pici" color='#black'/>
                    </Picker>
                </View>
                <View style = {{alignItems:'center'}}>
                    <TouchableOpacity style = {styles.buttom} onPress={()=> navigation.navigate('LoginScreen')}>
                        <Text style={styles.textbuttom}>Continuar</Text>
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
        position:'absolute'
    },
    picker:{
        ...Platform.select({
            ios: {
                fontSize:14,
                fontWeight:'bold',
            },
            android: {
                color:'black',
                fontSize:14,
                padding:30,
                alignItems:'center',
                justifyContent:'center',
                fontWeight:'bold',
            }
        })
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
});