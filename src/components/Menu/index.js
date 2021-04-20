import React from 'react';
import {StyleSheet, View, Image, Text, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {Searchbar} from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons'; 
import MenuImage from '../../components/MenuImage';

const entradasMenu = [
    {
        "image": require('../../../assets/Food1.png'),
        "name": "Chicken Bao Bun",
        "description": "Pão chinês no vapor, Frango empanado com Corn Flakes, Picles de cebola roxa, Maionese Sriracha",
        "price": "R$ 24,99"
    },
    {
        "image": require('../../../assets/Food2.png'),
        "name": "Rock Shrimp",
        "description": "Camarões crocantes, envolto no molho AKI adocidado e levemente picante. Finalizado com cebolinha.",
        "price": "R$ 42,00"
    },
    {
        "image": require('../../../assets/Food1.png'),
        "name": "Chicken Bao Bun ",
        "description": "Pão chinês no vapor, Frango empanado com Corn Flakes, Picles de cebola roxa, Maionese Sriracha",
        "price": "R$ 24,99"
    },
    {
        "image": require('../../../assets/Food2.png'),
        "name": "Rock Shrimp ",
        "description": "Camarões crocantes, envolto no molho AKI adocidado e levemente picante. Finalizado com cebolinha.",
        "price": "R$ 42,00"
    },
]

export default function Menu(){
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <MenuImage/>
            <View style={styles.search}>
                <Searchbar
                    placeholder="Busque por um produto"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>
            <View style={styles.entradasTitulo}>
                <View style={{flexDirection:'row',paddingRight:"40%", justifyContent:'center',alignItems:'center'}}>
                    <AntDesign name="caretright" size={24} color="black"/>
                    <Text style={{fontWeight:'bold', fontSize:15}}>ENTRADAS</Text>
                </View>
                <View style={{paddingLeft:"30%", alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'#2D7B4A', fontWeight:'bold'}}>Veja Mais</Text>
                </View>
            </View>
            
            <FlatList
                horizontal = {true}
                contentContainerStyle={{paddingBottom:'5%'}}
                data={entradasMenu}
                style={styles.list}
                keyExtractor={item => item.name}
                renderItem ={ ({item}) => 
                <View style={{paddingRight:10,paddingLeft:10}}>
                    <View style={styles.entradasComponents}>
                        <Image source = {item.image} style={{marginTop:10}}/>
                        <Text style = {{color:'#F4F1F1', fontWeight:'bold',fontSize:18, paddingTop:5}}>{item.name}</Text>
                        <Text style={{paddingLeft:20,paddingRight:20, paddingTop:10, textAlign:'center', color: '#454545'}}>{item.description}</Text>
                        <View style={styles.price}>
                            <Text style={{fontWeight:'bold', fontSize:16}}>{item.price}</Text>                        
                        </View>
                        <TouchableOpacity onPress={()=> navigation.navigate('MenuDetails')}>
                            <View style={styles.details}>
                                <Text style={{color: '#454545'}}>+</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                }/>
                <View style={styles.entradasTitulo}>
                <View style={{flexDirection:'row',paddingRight:"40%", justifyContent:'center',alignItems:'center'}}>
                    <AntDesign name="caretright" size={24} color="black"/>
                    <Text style={{fontWeight:'bold', fontSize:15}}>PRATOS</Text>
                </View>
                <View style={{paddingLeft:"30%", alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'#2D7B4A', fontWeight:'bold'}}>Veja Mais</Text>
                </View>
            </View>
            
            <FlatList
                horizontal = {true}
                contentContainerStyle={{paddingBottom:'5%'}}
                data={entradasMenu}
                style={styles.list}
                keyExtractor={item => item.name}
                renderItem ={ ({item}) => 
                <View style={{paddingRight:10,paddingLeft:10}}>
                    <View style={styles.entradasComponents}>
                        <Image source = {item.image} style={{marginTop:10}}/>
                        <Text style = {{color:'#F4F1F1', fontWeight:'bold',fontSize:18, paddingTop:5}}>{item.name}</Text>
                        <Text style={{paddingLeft:20,paddingRight:20, paddingTop:10, textAlign:'center', color: '#454545'}}>{item.description}</Text>
                        <View style={styles.price}>
                            <Text style={{fontWeight:'bold', fontSize:16}}>{item.price}</Text>                        
                        </View>
                        <View style={styles.details}>
                            <Text style={{color: '#454545'}}>+</Text>
                        </View>
                    </View>
                </View>
            }/>
            <View style={{width:'100%', height:150}}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop:10,
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:5,
        paddingRight:5,
    },
    search:{
        paddingTop:10,
        alignItems:'center',
        justifyContent:'center'
    },
    entradasTitulo:{
        padding:20,
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%'
    },
    entradasComponents:{
        width:200,
        backgroundColor:'#798984',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        borderWidth:1,
        paddingBottom:10
    },
    price:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:10,
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:5,
    },
    details:{
        backgroundColor: '#2D7B49',
        width:30,
        height:30,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'
    },
    list:{
        width:'100%',
    }
});