import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NativeBaseProvider } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

// Importa las pantallas
import SettingsScreen from "./src/screens/SettingsScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ConfigScreen from "./src/screens/ConfigScreen"; 
import ConfigScreen2 from "./src/screens/ConfigScreen2";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Navegador con Drawer (Menú lateral)
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerLabel: "Inicio",
          drawerIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          drawerLabel: "Detalles",
          drawerIcon: ({ color, size }) => <Ionicons name="information-circle-outline" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerLabel: "Configuraciones",
          drawerIcon: ({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Config"
        component={ConfigScreen}
        options={{
          drawerLabel: "Configuración Extra",
          drawerIcon: ({ color, size }) => <Ionicons name="cog-outline" size={size} color={color} />, 
        }}
      />
       <Drawer.Screen
        name="Config2"
        component={ConfigScreen2}
        options={{
          drawerLabel: "Configuración Extra2",
          drawerIcon: ({ color, size }) => <Ionicons name="cog-outline" size={size} color={color} />, 
        }}
      />
    </Drawer.Navigator>
  );
}

// Navegación Principal con Stack
function RootStack() {
  let isSignedIn = true;

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <DrawerNavigator />
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

// Componente principal
export default function App() {
  return (
    <NativeBaseProvider>
      <RootStack />
    </NativeBaseProvider>
  );
}
