import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

export default function MenuImage(){
    return(
        <View style={styles.image}>
            <Image source = {require('../../../assets/ImageAKI.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        alignItems: 'center'
    }
})