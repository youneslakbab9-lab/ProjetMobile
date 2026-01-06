import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen({ navigation }) {
  // Remplace ces données par celles de ton groupe
  const groupMembers = [
    "Younes Lakbab",
    "Membre 2",
    "Membre 3"
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Un cercle simple pour simuler un avatar */}
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>YL</Text>
        </View>
        <Text style={styles.name}>Younes Lakbab</Text>
        <Text style={styles.role}>Chef de projet</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mon Groupe</Text>
        {groupMembers.map((member, index) => (
          <Text key={index} style={styles.memberItem}>• {member}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>À propos</Text>
        <Text style={styles.text}>
          Application de gestion de formations réalisée avec React Native et SQLite.
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.logoutButton} 
        onPress={() => navigation.replace('Login')}
      >
        <Text style={styles.logoutText}>Se déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { alignItems: 'center', marginBottom: 30, marginTop: 20 },
  avatarPlaceholder: {
    width: 100, height: 100, borderRadius: 50, backgroundColor: '#4A90E2',
    justifyContent: 'center', alignItems: 'center', marginBottom: 15
  },
  avatarText: { color: 'white', fontSize: 30, fontWeight: 'bold' },
  name: { fontSize: 24, fontWeight: 'bold' },
  role: { fontSize: 16, color: '#666' },
  section: { marginBottom: 25 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#eee', paddingBottom: 5 },
  memberItem: { fontSize: 16, marginBottom: 5, color: '#333' },
  text: { fontSize: 16, color: '#555', lineHeight: 22 },
  logoutButton: { backgroundColor: '#e74c3c', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 'auto' },
  logoutText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});