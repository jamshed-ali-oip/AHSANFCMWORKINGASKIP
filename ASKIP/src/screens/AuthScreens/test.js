<>
{/* // pending code  */}
<View style={styles.selectedView}>
<View style={styles.insideViewheading}>
  <Text style={[styles.mainheading2, { color: 'white' }]}>
    révélateur t’invite à un événement ! {' '}
  </Text>
</View>
<Text style={[styles.flatlistheading2, { color: '#ffbc15' }]}>
  Nom de l’événement - Lieu
</Text>
<View
  style={{ flexDirection: 'row', marginBottom: height * 0.015 }}>
  <Text style={[styles.flatlistdescription2, { color: 'white' }]}>
    Catégorie de l’événement
  </Text>
  <Text
    style={[
      styles.flatlistdate2,
      { color: '#ffbc15', fontFamily: 'Bebas Neue Pro Regular' },
    ]}>
    Lun 23 Septembre{' '}
  </Text>
</View>
<View style={{ flexDirection: 'row' }}>
  <TouchableOpacity
    onPress={() => MESDATA()}
    style={styles.yellowViewselected}>
    <Text style={styles.yellowText}>Je consulte la fiche </Text>
  </TouchableOpacity>
  <TouchableOpacity
    onPress={() => setModalVisible(true)}
    style={[
      styles.acceptViewselected,
      { marginLeft: width * 0.0085 },
    ]}>
    <Text style={styles.acceptText}>J’accepte</Text>
  </TouchableOpacity>
  <TouchableOpacity
    onPress={() => setModalVisible2(true)}
    style={[
      styles.rejectViewselected,
      { marginLeft: width * 0.0085 },
    ]}>
    <Text style={[styles.rejectText, { color: 'white' }]}>
      Je refuse
    </Text>
  </TouchableOpacity>
</View>
</View>

{/* // Accepting  */}
<View style={styles.simpleView}>
<View style={styles.insideViewheading}>
  <Text style={styles.mainheading2}>
    révélateur t’invite à un événement ! {' '}
  </Text>
</View>
<Text style={styles.flatlistheading2}>
  Nom de l’événement - Lieu {' '}
</Text>
<View
  style={{ flexDirection: 'row', marginBottom: height * 0.0075 }}>
  <Text style={styles.flatlistdescription2}>
    Catégorie de l’événement
  </Text>
  <Text style={styles.flatlistdate2}>Lun 23 Septembre </Text>
</View>
<View style={{ flexDirection: 'row' }}>
  <TouchableOpacity style={styles.yellowView}>
    <Text style={styles.yellowText}>Je consulte la fiche </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.acceptView}>
    <Text style={styles.acceptText}>Accepté</Text>
  </TouchableOpacity>
</View>
</View>

{/* decline */}
<View style={styles.simpleView}>
              <View style={styles.insideViewheading}>
                <Text style={styles.mainheading2}>
                  révélateur t’invite à un événement ! {' '}
                </Text>
              </View>
              <Text style={styles.flatlistheading2}>
                Nom de l’événement - Lieu {' '}
              </Text>
              <View
                style={{ flexDirection: 'row', marginBottom: height * 0.0075 }}>
                <Text style={styles.flatlistdescription2}>
                  Catégorie de l’événement
                </Text>
                <Text style={styles.flatlistdate2}>Lun 23 Septembre </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.yellowView}>
                  <Text style={styles.yellowText}>Je consulte la fiche </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rejectView}>
                  <Text style={styles.rejectText}>Refusé</Text>
                </TouchableOpacity>
              </View>
            </View>
</>