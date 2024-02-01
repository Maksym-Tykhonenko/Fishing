import React,{useState,useRef,useEffect} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
  ScrollView,
  Animated
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const HomeScreen = ({ navigation }) => {
  

  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);
  /////////////////////////////////////
  const [loaderIsLoaded, setLoaderIsLoaded] = useState(false);
  const ChangeInView = props => {
    // const fadeAnim = useRef(new Animated.Image(require('../../acets/loader1.jpg'))).current;
    
    const fadeAnim = useRef(new Animated.Value(1)).current; // Initial value for opacity: 0 to 1
    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 6000,
        useNativeDriver: true,
      }).start();
    }, []);

    const appearingAnim = useRef(new Animated.Value(0)).current;// Initial value for opacity: 1 to 0
    useEffect(() => {
      Animated.timing(appearingAnim, {
        toValue: 1,
        duration: 6000,
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        setLoaderIsLoaded(true)
      }, 7000);

    }, []);

    return (
      <View style={{ position: 'relative', flex: 1 }}>
        <Animated.View
          //source={require('../assets/bgrStart.jpeg')}// Special animatable View
          style={{
            color: '#fde114',
            ...props.style,
            opacity: fadeAnim,
            //width: 'auto',
            height: '100%'  // Bind opacity to animated value
          }} ></Animated.View>
        <Animated.Image
          source={require('../assets/bgr.jpg')}// Special animatable View
          style={{
            ...props.style,
            opacity: appearingAnim,
            //width: '100%',
            height: '100%',
            position: 'absolute'// Bind opacity to animated value
          }} />
      </View>
    
    );
  };
  /////////////////////////////////////

  return (
    <View style={{ flex: 1, }}>

      {!loaderIsLoaded ? (
        <ChangeInView
          style={{
            width: '100%',
            //height: 50,
            backgroundColor: 'powderblue',
          }}>
       
        </ChangeInView>
      ) : (
        <ImageBackground
          style={{ flex: 1 }}
          source={require('../assets/bgr.jpg')}
        >
          <View style={{ flex: 1, position: 'relative' }}>

            <SafeAreaView style={{ marginHorizontal: 10, marginTop: 35, backgroundColor: 'rgba(128, 128, 128, 0.5)', }}>
              <ScrollView>
                <Image
                  source={require('../assets/111.webp')}
                  style={{ width: '100%', height: 200 }}
                />
                <View>

                  <View style={{ marginHorizontal: 3 }}>

                    <View style={{ marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 17 }}> Dear Fellow Anglers and Fishing </Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 17 }}> Enthusiasts!</Text>
                    </View>
                 
                    <Text style={{ fontSize: 16 }}>  Amidst the breathtaking landscapes and pristine waters that define Canada's fishing havens, we find ourselves united by a shared passion for the thrill of the catch and the vast, untamed beauty of our natural surroundings. As we embark on our fishing adventures, let us collectively champion the cause of responsible trophy fishing to ensure the preservation of our cherished waters and the legacy of angling in Canada.</Text>

                    <View>
                      <Text style={{ fontSize: 16, marginTop: 5, fontWeight: '600' }}> Embracing Conservation Ethics:</Text>
                      <Text style={{ fontSize: 16 }}> Canada boasts a wealth of diverse ecosystems, teeming with an abundance of fish species that contribute to the tapestry of our natural heritage. As stewards of these waters, it is our collective responsibility to embrace conservation ethics, ensuring that our actions today lay the groundwork for thriving fisheries in the future.</Text>
                    </View>
                  
                    <View>
                      <Text style={{ fontSize: 16, marginTop: 5, fontWeight: '600' }}>  The Sporting Challenge and Cultural Significance:</Text>
                      <Text style={{ fontSize: 16 }}> Trophy fishing in Canada is not merely about the size of the catch; it is about the sporting challenge, the pursuit of legendary fish, and the deep-rooted cultural significance of angling. It is an integral part of our heritage, connecting us to the rhythms of the wilderness and the tales of generations past.</Text>
                    </View>

                  

                    <View>
                      <Text style={{ fontSize: 16, marginTop: 5, fontWeight: '600' }}>  Advocating Sustainable Practices:</Text>
                      <Text style={{ fontSize: 16 }}> In our pursuit of trophy fishing, let us champion sustainable practices that harmonize with the delicate ecosystems we explore. Abiding by catch-and-release principles, adhering to local regulations, and respecting seasonal closures are paramount to ensuring the longevity of trophy fishing experiences in Canada.</Text>
                    </View>

                    <View>
                      <Text style={{ fontSize: 16, marginTop: 5, fontWeight: '600' }}>  Respecting Indigenous Perspectives:</Text>
                      <Text style={{ fontSize: 16 }}>Canada is home to diverse Indigenous communities with profound connections to the land and water. Let us approach trophy fishing with respect for Indigenous perspectives on conservation and sustainability. Collaborating with and learning from Indigenous communities can enrich our understanding of responsible angling practices.</Text>
                    </View>

                    <View>
                      <Text style={{ fontSize: 16, marginTop: 5, fontWeight: '600' }}>  Educating and Inspiring Future Generations:</Text>
                      <Text style={{ fontSize: 16 }}> As passionate anglers, we have the power to shape the future of trophy fishing in Canada. Let us actively engage in educating our fellow anglers and inspiring the next generation to become stewards of our aquatic ecosystems. Through education, we empower others to appreciate the delicate balance that sustains our fisheries.</Text>
                    </View>

                    <View>
                      <Text style={{ fontSize: 16, marginTop: 5, fontWeight: '600' }}>  Supporting Conservation Initiatives:</Text>
                      <Text style={{ fontSize: 16 }}> There are numerous organizations dedicated to the conservation of Canada's fisheries. Let us lend our support to these initiatives, contributing our time, resources, and advocacy to safeguard the habitats that make trophy fishing in Canada an unparalleled experience. Together, we can make a tangible difference in preserving our aquatic treasures.
                      </Text>
                    </View>

                    <View>
                      <Text style={{ fontSize: 16, marginTop: 5, fontWeight: '600' }}>  A Unified Pledge:</Text>
                      <Text style={{ fontSize: 16 }}> In casting our lines into the crystal-clear waters of Canada, let us make a unified pledge to prioritize responsible trophy fishing. By adopting sustainable practices, respecting our waters, and actively contributing to conservation efforts, we ensure that future generations can revel in the awe-inspiring beauty of Canada's lakes and rivers.</Text>
                    </View>

                    <View>
                      <Text style={{ fontSize: 16, marginTop: 5, fontWeight: '600' }}></Text>
                      <Text style={{ fontSize: 16 }}> As we embark on our fishing adventures in this vast and majestic land, let the spirit of responsible trophy fishing guide our actions, preserving the legacy of our beloved sport for generations to come.</Text>
                    </View>

                    <View>
                      <Text style={{ fontSize: 16, marginTop: 5, fontWeight: '600' }}></Text>
                      <Text style={{ fontSize: 16 }}></Text>
                    </View>
                  

                  </View>

                </View>
              </ScrollView>
            

            </SafeAreaView>

          

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
      )}

      
      
    </View>
  );
 
};

export default HomeScreen;