import React,{useState} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { uid } from 'uid';

import { communitties } from '../data/commubities';


const FishingPlaceScreen = ({ navigation }) => {

    const [sideBarIsVisible, setSideBarIsVisible] = useState(false);
    const [modalAddPlaceIsVisible, setModalAddPlaceIsVisible] = useState(false);

    return (
        <View style={{ flex: 1, }}>
            <ImageBackground
                style={{ flex: 1 }}
                source={require('../assets/bgr.jpg')}
            >
                <View style={{ flex: 1, position: 'relative' }}>

                    <SafeAreaView style={{ flex: 1, marginHorizontal: 10, marginTop: 35, }}>
                        <ScrollView>
                            
                            
                            {communitties.map((i) => {
                                return (
                                    <TouchableOpacity
                                        style={{backgroundColor: 'rgba(128, 128, 128, 0.5)', marginBottom:10,alignItems:'center', justifyContent:'center'}}
                                        key={uid()}
                                        onPress={() => {navigation.navigate('Place', {place: i}) }}>
                                        <Image
                                            source={i.photo}
                                            style={{ width: '100%', height: 200 }}
                                        />
                                        <Text style={{fontWeight: '600', fontSize: 17}}>{i.place}</Text>
                                    </TouchableOpacity>
                                )
                            })}


                        </ScrollView>

                    </SafeAreaView>

                    <TouchableOpacity
                        onPress={() => setSideBarIsVisible(true)}
                        style={{ position: 'absolute', top: 20, left: 5, width: 38, height: 38, backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 5 }}>
                        <AntDesign name='bars' style={{ color: '#fff', fontSize: 35 }} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { setModalAddPlaceIsVisible(true)}}
                        style={{ position: 'absolute', top: 20, right: 5, width: 38, height: 38, backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 5 }}>
                        <Entypo name='plus' style={{ color: '#fff', fontSize: 35 }} />
                    </TouchableOpacity>

                    
                    {/**modal add place */}
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalAddPlaceIsVisible}
                    >

                        <View style={{ backgroundColor: '#292c33', flex: 1, marginTop: '30%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>

                            {/**BTN SideBar Close */}
                            <TouchableOpacity
                                onPress={() => { setModalAddPlaceIsVisible(false) }}
                                style={{ position: 'absolute', top: 20, left: 10 }}>
                                <Text style={{ color: '#fff', fontSize: 30 }}>X</Text>
                            </TouchableOpacity>



                        </View>
                    </Modal>

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
                                    <Text style={{ color: '#fff', fontSize: 30 }}>Plase</Text>
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

                </View>
        
            </ImageBackground>
      
        </View>
    );
 
};

export default FishingPlaceScreen;