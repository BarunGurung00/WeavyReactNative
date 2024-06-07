import React from 'react';
import {View} from 'react-native';
import WeavyWebView from './weavy-webview';
import styles from './weavy-styles';

const Chat = props => {
  return (
    <View style={styles.weavy}>
      <WeavyWebView path={props.path} />
    </View>
  );
};

export default Chat;