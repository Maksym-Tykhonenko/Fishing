import React, { useState, } from "react";
import { View, Text,ImageBackground,SafeAreaView,ScrollView } from "react-native";

const Place = ({ navigation, route }) => {
    console.log('route==>', route.params.place)
    return (
        <View style={{ flex: 1, }}>
             <ImageBackground
                style={{ flex: 1 , alignItems: 'center', justifyContent: 'center'}}
                source={require('../assets/bgr.jpg')}
            >
                <View style={{ flex: 1, position: 'relative' }}>

                    <SafeAreaView style={{ flex: 1, marginHorizontal: 10, marginTop: 35, }}>
                        <ScrollView>
                            
                            <Text>{route.params.place.place }</Text>

  </ScrollView>
                            


                    </SafeAreaView>

                </View>
                
            </ImageBackground>
           
        </View>
    )
};

export default Place;