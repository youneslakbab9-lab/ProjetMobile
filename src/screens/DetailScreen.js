import { Button, StyleSheet, Text, View } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  // On récupère l'objet "formation" passé en paramètre
  const { formation } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{formation.titre}</Text>
        <View style={styles.separator} />
        
        <Text style={styles.label}>Description :</Text>
        <Text style={styles.description}>{formation.description}</Text>
        
        <Text style={styles.label}>Durée :</Text>
        <Text style={styles.duree}>{formation.duree}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Retour" 
          onPress={() => navigation.goBack()} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    elevation: 4, // Ombre Android
    shadowColor: '#000', // Ombre iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    marginBottom: 20
  },
  title: { fontSize: 26, fontWeight: 'bold', color: '#2c3e50', marginBottom: 10 },
  separator: { height: 1, backgroundColor: '#eee', marginVertical: 10 },
  label: { fontSize: 16, fontWeight: 'bold', color: '#7f8c8d', marginTop: 10 },
  description: { fontSize: 18, color: '#34495e', lineHeight: 24 },
  duree: { fontSize: 18, color: '#2980b9', fontWeight: 'bold' },
  buttonContainer: { marginTop: 10 }
});