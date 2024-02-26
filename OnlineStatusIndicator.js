import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

const OnlineStatusIndicator = () => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOnline(state.isConnected);
    });

    // Initial check for online status
    NetInfo.fetch().then(state => {
      setIsOnline(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={{ position: 'absolute', top: 0, right: 0, padding: 10 }}>
      <Text style={{ color: isOnline ? 'green' : 'red' }}>{isOnline ? 'Online' : 'Offline'}</Text>
    </View>
  );
};

export default OnlineStatusIndicator;
