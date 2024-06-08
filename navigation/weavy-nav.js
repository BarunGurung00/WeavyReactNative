import React, {useContext, useState} from 'react';
import {Icon} from 'react-native-elements';

// import Weavy
import Chat from '../screens/weavy-chat';
import LoginScreen from '../screens/weavy-login';
import {generateToken} from '../weavy/weavy-service';
import UserContext from '../weavy/weavy-user-context';
import ConnectionContext from '../weavy/weavy-connection-context';
import {API_URL} from '../weavy/weavy-constants';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const WeavyNav = props => {
  const {weavyLogin, weavyUser} = useContext(UserContext);
  const {connect, notificationCount} = useContext(ConnectionContext);
  const [path, setPath] = useState('');

  const Tab = createBottomTabNavigator();

  async function weavyAuth(user) {
    var token = await generateToken(user);
    if (!token) {
      return;
    }
    fetch(API_URL + '/dropin/client/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(res => res.json())
      .then(user => {
        connect(token);
        weavyLogin(user);
        setPath('/dropin/messenger?' + user.id);
      })
      .catch(console.error); 
  }

  var users = {
    dave: {
      sub: 'dave',
      email: 'daveweavy@email.com',
      name: 'Dave Weavy',
    },
    nick: {
      sub: 'nick',
      email: 'nickweavy@email.com',
      name: 'Nick Weavy'
    }
  };

  function loginWeavy(user) {
    user
      ? weavyAuth(user)
      : console.log('nouser');
  }

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Chat') {
                iconName = focused ? 'chat' : 'chat-bubble';
              } else if (route.name === 'Account') {
                iconName = focused ? 'login' : 'logout';
              }
              // You can return any component that you like here!
              return <Icon name={iconName} type="material" color={color} />;
            },
            tabBarActiveTintColor: '#156B93',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen
            name="Chat"
            children={() => <Chat path={path} />}
            options={{
              tabBarBadge: notificationCount > 0 ? notificationCount : null,
            }}
          />
          <Tab.Screen
            name="Account"
            children={() => <LoginScreen loginWeavy={loginWeavy} />}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default WeavyNav;