import React from "react";
import { Box, Button, useColorMode, Text } from "native-base";

const SettingsScreen = () => {
  const { colorMode, toggleColorMode } = useColorMode(); // Manejo del modo oscuro/claro

  return (
    <Box flex={1} alignItems="center" justifyContent="center" 
      bg={colorMode === "dark" ? "gray.800" : "gray.200"} w="100%">
      <Text fontSize="lg" color={colorMode === "dark" ? "white" : "black"}>
        {colorMode === "dark" ? "Modo Oscuro" : "Modo Claro"}
      </Text>
      <Button mt={4} onPress={toggleColorMode}>
        Cambiar Modo
      </Button>
    </Box>
  );
};

export default SettingsScreen;
