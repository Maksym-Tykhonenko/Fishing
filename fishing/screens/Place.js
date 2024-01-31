import React, { useState, } from "react";
import { View, Text,ImageBackground,SafeAreaView,ScrollView, Image, TouchableOpacity } from "react-native";
import { useWindowDimensions } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import MapView from 'react-native-maps';


const Place = ({ navigation, route }) => {
    const { height, width } = useWindowDimensions();
    const {
        place,
        photo,
        aboutPlace,
        communittie,
        discription,
        services,
        contactName,
        adress,
        phone,
        website,
        email,
        latitude,
        longitude } = route.params.place;
    
    
    
    return (
        <View style={{ flex: 1, }}>
            <ImageBackground
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                source={require('../assets/bgr.jpg')}
            >
                <View style={{ flex: 1, position: 'relative' }}>

                    <SafeAreaView style={{ flex: 1, marginHorizontal: 10, marginTop: 35, }}>

                        <ScrollView>

                            <View style={{ flex: 1, backgroundColor: 'rgba(128, 128, 128, 0.5)', borderTopStartRadius: 10, borderTopEndRadius: 10 }}>
                                

                                 <View
                                        style={{ flex: 1, }}
                                    >
                                        <MapView
                                            style={{ height: 200, marginBottom: 5, borderRadius: 10 }}
                                            initialRegion={{
                                                latitude: latitude,
                                                longitude: longitude,
                                                latitudeDelta: 0.0922,
                                                longitudeDelta: 0.0421,
                                            }}
                                        />
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 22, fontWeight: '700' }}>{place}</Text>
                                </View>
                                <Text style={{ fontSize: 16 }}>{aboutPlace}</Text>
                                
                                <Image
                                    source={photo}
                                    style={{ width: width, height: 200 }}
                                />

                                <Text style={{ fontSize: 20, fontWeight: '700', color: 'green' }}>{communittie} communitie</Text>

                                <Text style={{ fontSize: 16 }}>{discription}</Text>

                                <Text style={{ fontSize: 16 }}><Text style={{ fontWeight: 'bold' }}>We provide the following services: </Text>{services}</Text>
                                
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                                   

                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Our contacts: </Text>
                                </View>
                                
                                
                                <Text style={{ fontSize: 16 }}><Text style={{ fontWeight: 'bold' }}><Fontisto name='person' style={{ fontSize: 16, color: '#333333' }} /> : </Text>{contactName}</Text>

                                <Text style={{ fontSize: 16 }}><Text style={{ fontWeight: 'bold' }}><Entypo name='location' style={{ fontSize: 16, color: '#333333' }} /> : </Text>{adress}</Text>

                                <TouchableOpacity
                                    onPress={() => { }}
                                >
                                    <Text style={{ fontSize: 16 }}><Text style={{ fontWeight: 'bold' }}><Foundation name='telephone' style={{ fontSize: 16, color: '#333333' }} /> : </Text>{phone}</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 16 }}><Text style={{ fontWeight: 'bold' }}><MaterialCommunityIcons name='web' style={{ fontSize: 16, color: '#333333' }} /> : </Text>{website}</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 16 }}><Text style={{ fontWeight: 'bold' }}><Entypo name='email' style={{ fontSize: 16, color: '#333333' }} /> : </Text>{email}</Text>
                                </TouchableOpacity>
                                
                            </View>
                            
                            
                            

                        </ScrollView>
                            


                    </SafeAreaView>

                </View>
                
            </ImageBackground>
           
        </View>
    );
};

export default Place;