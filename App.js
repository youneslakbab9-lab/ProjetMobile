import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import des deux écrans
import DashboardScreen from './src/screens/DashboardScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* initialRouteName="Login" définit l'écran de démarrage */}
      <Stack.Navigator initialRouteName="Login">
        
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // On cache la barre de titre pour le Login
        />
        
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          options={{ 
            title: 'Tableau de bord',
            headerLeft: null // Empêche le retour arrière vers le login (optionnel)
          }} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}