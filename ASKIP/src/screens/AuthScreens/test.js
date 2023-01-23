      {/* {data.map(item => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: height * 0.005,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setRP(item);
                    }}>
                    <Image
                      style={{
                        resizeMode: 'contain',
                      }}
                      source={
                        RP.id == item.id
                          ? require('../../assets/images/tick.png')
                          : require('../../assets/images/round.png')
                      }
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      marginLeft: width * 0.02,
                      // fontSize: width * 0.037,
                      // fontWeight: 'bold',
                      color: 'black',
                      fontFamily:
                        RP.id == item.id
                          ? 'Bebas Neue Pro Bold'
                          : 'Bebas Neue Pro Regular',
                      fontSize: width * 0.043,
                      letterSpacing: 0.25,
                    }}>
                    {item.name}
                  </Text>
                </View>
              );
            })} */}