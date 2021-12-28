import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
  ScrollView,
  Modal,
  Pressable,
  TextInput
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

import {icons} from '../constants';
const HomeScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#318ce7" barStyle="light-content" />

          <View style={{flex: 1}}>
            <Text style={styles.hello}>Hello!</Text>
            <Text style={styles.username}>Xolani Nomayini</Text>
          </View>

          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
              style={styles.notify}
              onPress={() => navigation.navigate('Notify')}>
              <Image
                source={icons.notification}
                style={{
                  height: 20,
                  width: 20,
                }}
              />

              <View style={styles.badge}></View>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            height: 120,
            borderRadius: 10,
            backgroundColor: '#fff',
            marginTop: 30,
            padding: 2,
            margin: 6,
          }}>
          <TouchableOpacity>
            <Image
              source={icons.lightblue}
              style={{
                height: 65,
                width: 60,
                marginHorizontal: 25,
                marginVertical: 20,
              }}
            />

            <View style={styles.simdetails}>
              <View>
                <Text style={{color: '#318ce7', fontSize: 14, marginBottom: 2}}>
                  <Text style={{color: '#333', fontSize: 16}}>Phone:</Text> +27
                  67 033 8405
                </Text>

                <Text style={{color: '#318ce7', fontSize: 14, marginBottom: 2}}>
                  <Text style={{color: '#333', fontSize: 16}}>
                    Remaining data :
                  </Text>{' '}
                  15.35GB
                </Text>

                <Text style={{color: '#318ce7', fontSize: 14, marginBottom: 2}}>
                  <Text style={{color: '#333', fontSize: 16}}>Devices:</Text> 0
                  Devices connected
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 22,
            marginHorizontal: 10,
            paddingTop: 15,
            color: '#000',
          }}>
          Features
        </Text>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginHorizontal: 30,
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('DataTransfer')}>
            <Image
              source={icons.transfer}
              style={{
                height: 40,
                width: 40,
                marginVertical: 20,
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                marginVertical: -18,
                marginHorizontal: -10,
              }}>
              Data transfer
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Connected')}>
            <Image
              source={icons.connected}
              style={{
                height: 40,
                width: 40,
                marginVertical: 20,
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                marginVertical: -18,
                marginHorizontal: -10,
              }}>
              connected
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <View style={styles.action}>
            <Image
              source={icons.voucher}
              style={{
                marginVertical: 18,
                marginHorizontal: 18,
                width: 20,
                height: 20,
              }}
            />

            <TextInput
              placeholder="2582 8228 5818 7862"
              style={styles.textInput}
              keyboardType="numeric"
              autoCapitalize="none"
            />
          </View>
          <Text 
          style={{
            textAlign: 'center', marginTop: 2, marginBottom: 5
          }}
          >USE EASYLOAD VOUCHER ONLY</Text>


<TouchableOpacity style={styles.dataTransfer}>
            <LinearGradient
              colors={['#318ce7', '#318ce7']}
              style={styles.dataTransfer}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Deposit
              </Text>
            </LinearGradient>
          </TouchableOpacity>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Feather 
                   name="x"
                   color="#6e7f80"
                   size={25}

                   style={{
                    marginVertical: 14, 
                    textAlign: 'center'
                  }}
               />
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable onPress={() => setModalVisible(true)}>
              <Image
                source={icons.deposit}
                style={{
                  height: 40,
                  width: 40,
                  marginVertical: 20,
                  borderRadius: 10,
                }}
              />
              <Text
                style={{
                  marginVertical: -18,
                  marginHorizontal: -7,
                }}>
                Recharge
              </Text>
            </Pressable>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: -20,
    padding: 2,
  },

  hello: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#318ce7',
    paddingLeft: 5,
  },

  username: {
    fontSize: 16,
    paddingLeft: 5,
    color: '#000',
  },

  notify: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  badge: {
    position: 'absolute',
    top: 2,
    right: 2,
    height: 10,
    width: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },

  simdetails: {
    position: 'absolute',
    top: 20,
    marginHorizontal: 100,
    width: 200,
  },

  devices: {
    color: '#000',
  },
  contentContainer: {
    paddingVertical: 20,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    height: 250,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
  },
  buttonClose: {
    backgroundColor: '#fff',
    borderColor: '#fff'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    width: '90%',
    marginHorizontal: 15
  },
  textInput: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  dataTransfer: {
    width: '95%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 6
  },
});
