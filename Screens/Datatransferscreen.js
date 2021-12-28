import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import {icons, images} from '../constants';

const DataTransferScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
       <ScrollView contentContainerStyle={styles.contentContainer}>

      <StatusBar backgroundColor="#318ce7" barStyle="light-content" />
      <Animatable.View animation="fadeInDownBig" style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Feather name="chevron-left" color="#fff" size={25} style={{}} />
        </TouchableOpacity>

        <View>
          <Image
            source={icons.circle}
            style={{
              marginVertical: 50,
              marginHorizontal: 18,
              width: 80,
              height: 80,
            }}
          />
          <View style={styles.remaining}>
            <Text style={{color: '#fff', fontSize: 14, fontWeight: 'bold'}}>
              Remaining data bundles:
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 16,
              }}>
              15.35GB
            </Text>
          </View>
        </View>
      </Animatable.View>

      <Animatable.View animation="fadeInUpBig">
        <View style={styles.button}>
          <View style={styles.action}>
            <Image
              source={icons.data}
              style={{
                marginVertical: 18,
                marginHorizontal: 18,
                width: 20,
                height: 20,
              }}
            />

            <TextInput
              placeholder="Enter amount of data"
              style={styles.textInput}
              keyboardType="numeric"
              autoCapitalize="none"
            />
          </View>
          <Text
            style={{
              fontSize: 10,
              marginVertical: 3,
            }}>
            MINIMUM TRANSFER 1.024GB
          </Text>

          <View style={styles.action}>
            <Image
              source={icons.phone}
              style={{
                marginVertical: 18,
                marginHorizontal: 18,
                width: 20,
                height: 20,
              }}
            />
            <TextInput
              placeholder="Enter phone e.g 067 765 4321"
              style={styles.textInput}
              keyboardType="numeric"
              autoCapitalize="none"
            />
          </View>

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
                TRANSFER
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
      </ScrollView>
    </View>
  );
};

export default DataTransferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  footer: {
    height: 250,
    backgroundColor: '#318ce7',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    width: '90%'
  },

  textInput: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  button: {
    alignItems: 'center',
    marginTop: 20,
  },
  dataTransfer: {
    width: '95%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  remaining: {
    position: 'absolute',
    top: 60,
    marginHorizontal: 120,
    width: 200,
  },
});
