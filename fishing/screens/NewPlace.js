import React, { useState, } from "react";
import { View,Modal, Text,ImageBackground,SafeAreaView,ScrollView, Image, TouchableOpacity } from "react-native";
import { useWindowDimensions } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MapView from 'react-native-maps';
import { Rating, AirbnbRating } from 'react-native-ratings';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { uid } from "uid";



const NewPlace = ({ navigation, route }) => {
    const [sideBarIsVisible, setSideBarIsVisible] = useState(false);
    const { height, width } = useWindowDimensions();
    const [fishingPlaceRaitinf, setfishingPlaceRaitinf] = useState(0);
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
    const [showContacts, setShowContacts] = useState(true);
    console.log('showContacts=>', showContacts)
    const [modalWithPhoto, setModalWithPhoto] = useState(false);
    const [selectPhoto, setSelectPhoto] = useState([]);
    
    const ratingCompleted = (rating) => {
        //console.log("Rating is: " + rating);
        setfishingPlaceRaitinf(rating)
    };

    const ImagePicer = () => {
        let options = {
            storageOptios: {
                path: 'image',
            }
        };
        
        launchImageLibrary(options, response => {
            if (!response.didCancel) {
                //console.log('response==>', response.assets[0].uri);
                setSelectPhoto([response.assets[0].uri, ...selectPhoto]);

            } else {
                console.log('Вибір скасовано');
            }
        });
    };

    return (
        <View style={{ flex: 1, }}>
            <ImageBackground
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                source={require('../assets/bgr.jpg')}
            >

                <View style={{ flex: 1, position: 'relative' }}>
                    <ScrollView>
                        
                        <View style={{ flex: 1, marginTop: 30, backgroundColor: 'rgba(128, 128, 128, 0.5)', borderTopStartRadius: 10, borderTopEndRadius: 10, }}>
                            <View style={{ flex: 1, alignItems: 'center' }}>

                                <View style={{ alignItems: 'center', paddingHorizontal: 3, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 22, fontWeight: '700' }}>{place}</Text>
                                </View>

                                <View style={{ paddingHorizontal: 3, }}>
                                    <Text style={{ fontSize: 16 }}>{aboutPlace}</Text>
                                </View>

                                <Image
                                    source={{ uri: photo }}
                                    style={{ width: width, height: 200 }}
                                />

                                {/**Raitinng block */}
                                <View>
                                    {fishingPlaceRaitinf < 1 && <View style={{ alignItems: 'center', marginBottom: -30 }}><Text style={{ fontSize: 20, color: 'gold', fontWeight: '600' }}>Leave a rating for this community</Text></View>}

                                    {/**RAITING */}
                                    <AirbnbRating
                                        style={{ color: '#000' }}
                                        onFinishRating={ratingCompleted}
                                        defaultRating={fishingPlaceRaitinf}
                                    />
                                </View>

                               
                            
                                
                            
                                <Text style={{ fontSize: 20, fontWeight: '700', color: '#004d00' }}>{communittie} communitie</Text>

                                <View style={{ paddingHorizontal: 3, }}>
                                    

                                    <Text style={{ fontSize: 16 }}>{discription}</Text>

                                    <Text style={{ fontSize: 16 }}><Text style={{ fontWeight: 'bold' }}>We provide the following services: </Text>{services}</Text>
                                
                                </View>

                               
                                
                            </View>

                            <MapView
                                style={{ height: 200, marginBottom: 5, borderRadius: 10 }}
                                initialRegion={{
                                    latitude: 65.187912,
                                    longitude: -123.421722,
                                    latitudeDelta: 0.99999,
                                    longitudeDelta: 0.9421,
                                }}
                            />

                            {/**contact block */}
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={{ alignItems: 'center', justifyContent: 'center', shadowOffset: { width: 3, height: 4 }, shadowOpacity: .8, elevation: 9, marginTop: 5, marginBottom: 15, paddingLeft: 10, fontSize: 20, borderWidth: 1, borderColor: '#fff', color: '#000', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, width: 250, height: 40, }}
                                    onPress={() => { setShowContacts(!showContacts) }}
                                >
                                    {showContacts ? (
                                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600' }}>Show contacts</Text>
                                    ) : (
                                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600' }}>Hide contacts</Text>
                                    )}
                                </TouchableOpacity>
                                    
                                {!showContacts &&
                                    <View>
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                                   

                                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Our contacts: </Text>
                                        </View>
                            

                                        <View style={{ paddingHorizontal: 3, }}>
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
                                    </View>
                                }

                            </View>

                            {/**Fishing catch photo */}
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={{ alignItems: 'center', justifyContent: 'center', shadowOffset: { width: 3, height: 4 }, shadowOpacity: .8, elevation: 9, marginTop: 5, marginBottom: 15, paddingLeft: 10, fontSize: 20, borderWidth: 1, borderColor: '#fff', color: '#000', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, width: 250, height: 40, }}
                                    onPress={() => { setModalWithPhoto(true) }}
                                >
                                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600' }}>Fishing catch photo</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </ScrollView>

                    <TouchableOpacity
              onPress={() => setSideBarIsVisible(true)}
              style={{ position: 'absolute', top: 20, left: 5, width: 38, height: 38, backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 5 }}>
              <AntDesign name='bars' style={{ color: '#fff', fontSize: 35 }} />
            </TouchableOpacity>

                    {/**btn back */}
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack()
                        }}
                        style={{ position: 'absolute', bottom: 5, right: 5, height: 38, backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 5 }}
                    >
                        <Entypo name='reply' style={{ fontSize: 35, color: '#fff' }} />
                    </TouchableOpacity>

                    
                    

                </View>

                {/**SIDEBAR */}
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={sideBarIsVisible}
                >
                    <View style={{ backgroundColor: '#292c33', flex: 1, marginRight: '30%' }}>

                        {/**BTN SideBar Close */}
                        <TouchableOpacity
                            onPress={() => { setSideBarIsVisible(false) }}
                            style={{ position: 'absolute', top: 20, left: 10 }}>
                            <Text style={{ color: '#fff', fontSize: 30 }}>X</Text>
                        </TouchableOpacity>

                        {/**BTN route block */}
                        <View style={{ marginTop: 70, marginLeft: 20 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('HomeScreen'),
                                        setSideBarIsVisible(false)
                                }}
                                style={{ marginBottom: 10 }}>
                                <Text style={{ color: '#fff', fontSize: 30 }}>Home</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('FishingPlaceScreen'),
                                        setSideBarIsVisible(false)
                                }}
                                style={{ marginBottom: 10 }}>
                                <Text style={{ color: '#fff', fontSize: 30 }}>Location</Text>
                            </TouchableOpacity>
                
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('ProfileScreen'),
                                        setSideBarIsVisible(false)
                                }}
                                style={{ marginBottom: 10 }}>
                                <Text style={{ color: '#fff', fontSize: 30 }}>Profile</Text>
                            </TouchableOpacity>


                
                        </View>

                    </View>
                </Modal>

                {/**modal add place */}
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalWithPhoto}
                >

                    <View style={{ backgroundColor: '#292c33', flex: 1, marginTop: '20%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>

                        {/**BTN SideBar Close */}
                        <TouchableOpacity
                            onPress={() => { setModalWithPhoto(false) }}
                            style={{ position: 'absolute', top: 0, left: 10, width: 40, height: 40 }}>
                            <Text style={{ color: '#fff', fontSize: 30 }}>X</Text>
                        </TouchableOpacity>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>

                            <TouchableOpacity
                                onPress={() => {
                                    ImagePicer()
                                }}
                                style={{ shadowOffset: { width: 3, height: 4 }, shadowOpacity: .8, elevation: 9, marginTop: 5, marginBottom: 15, paddingLeft: 10, fontSize: 20, borderWidth: 1, borderColor: '#fff', color: '#000', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, width: 250, height: 40, alignItems: 'center' }}
                            >
                                <Text style={{ color: '#fff', fontSize: 27, fontWeight: '500', }}>Add photo </Text>
                            </TouchableOpacity>
                                

                            <ScrollView style={{ marginBottom: 50 }}>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', width: width }}>
                                    {selectPhoto.map((i) => {
                                        return (
                                            <Image
                                                key={uid()}
                                                source={{ uri: i }}
                                                style={{ width: '45%', height: 150, marginLeft: '3%', marginRight: '1%', marginTop: 10 }}
                                            />
                                        )
                                    })}
                                </View>
                                

                                    
                                    
                            </ScrollView>
                        </View>


                    </View>
                </Modal>

            </ImageBackground>

        </View>
    );
};

export default NewPlace;