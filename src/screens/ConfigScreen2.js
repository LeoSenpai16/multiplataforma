import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Switch, VStack, HStack, Box, Center } from 'native-base';

const ConfigScreen2 = () => {
  const [wifiEnabled, setWifiEnabled] = useState(false);
  const [usbConnected, setUsbConnected] = useState(false);
  const [otherSwitch, setOtherSwitch] = useState(false);

  return (
    <Center flex={1} px="4">
      <Box w="100%" maxW="300">
        <VStack space={6}>
          <HStack alignItems="center" justifyContent="space-between">
            <Text style={{ fontSize: 16 }}>Wi-Fi</Text>
            <Switch
              isChecked={wifiEnabled}
              onToggle={() => setWifiEnabled(!wifiEnabled)}
              colorScheme="teal"
            />
          </HStack>

          <HStack alignItems="center" justifyContent="space-between">
            <Text style={{ fontSize: 16 }}>Dispositivo USB</Text>
            <Switch
              isChecked={usbConnected}
              onToggle={() => setUsbConnected(!usbConnected)}
              colorScheme="orange"
            />
          </HStack>

          <HStack alignItems="center" justifyContent="space-between">
            <Text style={{ fontSize: 16 }}>Otro</Text>
            <Switch
              isChecked={otherSwitch}
              onToggle={() => setOtherSwitch(!otherSwitch)}
              colorScheme="indigo"
            />
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default ConfigScreen2;
