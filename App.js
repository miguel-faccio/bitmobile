import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home'; // Tela inicial
import Page1 from './screens/amor'; // Outras telas
import Page2 from './screens/memoria';
import Page3 from './screens/quiz.js'; // Outras telas
import Page4 from './screens/velha.js'; // Outras telas


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home"
        screenOptions={{
          headerShown: false, // Remove o cabeçalho em todas as telas
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ title: 'BitTales' }} />
        <Stack.Screen name="Page1" component={Page1} options={{ title: 'Página 1' }} />
        <Stack.Screen name="Page2" component={Page2} options={{ title: 'Página 2' }} />
        <Stack.Screen name="Page3" component={Page3} options={{ title: 'Página 3' }} />
        <Stack.Screen name="Page4" component={Page4} options={{ title: 'Página 4' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
