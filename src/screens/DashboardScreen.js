import { useEffect, useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
// On importe nos fonctions magiques de base de données
import { addFormation, getFormations, initDB } from '../services/db';

export default function DashboardScreen() {
  // 1. Les variables d'état (pour stocker ce qu'on tape et la liste)
  const [formations, setFormations] = useState([]);
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');

  // 2. Ce code se lance une seule fois au démarrage de l'écran
  useEffect(() => {
    const setupData = async () => {
      try {
        await initDB(); // On s'assure que la table existe
        refreshList();  // On charge les données
      } catch (e) {
        console.error("Erreur de chargement:", e);
      }
    };
    setupData();
  }, []);

  // 3. Fonction pour récupérer les données depuis SQLite
  const refreshList = async () => {
    const data = await getFormations();
    setFormations(data); // On met à jour l'affichage
  };

  // 4. Fonction appelée quand on clique sur "Ajouter"
  const handleAdd = async () => {
    if (titre.length === 0) {
      Alert.alert("Attention", "Il faut au moins un titre !");
      return;
    }
    
    // On ajoute dans la DB (Durée est mise à "X jours" par défaut pour l'exemple)
    await addFormation(titre, description, "3 jours");
    
    // On vide les champs
    setTitre('');
    setDescription('');
    
    // On rafraîchit la liste pour voir le nouvel élément
    refreshList();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mes Formations</Text>

      {/* --- FORMULAIRE D'AJOUT --- */}
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Titre de la formation" 
          value={titre}
          onChangeText={setTitre} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Description" 
          value={description}
          onChangeText={setDescription} 
        />
        <Button title="Ajouter la formation" onPress={handleAdd} />
      </View>

      {/* --- LISTE DES DONNÉES --- */}
      <FlatList
        data={formations}
        keyExtractor={(item) => item.id.toString()} // Chaque item a un ID unique
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.titre}</Text>
            <Text>{item.description}</Text>
            <Text style={styles.cardFooter}>Durée : {item.duree}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Aucune formation pour l'instant.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', marginTop: 20 },
  inputContainer: { backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 20, elevation: 3 },
  input: { borderBottomWidth: 1, borderColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 16 },
  card: { backgroundColor: 'white', padding: 15, borderRadius: 8, marginBottom: 10, elevation: 2 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  cardFooter: { marginTop: 5, color: 'blue', fontSize: 12 },
  emptyText: { textAlign: 'center', color: '#888', fontStyle: 'italic', marginTop: 20 }
});