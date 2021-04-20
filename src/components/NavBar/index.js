import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, Platform, StatusBar, TouchableOpacity, Alert} from 'react-native';
import { Ionicons} from '@expo/vector-icons'; 
import {Menu, MenuTrigger, MenuOptions,MenuOption, MenuContext} from 'react-native-popup-menu';
import { useNavigation } from '@react-navigation/core';

export default function NavBar(){
    const navigation = useNavigation();
    return(
        <View>
            <StatusBar backgroundColor="#21362E"/>
            <View style = {styles.container}>
                <View style = {styles.images}>
                    <View>
                        <Image source = {require('../../../assets/logo.png')}/>
                    </View>
                    <View>
                        <MenuContext style = {{flexDirection:'column'}}>
                            <Menu>
                                <MenuTrigger>
                                    <Ionicons name="ios-person-circle-outline" size={35} color="white" style={styles.personImage} />
                                </MenuTrigger>
                                <MenuOptions>
                                    <MenuOption onSelect={() => navigation.navigate('LoginScreen')} >
                                        <Text style={{color:'red'}}>Sair</Text>
                                    </MenuOption>
                                </MenuOptions>
                            </Menu>
                        </MenuContext>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        ...Platform.select({
            ios: {
                backgroundColor: '#21362E',
                paddingTop:35
            },
            android: {
                backgroundColor: '#21362E',
                paddingTop:30
            },
            web:{
                backgroundColor: '#21362E',
                paddingTop:35
            }
        })
    },
    images:{
        flexDirection:'row',
        paddingLeft:10,
        paddingBottom:10,
        justifyContent:'space-between',
        paddingRight:10,
        alignItems:'center'
    },
    personImage:{
        paddingTop:5
    },
    containerList:{
        backgroundColor: '#1E2E2A'
    },
    imagesList:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    list1:{
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:20,
    },
    list2:{
        flexDirection:'row',
        alignItems:'center',
    },
    list3:{
        flexDirection:'row',
        alignItems:'center',
        paddingRight:20
    },
    text:{
        color:'white',
        paddingLeft:10
    }
});