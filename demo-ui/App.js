import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { ServiceProvider } from "./context/ServiceContext";
import AppNavigation from "./navigation/AppNavigation";
import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <Provider store={store}>
          <ThemeProvider>
            <AuthProvider>
              <ServiceProvider>
              <CartProvider>
                <NavigationContainer>
                  <AppNavigation />
                </NavigationContainer>
                </CartProvider>
              </ServiceProvider>
            </AuthProvider>
          </ThemeProvider>
        </Provider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
