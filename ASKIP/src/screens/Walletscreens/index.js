
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  Dimensions,
  SafeAreaView,
  StatusBar
} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import Colors from '../../components/Colors';
const {height, width} = Dimensions.get('window');

const WalletScreens = () => {

  const userId = useSelector((state) => state?.auth?.credential?.User?._id)
 console.log("real oid",userId)
  return (
    
    <SafeAreaView
    style={styles.container}>
   
      <View
    style={styles.container}
    >
      <Image
      style={styles.coming}
      source={require("../../assets/images/comingsoon.png")}
      />      
    </View>
    </SafeAreaView>
  )
}

export default WalletScreens

const styles = StyleSheet.create({
  coming:{
    height:height*0.45,
    resizeMode:"contain"
  },
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }
})