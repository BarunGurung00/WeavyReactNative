import React from 'react';
import { Button, View, Text } from 'react-native';
// import { useWeavy, WyMessenger } from "@weavy/uikit-react";

const ChatRoom = ({navigation}) => {
    
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is Chat room!</Text>
            {/* <WeavyComponent></WeavyComponent> */}
        </View>
    );
};

export default ChatRoom;

// function WeavyComponent() {
//   useWeavy({
//     url: "https://348d8b23a03a4fa0a9b627815f47cb32.weavy.io",
//     tokenFactory: async () => "wyu_wkLLosmsf48215HtMwp9vRqxpB6msI26glxn"
//   });

//   return <WyMessenger></WyMessenger>;
// }