
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Modal,
  Pressable,
  Touchable,
  ScrollView
} from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet';
import React, { useState, useRef } from 'react'
const { height, width } = Dimensions.get('window');
const Rejected = ({ setscreen }) => {
  const [test, settest] = useState(true)
  const [locat, setlocat] = useState(true)
  const [modalVisible, setModalVisible] = useState(false);
  const [submit, setsubmit] = useState(false);

  const Array2 = [
    {
      _id: 1,
      name: "Mes RDV à venir"
    },
    {
      _id: 2,
      name: "Mes RDV passés"
    },
    {
      _id: 3,
      name: "Mes RDV annulés"
    },
    {
      _id: 4,
      name: "Mes RDV annulés"
    },

  ]
  const Appointments = () => {
    return (
      <View
        style={styles.appointments}
      >
        <Text
          style={styles.appointmentHeader}
        >
          {/* uppercase main karna hai jab api lagaonga  */}
          Révélateur te propose un rendez-vous !
        </Text>
        <View
          style={{ flexDirection: "row" }}
        >
          <View
            style={styles.doccont}
          >
            <View  style={{ flexDirection: "row" }}>
            <Text
              style={styles.eventname}
            >
              Objet du rendez-vous
            </Text>
            <Image
                style={{
                  resizeMode: "contain",
                  marginLeft: width * 0.012,
                  height: height * 0.022,
                  width: width * 0.05
                }}
                source={
                  locat == false ?
                    require("../../assets/images/oflinepoint.png") :
                    require("../../assets/images/onlinepoint.png")

                } />
            </View>
         
              <Text
                style={styles.location}
              >
                34 Rue Decomberousse, 69000 LYON
              </Text>
              {/* <Image
                style={{
                  resizeMode: "contain",
                  marginLeft: width * 0.012,
                  height: height * 0.022,
                  width: width * 0.05
                }}
                source={
                  locat == false ?
                    require("../../assets/images/oflinepoint.png") :
                    require("../../assets/images/onlinepoint.png")

                } /> */}
        
          </View>
          <View
            style={styles.dateCOntainer}
          >
            <Text
              style={styles.date}
            >
              Lun September
            </Text>
            <Text
              style={styles.date}
            >
              à 14h00
            </Text>
          </View>
        </View>
        <View
          style={{
            // flexDirection: "row",
            justifyContent: "space-around",
            marginTop: height * 0.012,
            paddingHorizontal: width * 0.055
          }}
        >
          <TouchableOpacity
          onPress={()=>refRBSheet2.current.open()}
            style={styles.consult}
          >
            <Text
              style={styles.btn2}
            >
              Plus d’infos
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.accept}
          >

            <Text
              style={styles.btn}
            >
              J’accepte
            </Text>
          </TouchableOpacity> */}
          {/* <TouchableOpacity
          default={true}
            style={styles.reject}
          >
            <Text
              style={styles.btn}
            >
             J’annule
            </Text>
          </TouchableOpacity> */}


        </View>
      </View>
    )
  }
  const RawBottomSheet = () => {
    return (
      <>
        <Text
          style={{
            color: "#ffffff",
            marginLeft:width*0.05,
            // textAlign: "center",
            fontFamily: "Bebas Neue Pro Bold",
            fontSize: width * 0.055,
          }}
        >Révélateur te propose un rendez-vous !</Text>
        <View
          style={{ flexDirection: 'row', alignSelf: "center", marginTop: height * 0.02 }}
        >
          <View style={{ width: width * 0.65 }} >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "Bebas Neue Pro Bold",
                  color: "#ffa913",
                  fontSize: width * 0.045
                }}
              >Objet du rendez-vous</Text>
              <Image
                style={{ resizeMode: "contain", marginLeft: width * 0.01 }}
                source={require("../../assets/images/oflinepoint.png")} />
            </View>
            <Text
              style={{
                fontFamily: "bebas-neue-pro-regular",
                color: "#ffffff",
                fontSize: width * 0.042,
              }}
            >Enligne</Text>
          </View >
          <View  >
            <Text
              style={{
                fontFamily: "bebas-neue-pro-regular",
                color: "#bf9423",
                fontSize: width * 0.042,
              }}
            >Lun 23 September</Text>
            <Text
              style={{
                fontFamily: "bebas-neue-pro-regular",
                color: "#bf9423",
                fontSize: width * 0.042,
              }}
            >a 14h00</Text>
          </View >
        </View>
        <ScrollView
          style={{ height: height * 0.25 }}
        >
          <Text
            style={{
              fontFamily: "bebas-neue-pro-regular",
              color: "#ffffff",
              fontSize: width * 0.04,
              textAlign: "justify",
              width: width * 0.9,
              alignSelf: "center",
              marginTop: height * 0.015
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras vel facilisis nunc. Nulla quis eros aliquet, condimentum erat quis, tincidunt ante.
            Vivamus faucibus vitae urna ut pellentesque. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Ut convallis eleifend nibh.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras vel facilisis nunc. Nulla quis eros aliquet, condimentum erat quis, tincidunt ante.
            Vivamus faucibus vitae urna ut pellentesque. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Ut convallis eleifend nibh.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras vel facilisis nunc. Nulla quis eros aliquet, condimentum erat quis, tincidunt ante.
            Vivamus faucibus vitae urna ut pellentesque. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Ut convallis eleifend nibh.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras vel facilisis nunc. Nulla quis eros aliquet, condimentum erat quis, tincidunt ante.
            Vivamus faucibus vitae urna ut pellentesque. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Ut convallis eleifend nibh.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras vel facilisis nunc. Nulla quis eros aliquet, condimentum erat quis, tincidunt ante.
            Vivamus faucibus vitae urna ut pellentesque. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Ut convallis eleifend nibh.
            senectus et netus et malesuada fames ac turpis egestas. Ut convallis eleifend nibh.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras vel facilisis nunc. Nulla quis eros aliquet, condimentum erat quis, tincidunt ante.
            Vivamus faucibus vitae urna ut pellentesque. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Ut convallis eleifend nibh.
          </Text>
        </ScrollView>
        <View style={{
          flexDirection: "row",
          height: height * 0.065,
          // backgroundColor: "yellow",
          justifyContent: "space-around",
          paddingHorizontal: width * 0.095
        }}>
          {/* <TouchableOpacity
            style={{
              backgroundColor: "#00b453",
              height: height * 0.038,
              width: width * 0.23,
              borderRadius: width * 0.035,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                fontFamily: "Bebas Neue Pro Bold",
                fontSize: width * 0.034
              }}
            >
              J’accepte
            </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={{
              borderWidth: 1,
              height: height * 0.039,
              width: width * 0.45,
              borderRadius: width * 0.035,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "#ffffff",
              marginTop:height * 0.01
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                fontFamily: "Bebas Neue Pro Bold",
                fontSize: width * 0.034
              }}
            >
             J’accepte finalement ce RDV
            </Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
  const refRBSheet2 = useRef();
  return (
    <SafeAreaView>
      <ImageBackground
        style={{
          height: height
        }}
        source={require("../../assets/images/rbbg2.png")}
      >
        <TouchableOpacity
          style=
          {{ marginTop: height * 0.045, marginLeft: width * 0.03 }}
          onPress={() => setscreen(0)}
        >
          <Image
            style={{
              height: height * 0.045,
              width: width * 0.1,
              resizeMode: "contain"
            }}
            source={require("../../assets/images/prev.png")}
          />
        </TouchableOpacity>
        <Image
          style={{
            height: height * 0.049, width: width * 0.7, resizeMode: "contain"
          }}
          source={require("../../assets/images/rejected.png")}
        />
          <FlatList
                data={Array2}
                renderItem={Appointments}
                keyExtractor={item => item.id}
                scrollEnabled={true}
                // showsVerticalScrollIndicator={true}
                style={{ marginBottom: height * 0.0754 }}
              />
               <View>
          <RBSheet
            ref={refRBSheet2}
            height={height * 0.65}
            closeOnDragDown={true}
            closeOnPressMask={false}
            // dragFromTopOnly={false}

            customStyles={{
              wrapper: {
                backgroundColor: 'transparent',
              },
              draggableIcon: {
                backgroundColor: 'transparent',
                paddingHorizontal: 25,
              },
              container: {
                borderTopLeftRadius: width * 0.08,
                borderTopRightRadius: width * 0.08,
                // position:'absolute',
                backgroundColor: '#081a4f',
              },
            }}>
            <RawBottomSheet />
            {/* <View><Text>home</Text></View> */}
          </RBSheet>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Rejected

const styles = StyleSheet.create({
  appointments: {
    height: height * 0.22,
    backgroundColor: "#ffffff",
    width: width * 0.85,
    margin: width * 0.018,
    alignSelf: "center",
    borderRadius: width * 0.059,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    
    elevation: 23,
  },
  appointmentHeader: {
    color: "#081a4f",
    fontFamily: "Bebas Neue Pro Bold",
    fontSize: width * 0.05,
    margin: width * 0.045,
    marginLeft: width * 0.05
  },
  eventname: {
    fontFamily: "Bebas Neue Pro Bold",
    color: "#ffa913",
    fontSize: width * 0.045,

  },
  location: {
    fontFamily: "bebas-neue-pro-regular",
    color: "#081a4f",
    fontSize: width * 0.042,
    marginLeft: -width * 0.003

  },
  date: {
    fontFamily: "bebas-neue-pro-regular",
    color: "#ffa913",
    fontSize: width * 0.042,
  },
  dateCOntainer: {
    paddingLeft: width * 0.03,
    marginTop: height * 0.004
  },
  doccont: {
    // backgroundColor:"red",
    width: width * 0.6,
    paddingLeft: width * 0.05
  },
  reject: {
    borderWidth: 1,
    height: height * 0.035,
    width: width * 0.35,
    borderRadius: width * 0.035,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#081a4f"
  },
  accept: {
    backgroundColor: "#081a4f",
    height: height * 0.035,
    width: width * 0.18,
    borderRadius: width * 0.035,
    justifyContent: "center",
    alignItems: "center",

  },
  consult: {
    backgroundColor: "#fcba15",
    height: height * 0.035,
    width: width * 0.35,
    borderRadius: width * 0.035,
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    color: "#081a4f",
    fontFamily: "Bebas Neue Pro Bold",
    fontSize: width * 0.034
  },
  btn2: {
    color: "#ffffff",
    fontFamily: "Bebas Neue Pro Bold",
    fontSize: width * 0.034
  },

})