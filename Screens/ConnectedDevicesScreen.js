import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import {icons, images} from '../constants';

const ConnenctedScreen = ({navigation
}) => {
    return (
        <View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Feather name="chevron-left"color="#000" size={25}
          style={{
              marginHorizontal: 5,
              marginVertical: 10
              }} />
      </TouchableOpacity>
      <Text style={{
         marginHorizontal: '35%',
         marginVertical: 10,
         width: '100%'
      }}>
          No devices connected.
      </Text>
    </View>
    )
}

export default  ConnenctedScreen;