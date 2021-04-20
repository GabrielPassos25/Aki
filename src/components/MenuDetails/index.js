import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/core';
import Collapsible from 'react-native-collapsible';

export default function MenuDetails(){
    const navigation = useNavigation();
    const preço = 30;
    let [coracao, setCoracao] = useState(false);
    let [number, setNumber] = useState(1);
    let [total, setTotal] = useState(preço);
    const [collapsed, setCollapsed] = useState(true);
    const toggleExpanded = () => {
        setCollapsed(!collapsed);
    };
    const subtractNumber = () =>{
        number = number - 1;
        if(number < 0){
            number = 0;
        }
        setNumber(number);
        calcuteTotal();
    }
    const sumNumber = () =>{
        number = number + 1;
        setNumber(number);
        calcuteTotal();
    }
    const calcuteTotal = () =>{
        total = preço * number;
        setTotal(total)
    }
    const setFavorito = () =>{
        coracao = setCoracao(!coracao)
    }
    return(
        <ScrollView>
            <View>
                <View>
                    <View style={styles.icons}>
                            <TouchableOpacity onPress={()=> navigation.navigate('Menu')}>
                                <View style={{flexDirection:'row', paddingLeft:10, justifyContent: 'center', alignItems:'center'}}>
                                    <AntDesign name="caretleft" size={24} color="black" />
                                    <Text style={{color:'#2D7B49', fontWeight:'bold',fontSize:16}}>Voltar</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{paddingRight:10, justifyContent: 'center', alignItems:'center'}}>
                                <Feather name="share" size={24} color="black" />
                            </View>
                    </View>
                    <View style = {styles.bgImage}>
                        <Image source = {require('../../../assets/FoodDetails.png')}/>
                    </View>
                </View>
                <View>
                    <View style={{flexDirection:'row', paddingLeft:10, paddingRight:10, justifyContent: 'space-between', alignItems:'center', paddingTop:10}}>
                        <Text style={{fontSize:25, fontWeight:'bold', color:'#F4F1F1'}}>Camarão Roll</Text>
                        <TouchableOpacity onPress={setFavorito}>
                            { coracao == false ? <AntDesign name="hearto" size={24} color="red" />: <AntDesign name="heart" size={24} color="red" /> }
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', paddingLeft:10, paddingRight:10, justifyContent: 'space-between', alignItems:'center', paddingTop:10}}>
                        <View style={{flexDirection:'row', paddingLeft:10, paddingRight:10, justifyContent: 'space-between', alignItems:'center'}}>
                            <TouchableOpacity onPress={subtractNumber}>
                                <AntDesign name="minus" size={24} color="#7C7C7C" style={{paddingRight:10}} />
                            </TouchableOpacity>
                            <Text style={styles.number_text}>{number}</Text>
                            <TouchableOpacity onPress={sumNumber}>
                                <AntDesign name="plus" size={24} color="#2D7B49" style={{paddingLeft:10}} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{fontSize:20, fontWeight:'bold'}}>R$ {total},00</Text>
                        </View>
                    </View>
                </View>
                <View style = {{alignItems:'center', justifyContent:'center', paddingTop:20}}>
                    <View style={{borderBottomColor:'#F4F1F1', borderBottomWidth:1, width:'95%'}}/>
                </View>
                <View style={{flexDirection:'row', paddingLeft:10, paddingRight:10, justifyContent: 'space-between', alignItems:'center', paddingTop:10}}>
                    <Text style={{fontSize:18, color:'black'}}>Detalhes do Produto</Text>
                    <TouchableOpacity onPress ={toggleExpanded}>
                        <AntDesign name="caretdown" size={20} color="black" style={{marginTop:-5}}/>
                    </TouchableOpacity>
                </View>
                <Collapsible collapsed={collapsed}>
                    <Text style={{fontSize:16, color:'#454545', paddingLeft:10, paddingRight:10, textAlign:'center'}}>Camarões crocantes, envolto no molho AKI adocidado e levemente picante. Finalizado com cebolinha.</Text>
                </Collapsible>
                <View style = {{alignItems:'center', justifyContent:'center', paddingTop:20}}>
                    <View style={{borderBottomColor:'#F4F1F1', borderBottomWidth:1, width:'95%'}}/>
                </View>
                <View style = {styles.buttonView}>
                    <TouchableOpacity style = {styles.buttom}>
                        <Text style={styles.textbuttom}>Adicionar ao Carrinho</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:'100%', height:120}}></View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    bgImage:{
        marginTop:-20,
        width:'100%',
        height:280,
        backgroundColor: '#798984',
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
        alignItems:'center',
        justifyContent:'flex-end',
        zIndex:0
    },
    icons:{
        backgroundColor: '#798984',
        paddingTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        zIndex:1
    },
    number_text:{
        ...Platform.select({
            ios: {
                fontSize:18,
                borderWidth:1, 
                borderRadius:10, 
                textAlign:'center', 
                textAlignVertical:'center', 
                borderColor:'#F4F1F1', 
                width:30, 
                height:30,
                paddingTop:5
            },
            android: {
                fontSize:18,
                borderWidth:1, 
                borderRadius:10, 
                textAlign:'center', 
                textAlignVertical:'center', 
                borderColor:'#F4F1F1', 
                width:30, 
                height:30
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
    buttonView:{
        paddingTop:30,
        alignItems:'center',
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