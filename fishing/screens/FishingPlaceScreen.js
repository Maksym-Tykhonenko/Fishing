import React,{useState,useEffect} from 'react';
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
  Card
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { uid } from 'uid';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";


import { communitties } from '../data/commubities';


const FishingPlaceScreen = ({ navigation }) => {

    const [sideBarIsVisible, setSideBarIsVisible] = useState(false);
    const [modalAddPlaceIsVisible, setModalAddPlaceIsVisible] = useState(false);

    const [location, setLocation] = useState();
    const [aboutLocat, setAboutLocat] = useState('');
    const [communittie, setCommunittie] = useState('');
    const [aboutCommunit, setAboutCommunit] = useState('');
    const [servis, setServis] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [website, setWebsite] = useState('');
    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');
    const [selectPhoto, setSelectPhoto] = useState(null);

    const [newLocations, setNewLocations] = useState([]);
    console.log("new Locations2 ==>", newLocations);

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setData();
    }, [newLocations])

    const setData = async () => {
        try {
            const data = {
                newLocations
            }
            const jsonData = JSON.stringify(data);
            await AsyncStorage.setItem(`FishingPlaceScreen`, jsonData);
            console.log('Дані збережено в AsyncStorage')
        } catch (e) {
            console.log('Помилка збереження даних:', e);
        }
    };

    const getData = async () => {
        try {
            const jsonData = await AsyncStorage.getItem(`FishingPlaceScreen`);
            if (jsonData !== null) {
                const parsedData = JSON.parse(jsonData);
                console.log('parsedData==>', parsedData);
                setNewLocations(parsedData.newLocations);
        
            }
        } catch (e) {
            console.log('Помилка отримання даних:', e);
        }
    };

    const addNewLocation = () => {
        let newLocation = {
            place: location,
            aboutPlace: aboutLocat,
            communittie: communittie,
            discription: aboutCommunit,
            services: servis,
            contactName: contactPerson,
            adress: adress,
            phone: phoneNumber,
            website: website,
            email: email,
            photo: selectPhoto,
            id: uid(),
        }// ? selectPhoto.uri : null
        //console.log("new Locations1 ==>", newLocations);
        setNewLocations([...newLocations, newLocation]);

        closeModal()
    };

    const closeModal = () => {

        setLocation('')
        setAboutLocat('')
        setCommunittie('')
        setAboutCommunit('')
        setServis('')
        setContactPerson('')
        setAdress('')
        setPhoneNumber('')
        setWebsite('')
        setEmail('')
        setSelectPhoto(null)

        setModalAddPlaceIsVisible(false)
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
                setSelectPhoto(response.assets[0].uri);

            } else {
                console.log('Вибір скасовано');
            }
        });
    };

    return (
        <View style={{ flex: 1, }}>
            <ImageBackground
                style={{ flex: 1 }}
                source={require('../assets/bgr.jpg')}
            >
                <View style={{ flex: 1, position: 'relative' }}>

                    <SafeAreaView style={{ flex: 1, marginHorizontal: 10, marginTop: 35, }}>
                        <ScrollView>
                            
                            {newLocations && newLocations.map((i) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => { navigation.navigate('NewPlace', { place: i }) }}
                                        style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}
                                        key={i.id}>
                                        <Image
                                            source={{uri: i.photo}}
                                            style={{ width: '100%', height: 200 }}
                                        />
                                        <Text style={{ fontWeight: '600', fontSize: 17 }}>{i.place}</Text>
                                    </TouchableOpacity>
                                )

                            })}
                            
                            {communitties.map((i) => {
                                return (
                                    <TouchableOpacity
                                        style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}
                                        key={uid()}
                                        onPress={() => { navigation.navigate('Place', { place: i }) }}>
                                        <Image
                                            source={i.photo}
                                            style={{ width: '100%', height: 200 }}
                                        />
                                        <Text style={{ fontWeight: '600', fontSize: 17 }}>{i.place}</Text>
                                    </TouchableOpacity>
                                )
                            })}


                        </ScrollView>

                    </SafeAreaView>

                    <TouchableOpacity
                        onPress={() => setSideBarIsVisible(true)}
                        style={{ position: 'absolute', top: 30, left: 5, width: 40, height: 40, backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 5 }}>
                        <AntDesign name='bars' style={{ color: '#fff', fontSize: 35 }} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { setModalAddPlaceIsVisible(true) }}
                        style={{ position: 'absolute', top: 30, right: 5, width: 40, height: 40, backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 5 }}>
                        <Entypo name='plus' style={{ color: '#fff', fontSize: 35 }} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack()
                        }}
                        style={{ position: 'absolute', bottom: 15, right: 5, width: 40, height: 40, backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 5 }}
                    >
                        <Entypo name='reply' style={{ fontSize: 35, color: '#fff' }} />
                    </TouchableOpacity>

                    
                    {/**modal add place */}
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalAddPlaceIsVisible}
                    >

                        <View style={{ backgroundColor: '#292c33', flex: 1, marginTop: '20%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>

                            {/**BTN SideBar Close */}
                            <TouchableOpacity
                                onPress={() => { closeModal() }}
                                style={{ position: 'absolute', top: 0, left: 10, width: 40, height: 40 }}>
                                <Text style={{ color: '#fff', fontSize: 30 }}>X</Text>
                            </TouchableOpacity>

                            <View style={{ alignItems: 'center', marginTop: 20 }}>
                                <Text style={{ color: '#fff', fontSize: 27, fontWeight: '500', marginTop: 20 }}>Add new location</Text>

                                <ScrollView style={{ marginBottom: 50 }}>
                               
                                    {/**INPUT BLOCK */}
                                    <View>
                                        <TextInput
                                            placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                            placeholder="Location..."
                                            value={location}
                                            onChangeText={setLocation}
                                            style={{ shadowOffset: { width: 3, height: 4 }, shadowOpacity: .8, elevation: 9, marginTop: 5, marginBottom: 15, paddingLeft: 10, fontSize: 20, borderWidth: 1, borderColor: '#fff', color: '#000', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, width: 250, height: 40, }}
                                        />

                                        <TextInput
                                            placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                            placeholder="About this location..."
                                            multiline={true}
                                            numberOfLines={4}
                                            value={aboutLocat}
                                            onChangeText={setAboutLocat}
                                            style={{ shadowOffset: { width: 3, height: 4 }, shadowOpacity: .8, elevation: 9, marginTop: 5, marginBottom: 15, paddingLeft: 10, fontSize: 20, borderWidth: 1, borderColor: '#fff', color: '#000', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, width: 250, height: 100, }}
                                        />

                                        <TextInput
                                            placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                            placeholder="Communittie..."
                                            value={communittie}
                                            onChangeText={setCommunittie}
                                            style={{ shadowOffset: { width: 3, height: 4 }, shadowOpacity: .8, elevation: 9, marginTop: 5, marginBottom: 15, paddingLeft: 10, fontSize: 20, borderWidth: 1, borderColor: '#fff', color: '#000', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, width: 250, height: 40, }}
                                        />

                                        <TextInput
                                            placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                            placeholder="About this communittie..."
                                            multiline={true}
                                            numberOfLines={4}
                                            value={aboutCommunit}
                                            onChangeText={setAboutCommunit}
                                            style={{ shadowOffset: { width: 3, height: 4 }, shadowOpacity: .8, elevation: 9, marginTop: 5, marginBottom: 15, paddingLeft: 10, fontSize: 20, borderWidth: 1, borderColor: '#fff', color: '#000', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, width: 250, height: 100, }}
                                        />

                                        <TextInput
                                            placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                            placeholder="What services provided..."
                                            value={servis}
                                            onChangeText={setServis}
                                            style={{ shadowOffset: { width: 3, height: 4 }, shadowOpacity: .8, elevation: 9, marginTop: 5, marginBottom: 15, paddingLeft: 10, fontSize: 20, borderWidth: 1, borderColor: '#fff', color: '#000', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, width: 250, height: 40, }}
                                        />

                                        <TextInput
                                            placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                            placeholder="Contact Persone..."
                                            value={contactPerson}
                                            onChangeText={setContactPerson}
                                            style={{ shadowOffset: { width: 3, height: 4 }, shadowOpacity: .8, elevation: 9, marginTop: 5, marginBottom: 15, paddingLeft: 10, fontSize: 20, borderWidth: 1, borderColor: '#fff', color: '#000', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, width: 250, height: 40, }}
                                        />

                                        <TextInput
                                            placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                            placeholder="Adress..."
                                            value={adress}
                                            onChangeText={setAdress}
                                            style={{ shadowOffset: { width: 3, height: 4 }, shadowOpacity: .8, elevation: 9, marginTop: 5, marginBottom: 15, paddingLeft: 10, fontSize: 20, borderWidth: 1, borderColor: '#fff', color: '#000', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, width: 250, height: 40, }}
                                        />

                                        <TextInput
                                            placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                            placeholder="Phone number..."
                                            value={phoneNumber}
                                            onChangeText={setPhoneNumber}
                                            style={{ shadowOffset: { width: 3, height: 4 }, shadowOpacity: .8, elevation: 9, marginTop: 5, marginBottom: 15, paddingLeft: 10, fontSize: 20, borderWidth: 1, borderColor: '#fff', color: '#000', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, width: 250, height: 40, }}
                                        />

                                        <TextInput
                                            placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                            placeholder="Website..."
                                            value={website}
                                            onChangeText={setWebsite}
                                            style={{ shadowOffset: { width: 3, height: 4 }, shadowOpacity: .8, elevation: 9, marginTop: 5, marginBottom: 15, paddingLeft: 10, fontSize: 20, borderWidth: 1, borderColor: '#fff', color: '#000', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, width: 250, height: 40, }}
                                        />

                                        <TextInput
                                            placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                            placeholder="Email..."
                                            value={email}
                                            onChangeText={setEmail}
                                            style={{ shadowOffset: { width: 3, height: 4 }, shadowOpacity: .8, elevation: 9, marginTop: 5, marginBottom: 15, paddingLeft: 10, fontSize: 20, borderWidth: 1, borderColor: '#fff', color: '#000', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, width: 250, height: 40, }}
                                        />

                                    </View>

                                    
                                    {/**BTN add photo or Img*/}
                                    {selectPhoto ? (
                                        <Image
                                            source={{uri: selectPhoto}}
                                            style={{ width: '100%', height: 150, marginBottom: 10, borderRadius: 10 }} />
                                    ): (
                                    <View style={{ alignItems: 'center' }}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                ImagePicer()
                                            }}
                                            style={{ alignItems: 'center', justifyContent: 'center', shadowOffset: { width: 3, height: 4 }, shadowOpacity: .8, elevation: 9, marginTop: 5, marginBottom: 15, fontSize: 20, borderWidth: 1, borderColor: '#fff', color: '#000', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, width: 250, height: 40, }}
                                        >
                                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600' }}>ADD PHOTO</Text>
                                        </TouchableOpacity>
                                    </View>   
                                    )}
                                    

                                    {/**BTN add new location */}
                                    <View style={{ alignItems: 'center' }}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                if ( location === "" || aboutLocat === "" || communittie === "" || aboutCommunit === "" || servis === "" || contactPerson === "" || phoneNumber === "" || website === "" || email === "" || adress === "" ) {
                                                    alert("Please fill in all fields.")
                                                } else {
                                                    addNewLocation()
                                                }
                                                
                                            }}
                                            style={{ alignItems: 'center', justifyContent: 'center', shadowOffset: { width: 3, height: 4 }, shadowOpacity: .8, elevation: 9, marginTop: 5, marginBottom: 15, fontSize: 20, borderWidth: 1, borderColor: '#fff', color: '#000', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, width: 100, height: 40, }}
                                        >
                                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600' }}>ADD</Text>
                                        </TouchableOpacity>
                                    </View>
                                    
                                </ScrollView>
                            </View>


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

                </View>
        
            </ImageBackground>
      
        </View>
    );
 
};
export default FishingPlaceScreen;