import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulation simple : on vérifie juste que les champs ne sont pas vides
    if (email.length > 0 && password.length > 0) {
      // navigation.replace permet d'aller au Dashboard sans pouvoir revenir en arrière (bouton retour)
      navigation.replace('Dashboard');
    } else {
      Alert.alert('Erreur', 'Veuillez entrer un email et un mot de passe.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Tu pourras mettre ton logo ici plus tard */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>🎓</Text>
        <Text style={styles.title}>MyFormation</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email étudiant"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#666"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.footerText}>Projet React Native - 2026</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A90E2', // Bleu académique
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logoText: {
    fontSize: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  inputContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    elevation: 5,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2c3e50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.7)',
    marginTop: 30,
  }
});