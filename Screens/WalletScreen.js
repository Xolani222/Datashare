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
  BackHandler,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import {icons, images} from '../constants';

const WalletScreen = () => {
  return (
 
      <View style={styles.container}>
        <StatusBar backgroundColor="#318ce7" barStyle="light-content" />
        <Animatable.View animation="fadeInDownBig" style={styles.footer}>
          <View>
            <Image
              source={icons.bluewallet}
              style={{
                marginVertical: 30,
                marginHorizontal: 30,
                width: 80,
                height: 80,
              }}
            />
            <View style={styles.remaining}>
              <Text style={{color: '#fff', fontSize: 14, fontWeight: 'bold'}}>
                Availabe Balance:
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginTop: 16,
                }}>
                R100.00
              </Text>
            </View>
          </View>
        </Animatable.View>

        <Animatable.View animation="fadeInUpBig">

            <Text
            style={{
                marginHorizontal: 10,
                marginVertical: 15,
                fontSize: 15
            }}
            >Transaction history</Text>
      
      </Animatable.View>
      </View>

     
 
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  footer: {
    height: 180,
    backgroundColor: '#318ce7',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
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
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  remaining: {
    position: 'absolute',
    top: 40,
    marginHorizontal: 140,
    width: 200,
  },
});
