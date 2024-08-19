import React from 'react';
import Routes from './src/routes/route.js'
import AuthProvider from "./src/contexts/auth"
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#000000' barStyle="light-content"/>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}