import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function AccountScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Account</ThemedText>
      </ThemedView>

      <ThemedView style={styles.profileSection}>
        <View style={styles.avatar}>
          <IconSymbol size={60} name="person.circle.fill" color="#4A90E2" />
        </View>
        <ThemedText type="subtitle" style={styles.userName}>John Doe</ThemedText>
        <ThemedText style={styles.userEmail}>john.doe@example.com</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Account Information</ThemedText>
        
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <IconSymbol size={24} name="person.fill" color="#666" />
            <ThemedText style={styles.menuItemText}>Edit Profile</ThemedText>
          </View>
          <IconSymbol size={20} name="chevron.right" color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <IconSymbol size={24} name="lock.fill" color="#666" />
            <ThemedText style={styles.menuItemText}>Change Password</ThemedText>
          </View>
          <IconSymbol size={20} name="chevron.right" color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <IconSymbol size={24} name="envelope.fill" color="#666" />
            <ThemedText style={styles.menuItemText}>Email Preferences</ThemedText>
          </View>
          <IconSymbol size={20} name="chevron.right" color="#999" />
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.section}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <IconSymbol size={24} name="questionmark.circle.fill" color="#666" />
            <ThemedText style={styles.menuItemText}>Help & Support</ThemedText>
          </View>
          <IconSymbol size={20} name="chevron.right" color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <IconSymbol size={24} name="doc.text.fill" color="#666" />
            <ThemedText style={styles.menuItemText}>Terms & Conditions</ThemedText>
          </View>
          <IconSymbol size={20} name="chevron.right" color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <IconSymbol size={24} name="hand.raised.fill" color="#666" />
            <ThemedText style={styles.menuItemText}>Privacy Policy</ThemedText>
          </View>
          <IconSymbol size={20} name="chevron.right" color="#999" />
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.section}>
        <TouchableOpacity style={styles.logoutButton}>
          <IconSymbol size={24} name="arrow.right.square.fill" color="#E74C3C" />
          <ThemedText style={styles.logoutText}>Logout</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
    marginVertical: 10,
  },
  avatar: {
    marginBottom: 15,
  },
  userName: {
    marginBottom: 5,
  },
  userEmail: {
    color: '#666',
  },
  section: {
    padding: 20,
    marginVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    marginLeft: 15,
    fontSize: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  logoutText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#E74C3C',
    fontWeight: '600',
  },
});
