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
    TextInput,
  SafeAreaViews
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { uid } from 'uid';


const ProfileScreen = ({ navigation }) => {

    const [sideBarIsVisible, setSideBarIsVisible] = useState(false);
    const [selectPhoto, setSelectPhoto] = useState(null);
    const [nameModal, setNameModal] = useState(false);
    const [fishingPlaceModal, setFishingPlaceModal] = useState(false)
    const [nameInModal, setNameInModal] = useState('');
    const [name, setName] = useState();
    const [fishingPlace, setFishingPlace] = useState([]);
    console.log('fishingPlace==>', fishingPlace)
    const [place, setPlace] = useState('');
    const [fidback, setFidback] = useState('');
    const [selected, setSelected] = useState('');
    
    const ImagePicer = () => {
        let options = {
            storageOptios: {
                path: 'image',
            }
        };
        
        launchImageLibrary(options, response => {
            if (!response.didCancel) {
                //console.log('response==>', response.assets[0].uri);
                setSelectPhoto(response.assets[0].uri,);

            } else {
                console.log('Вибір скасовано');
            }
        });
    };

    const handleAddName = () => {
        setName(nameInModal)
        setNameInModal('')
        setNameModal(false)
    };

    const handleAddDataAboutFishingPlace = () => {
        let newFishingPlace = {
            place,
            fidback,
            selected
        }
        setFishingPlace([newFishingPlace, ...fishingPlace]);
        
        CloseFishinngPleseModal()
    };

    const CloseFishinngPleseModal = () => {
        setPlace('');
        setFidback('');

        setFishingPlaceModal(false)
    }

    return (
        <View style={{ flex: 1, }}>
            <ImageBackground
                style={{ flex: 1 }}
                source={require('../assets/bgr.jpg')}
            >
                <View style={{ flex: 1, position: 'relative' }}>

                    

                        <SafeAreaView style={{ marginHorizontal: 10, marginTop: 30 }}>
                            
                            {/**AVATAR */}
                            <View style={{ alignItems: 'center' }}>
                                {!selectPhoto ? (
                                    <TouchableOpacity
                                        onPress={() => { ImagePicer() }}
                                        style={{ width: 250, height: 250, backgroundColor: 'rgba(128, 128, 128, 0.5)', alignItems: 'center', justifyContent: 'center', borderRadius: 150 }}
                                    >
                                        <Text style={{ color: '#fff', fontSize: 38, fontWeight: '600' }}>TAB FOR</Text>
                                        <Text style={{ color: '#fff', fontSize: 38, fontWeight: '600' }}>ADD  PHOTO</Text>
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity
                                        onPress={() => {
                                            ImagePicer()
                                        }}
                                    ><Image
                                            source={{ uri: selectPhoto }}
                                            style={{ width: 250, height: 250, backgroundColor: 'rgba(128, 128, 128, 0.5)', alignItems: 'center', justifyContent: 'center', borderRadius: 150 }} />
                                    </TouchableOpacity>
                                )}
                                
                            </View>

                            {/**NAME AND BUTTONS*/}
                            <View style={{ alignItems: 'center', }}>

                                {!name ? (
                                    <TouchableOpacity
                                        onPress={() => { setNameModal(true) }}
                                    >
                                        <Text style={{ fontSize: 30, fontWeight: '600' }}>My name is...</Text>
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity
                                        onPress={() => { setNameModal(true) }}
                                    >
                                        <Text style={{ fontSize: 30, fontWeight: '600' }}>{name}</Text>
                                    </TouchableOpacity>
                                )}
                                
                            </View>

                            <View style={{ alignItems: 'center',  }}>
                                
                                <TouchableOpacity
                                    onPress={() => {
                                        setFishingPlaceModal(true)
                                    }}
                                    style={{ alignItems: 'center', justifyContent: 'center', shadowOffset: { width: 3, height: 4 }, shadowOpacity: .8, elevation: 9, marginTop: 5, marginBottom: 15, paddingLeft: 10, fontSize: 20, borderWidth: 1, borderColor: '#fff', color: '#000', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, width: 250, height: 40, }}
                                >
                                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600' }}>Add fishing place</Text>
                                </TouchableOpacity>
                        </View>
                        
                            <ScrollView>
                            {fishingPlace.map((i) => {
                                return (
                                    <View
                                        style={{ shadowOffset: { width: 3, height: 4 }, shadowOpacity: .8, elevation: 9,  marginBottom: 10, paddingLeft: 10,  borderWidth: 1, borderColor: '#fff', color: '#000', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, width: '100%', }}
                                        key={uid()}
                                    >
                                        <Text style={{color:'#fff'}}>{i.selected }</Text> 
                                        <Text style={{color:'green', fontWeight: 'bold'}}>{i.place }</Text> 
                                        <Text style={{color:'#fff'}}>{i.fidback }</Text> 
                                    </View>
                                    
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
                        onPress={() => {
                            navigation.goBack()
                        }}
                        style={{ position: 'absolute', bottom: 5, right: 5, height: 38, backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 5 }}
                    >
                        <Entypo name='reply' style={{ fontSize: 35, color: '#fff' }} />
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

                    {/**Modal Name */}
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={nameModal}
                    >
                        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#292c33', flex: 1, marginRight: '10%', marginLeft: '10%', marginTop: '50%', marginBottom: '50%', borderRadius: 10 }}>
                            
                            {/**BTN SideBar Close */}
                            <TouchableOpacity
                                onPress={() => { setNameModal(false) }}
                                style={{ position: 'absolute', top: 20, left: 10 }}>
                                <Text style={{ color: '#fff', fontSize: 30 }}>X</Text>
                            </TouchableOpacity>

                            <TextInput
                                placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                placeholder="Communittie..."
                                value={nameInModal}
                                onChangeText={setNameInModal}
                                style={{ shadowOffset: { width: 3, height: 4 }, shadowOpacity: .8, elevation: 9, marginTop: 5, marginBottom: 15, paddingLeft: 10, fontSize: 20, borderWidth: 1, borderColor: '#fff', color: '#000', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, width: 250, height: 40, }}
                            />

                            <TouchableOpacity
                                onPress={() => {
                                    handleAddName()
                                }}
                                style={{ shadowOffset: { width: 3, height: 4 }, shadowOpacity: .8, elevation: 9, marginTop: 5, marginBottom: 15, paddingLeft: 10, fontSize: 20, borderWidth: 1, borderColor: '#fff', color: '#000', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, width: 100, height: 40, }}>
                                <Text style={{ color: '#fff', fontSize: 30 }}>SAVE</Text>
                            </TouchableOpacity>
                        
                        </View>

                    </Modal>

                    {/**Modal Fishinng place */}
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={fishingPlaceModal}
                    >
                        <View style={{ alignItems: 'center', paddingTop: 40, backgroundColor: '#292c33', flex: 1, marginRight: '5%', marginLeft: '5%', marginTop: '10%', marginBottom: '10%', borderRadius: 10 }}>
                            
                            {/**BTN SideBar Close */}
                            <TouchableOpacity
                                onPress={() => { CloseFishinngPleseModal() }}
                                style={{ position: 'absolute', top: 20, left: 10 }}>
                                <Text style={{ color: '#fff', fontSize: 30 }}>X</Text>
                            </TouchableOpacity>

                            <TextInput
                                placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                placeholder="Fishing place..."
                                value={place}
                                onChangeText={setPlace}
                                style={{ shadowOffset: { width: 3, height: 4 }, shadowOpacity: .8, elevation: 9, marginTop: 5, marginBottom: 15, paddingLeft: 10, fontSize: 20, borderWidth: 1, borderColor: '#fff', color: '#000', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, width: 250, height: 40, }}
                            />

                            <TextInput
                                placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                placeholder="My feedback..."
                                multiline = {true}
                                value={fidback}
                                onChangeText={setFidback}
                                style={{ shadowOffset: { width: 3, height: 4 }, shadowOpacity: .8, elevation: 9, marginTop: 5, marginBottom: 15, paddingLeft: 10, fontSize: 20, borderWidth: 1, borderColor: '#fff', color: '#000', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, width: 250, height: 80, }}
                            />

                            <Calendar
                                onDayPress={day => {
                                    setSelected(day.dateString);
                                }}
                                markedDates={{
                                    [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                                }}
                            />

                            <TouchableOpacity
                                onPress={() => {
                                    handleAddDataAboutFishingPlace()
                                }}
                                style={{ shadowOffset: { width: 3, height: 4 }, shadowOpacity: .8, elevation: 9, marginTop: 20, marginBottom: 15, paddingLeft: 10, fontSize: 20, borderWidth: 1, borderColor: '#fff', color: '#000', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, width: 100, height: 40, }}>
                                <Text style={{ color: '#fff', fontSize: 30 }}>SAVE</Text>
                            </TouchableOpacity>
                        
                        </View>

                    </Modal>
                   

                </View>
        
            </ImageBackground>
      
        </View>
    );
 
};

export default ProfileScreen;