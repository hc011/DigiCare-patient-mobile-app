import { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

const useIPAddress = () => {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    NetInfo.fetch().then(state => {
      setIpAddress(state.details.ipAddress);
    });
  }, []);

  return ipAddress;
};

export default useIPAddress;
