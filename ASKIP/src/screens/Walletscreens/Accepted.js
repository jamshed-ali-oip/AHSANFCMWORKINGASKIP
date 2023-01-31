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
  Touchable
} from 'react-native'
import React,{useState} from 'react'
const { height, width } = Dimensions.get('window');
const Accepted = ({ setscreen }) => {
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
        <View
              style={{ flexDirection: "row" }}
            >
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
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: height * 0.012,
            paddingHorizontal: width * 0.022
          }}
        >
          <TouchableOpacity
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
          <TouchableOpacity
            style={styles.reject}
          >
            <Text
              style={styles.btn}
            >
             J’annule
            </Text>
          </TouchableOpacity>


        </View>
      </View>
    )
  }

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
          source={require("../../assets/images/incoming.png")}
        />
          <FlatList
                data={Array2}
                renderItem={Appointments}
                keyExtractor={item => item.id}
                scrollEnabled={true}
                // showsVerticalScrollIndicator={true}
                style={{ marginBottom: height * 0.0754 }}
              />
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Accepted

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