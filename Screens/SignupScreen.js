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
import {icons} from '../constants';

const SignUp = ({navigation}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
   
    <View style={styles.container}>     
      <StatusBar backgroundColor="#318ce7"  />
      <View style={styles.header}>
        <Text style={styles.text_header}>Create Account</Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>

        <View style={styles.action}>
          <Feather name="user" color="#6e7f80" size={15} 
           style={{
            marginVertical: 14,   
          }}
          />
          <TextInput
            placeholder="Full Name"
            style={styles.textInput}
            autoCapitalize="none"
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              width: 60,
              height: 50,
              marginHorizontal: 5,
              borderBottomColor: '#f2f2f2',
              borderBottomWidth: 1,
              flexDirection: 'row',
            }}>
            <View style={{justifyContent: 'center',  marginRight: 5}}>
              <Image
                source={icons.southafrica}
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </View>
          
            <View style={{justifyContent: 'center', marginLeft: 3}}>
              <Text
               >
                +27
              </Text>
            </View>
          </TouchableOpacity>
          <TextInput
           placeholder="67 7654 321"
           style={styles.textInput}
           keyboardType = 'numeric'
           autoCapitalize="none"
            style={{
              flex: 1,
              borderBottomColor: '#f2f2f2',
              borderBottomWidth: 1,
              color: '#000',
              fontSize: 15,
            }}
          />
        </View>


        <View style={styles.action}>
        <Feather name="mail" color="#6e7f80" size={15} 
           style={{
            marginVertical: 14,   
          }}
          />
          <TextInput
             placeholder="Email Address"
            style={styles.textInput}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.action}>
          <Feather name="unlock" color="#6e7f80" size={15} 
           style={{
            marginVertical: 14,   
          }}
          />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 0,
              bottom: 10,
              height: 30,
              width: 30,
            }}
            onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? icons.eyeclose : icons.eye}
              style={{
                height: 20,
                width: 20,
              }}
            />
          </TouchableOpacity>
        </View>

        <Animatable.View animation="fadeInRight" duration={600}>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => navigation.navigate('Home')}>
              <LinearGradient
                colors={['#318ce7', '#318ce7']}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                        
                      color: '#fff',
                    },
                  ]}>
                  Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('SignIn')}
              style={[
                styles.signIn,
                {
                  borderColor: '#318ce7',
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#318ce7',
                  },
                ]}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#318ce7',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  footer: {
    flex: 4.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  textInput: {
    flex: 1,
    paddingLeft: 15,
    color: '#000',
    fontSize: 15,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
