// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { useNavigation, NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ChatRoom from './ChatRoom';
// import HomeScreen from './Home';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Chat" component={ChatRoom} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }




import React from 'react';
import {SafeAreaView} from 'react-native';

// import Weavy

import styles from './weavy/weavy-styles';
import UserProvider from './weavy/weavy-user-provider';
import ConnectionProvider from './weavy/weavy-connection-provider';
import WeavyNav from './navigation/weavy-nav';

const App = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <UserProvider>
        <ConnectionProvider>
          <WeavyNav />
        </ConnectionProvider>
      </UserProvider>
    </SafeAreaView>
  );
};

export default App;