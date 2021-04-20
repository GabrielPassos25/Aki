import React from 'react';
import {StyleSheet, View, Image, Text, Dimensions, Platform} from 'react-native';
import { Ionicons, AntDesign} from '@expo/vector-icons'; 
export default function Footer(){
    return(
        <View style={styles.container}> 
            <View style={styles.imagesList}>
                <View style={styles.list1}>
                    <Ionicons name="md-home-sharp" size={24} color="#2D7B49" />
                    <Text style={styles.textActive}>Menu</Text>
                </View>
                <View style={styles.list2}>
                    <AntDesign name="shoppingcart" size={24} color="white" />
                    <Text style={styles.text}>Meu Carrinho</Text>
                </View>
                <View style={styles.image}> 
                    <Image source = {require('../../../assets/logo.png')}/>
                </View>
                <View style={styles.list3}>
                    <AntDesign name="hearto" size={24} color="white" />
                    <Text style={styles.text}>Favoritos</Text>
                </View>
                <View style={styles.list4}>
                <Ionicons name="person-outline" size={24} color="white" />
                    <Text style={styles.text}>Perfil</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        ...Platform.select({
            ios: {
                backgroundColor:"#21362E",
                paddingBottom:20,
                width: Dimensions.get('window').width,
                justifyContent:'center',
                paddingRight:20,
                paddingLeft:10
            },
            android: {
                backgroundColor:"#21362E",
                paddingBottom:10,
                width: Dimensions.get('window').width,
                justifyContent:'center',
                paddingRight:20,
                paddingLeft:10
            }
        })
    },
    imagesList:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    list1:{
        paddingTop:8,
        paddingLeft:10,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    list2:{
        paddingTop:10,
        paddingLeft:5,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    textActive:{
        color:'#2D7B49'
    },
    text:{
        color:'white'
    },
    image:{
        paddingTop:5,
        paddingRight:10,
        alignItems:'center',
        justifyContent:'center'
    },
    list3:{
        paddingTop:10,
        paddingRight:15,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    list4:{
        paddingTop:10,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
});