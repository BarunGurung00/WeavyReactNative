import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = ({ navigation }) => {
    // const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="To Chat room"
                onPress={() => navigation.navigate('Chat')}
            />
        </View>
    );
}


export default HomeScreen;