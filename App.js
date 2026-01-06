import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';

import DashboardScreen from './src/screens/DashboardScreen';
import DetailScreen from './src/screens/DetailScreen'; // <--- NOUVEL IMPORT
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          options={({ navigation }) => ({
            title: 'Tableau de bord',
            headerLeft: null,
            headerRight: () => (
              <Button 
                onPress={() => navigation.navigate('Profile')} 
                title="Profil" 
                color="#4A90E2"
              />
            ),
          })} 
        />

        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ title: 'Mon Profil' }} 
        />

        {/* NOUVELLE ROUTE */}
        <Stack.Screen 
          name="Details" 
          component={DetailScreen} 
          options={{ title: 'Détails de la formation' }} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}