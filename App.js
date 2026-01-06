import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native'; // On importe Button

import DashboardScreen from './src/screens/DashboardScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen'; // Import du profil

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
            headerLeft: null, // Pas de retour arrière vers login
            // On ajoute un bouton à droite pour aller au profil
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
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}