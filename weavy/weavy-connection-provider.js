import React from 'react';
import ConnectionContext from './weavy-connection-context';
import {HubConnectionBuilder, LogLevel} from '@microsoft/signalr';
import {useState} from 'react';
import {API_URL} from './weavy-constants';

const ConnectionProvider = props => {

  const [proxy, setProxy] = useState(null);
  const [notificationCount, setNotificationCount] = useState(null);

  async function getUnreadConversationCount(token) {
    await fetch(API_URL + '/api/conversations/badge', {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(res => res.json())
      .then(counts => {
        setNotificationCount(counts.rooms);
      })
      .catch(console.error);
  }

  const connect = token => {
    const connection = new HubConnectionBuilder()
      .configureLogging(LogLevel.None)
      .withUrl(API_URL + '/hubs/rtm', {
        accessTokenFactory: () => token,
      })
      .withAutomaticReconnect()
      .build();
    
    getUnreadConversationCount(token);

    this.isConnectionStarted = connection.start();

    connection.onclose(error =>
      console.log(this.EVENT_CLOSE, error),
    );
    connection.onreconnecting(error =>
      console.log(this.EVENT_RECONNECTING, error),
    );
    connection.onreconnected(connectionId =>
      console.log(this.EVENT_RECONNECTED, connectionId),
    );
  };

  return (
    <ConnectionContext.Provider
      value={{
        proxy,
        connect,
        notificationCount,
      }}>
      {props.children}
    </ConnectionContext.Provider>
  );
};

export default ConnectionProvider;