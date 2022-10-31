import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity
}from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { removeProducts } from '../actions/actions';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';



const Cart =()=> {
    const items = useSelector(state => state);
    const dispatch = useDispatch()
    const removeItem = pid => {
        dispatch(removeProducts(pid))
    }
    const navigation = useNavigation();
    
    if(items.length!==0)
    {
    return(
        
        <View style={{flex:1,backgroundColor:'gray'}}>
            <View style={{height:'10%',width:'100%',backgroundColor:'black',flexDirection:'row',alignItems:'center'}}>
                <Icon name='arrow-back' size={28} color='white'
                onPress={()=>{navigation.navigate('Products')}}>
                
                </Icon>
                    <Text style={{
                        fontSize:26,
                        fontWeight:'bold',
                        color:'white',
                        marginLeft:30}}>Cart</Text>
                        </View>
                        
            <FlatList
            data={items}
            renderItem={({item})=>{
                return(
                    
                    
                    <View style={{
                        width:'95%',
                        height:150,
                        borderRadius:15,
                        alignItems:'center',
                        justifyContent:'space-between',
                        alignSelf:'center',
                        marginTop:10,
                        borderWidth:3,
                        borderColor:'black',
                        flexDirection:'row',
                        backgroundColor:'white'
                    }}>
                        <View style={{width:'60%',padding:20}}>
                            <Text style={{fontWeight:'bold',color:'black',fontSize:18}}>{item.name}</Text>
                            <Text style={{fontSize:16,fontWeight:'700',color:'red'}}>
                                {item.price}
                            </Text>
                        <TouchableOpacity
                        style={{
                            height:30,
                            borderRadius:10,
                            width:150,
                            justifyContent:'center',
                            alignItems:'center',
                            backgroundColor:'orange',
                            marginTop:10
                        }}
                        onPress={()=>{
                            removeItem(item.pid)
                        }}>
                            <Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>Remove item</Text>
                        </TouchableOpacity>
                        </View>

                        <View style={{flexDirection:'row',position:'absolute',right:30,borderRadius:5,borderWidth:2}}>
                                <Image
                                source={{uri:item.image}}
                                style={{width:100,height:100,marginTop:10}}>

                                </Image>
                            </View>
                    </View>
                )
        }}/>
    
        </View>
    

    )
    }
    else
    {
        return(
            <View style={{flex:1,alignItems:'center'}}>
                <View style={{height:'10%',width:'100%',backgroundColor:'black',flexDirection:'row',alignItems:'center'}}>
                <Icon name='arrow-back' size={28} color='white'
                onPress={()=>{navigation.navigate('Products')}}>
                
                </Icon>
                    <Text style={{
                        fontSize:26,
                        fontWeight:'bold',
                        color:'white',
                        marginLeft:30}}>Cart</Text>
                        </View>
                        
                <Text style={{fontSize:22,marginTop:250,fontWeight:'bold',color:'black'}}>Cart is empty</Text>
                </View>
                    )
    }
};
export default Cart;
