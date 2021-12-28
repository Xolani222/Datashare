/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './navigation/tabs';
import { SignIn,
         SignUp,
         TransferScreen,
         ConnenctedScreen,
         NotificationScreen
   } from './Screens';



const Stack = createStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
     <Stack.Navigator
   screenOptions={{
    headerShown: false
  }}
     initialRouteName={'Signup'}
     >
       <Stack.Screen name="SignUp" component={SignUp} />
       <Stack.Screen name="SignIn" component={SignIn} />
       <Stack.Screen  name="Home" component={Tabs}  />
       <Stack.Screen name="DataTransfer" component={TransferScreen} />
       <Stack.Screen name="Connected" component={ConnenctedScreen} />  
       <Stack.Screen name="Notify" component={NotificationScreen} />
       
     </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;
