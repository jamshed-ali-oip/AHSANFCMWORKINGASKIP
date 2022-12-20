import { StyleSheet, Text, View,TouchableOpacity,Image,Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { profileImage, ProfilePictureSet, UserDetail } from '../../redux/actions/user.action';
import { useDispatch, useSelector } from 'react-redux';
import { ImagePicker, launchImageLibrary } from 'react-native-image-picker';
import { base_URL_IMAGE } from '../../config/config';
import { stat } from 'fs';
const { height, width } = Dimensions.get('window');

const ProfileImage = () => {
  const [pic,setpic]=useState()
  const userId = useSelector((state) => state?.auth?.credential?.User?._id)
  const [detail, setDetail] = useState()
  const Picture =useSelector((state)=>state?.auth?.Tasweer?.data)
   const dispatch=useDispatch()
   useEffect(() => {

    UserInfo()

  }, [Picture,pic])
  const UserInfo = async () => {
    const {data}  = await UserDetail(userId)
    setDetail(data?.User)

  }
// console.log("profiledata",detail?.photo)
   useEffect(()=>{
    var body={
      photo:Picture
    }
    if(body?.photo){
      dispatch(ProfilePictureSet(userId,body))
    }
   },[Picture,pic])

  //  const Picture =useSelector((state)=>state?.auth?.Tasweer?.data)
   console.log("tasweer  dpp ",Picture)
    const onFromPickerImage = () => {
        var options = {
          title: 'Select Avatar',
          storageOptions: {
            skipBackup: true,
            path: 'images'
          }
        };
        launchImageLibrary(options, (response) => {
    
          if (response) {
            dispatch(profileImage(response.assets?.[0]||null))
            // console.log("datadtadtatta", response)
            setpic(response.assets)
          }
        });
      }
    
    return (

    <View style={styles.profile}>
            <TouchableOpacity
              onPress={() =>onFromPickerImage()}
            >
              <Image
                style={{
                  height: height * 0.11,
                  width: width * 0.2,
                  resizeMode: 'contain',
                  borderRadius: width * 0.5,
                  alignSelf: 'center',
                }}
                source={{ uri:Picture!==undefined?`${base_URL_IMAGE+Picture}`:`${base_URL_IMAGE+detail?.photo}`}}
                // source={{ uri: Picture?`${base_URL_IMAGE+Picture}`:"https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"}}
              />
            </TouchableOpacity>
          </View>
  )
}

export default ProfileImage

const styles = StyleSheet.create({ profile: {
    backgroundColor: Colors.whitetext,
    height: height * 0.12,
    width: width * 0.22,
    alignSelf: 'center',
    borderRadius: width * 0.8,
    marginTop: -height * 0.05,
    elevation: 5,
    justifyContent: 'center',
  },})