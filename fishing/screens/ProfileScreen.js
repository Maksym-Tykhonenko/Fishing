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


const ProfileScreen = ({navigation}) => {

  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);

    return (
        <View style={{ flex: 1, }}>
            <ImageBackground
                style={{ flex: 1 }}
                source={require('../assets/bgr.jpg')}
            >
                <View style={{ flex: 1, position: 'relative' }}>

          
                  

                    <TouchableOpacity
                        onPress={() => setSideBarIsVisible(true)}
                        style={{ position: 'absolute', top: 20, left: 5, width: 38, height: 38, backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 5 }}>
                        <AntDesign name='bars' style={{ color: '#fff', fontSize: 35 }} />
                    </TouchableOpacity>

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

export default ProfileScreen;