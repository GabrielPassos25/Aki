import React from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import NavBar from '../../components/NavBar'
import MenuDetails from '../../components/MenuDetails';
import Footer from '../../components/Footer';
export default function Home(){
    return(
        <View style = {{flex:1}}>
            <View>
                <NavBar/>
            </View>
            <View style = {{backgroundColor:"#96A6A1"}}>
                <ScrollView style = {{height:"100%"}}>
                    <MenuDetails/>
                </ScrollView>
            </View>
            <View style={{position:'absolute',bottom:0}}>
                <Footer/>
            </View>
        </View>
    );
}