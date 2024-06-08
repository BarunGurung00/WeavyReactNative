import React, {useState} from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from '../weavy/weavy-styles';

const LoginScreen = props => {
  const [selectedValue, setSelectedValue] = useState('dave');


  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue);
          props.loginWeavy(itemValue);
        }}>
        <Picker.Item label="Dave" value="dave" />
        <Picker.Item label="Nick" value="nick" />
      </Picker>
    </View>
  );
};

export default LoginScreen;