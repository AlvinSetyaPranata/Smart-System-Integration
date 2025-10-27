import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useState } from 'react';
import { ScrollView, StyleSheet, Switch, View } from 'react-native';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Settings</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Preferences</ThemedText>
        
        <View style={styles.settingItem}>
          <ThemedText>Enable Notifications</ThemedText>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
        </View>

        <View style={styles.settingItem}>
          <ThemedText>Dark Mode</ThemedText>
          <Switch
            value={darkModeEnabled}
            onValueChange={setDarkModeEnabled}
          />
        </View>

        <View style={styles.settingItem}>
          <ThemedText>Location Services</ThemedText>
          <Switch
            value={locationEnabled}
            onValueChange={setLocationEnabled}
          />
        </View>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">About</ThemedText>
        <View style={styles.infoItem}>
          <ThemedText>Version</ThemedText>
          <ThemedText>1.0.0</ThemedText>
        </View>
        <View style={styles.infoItem}>
          <ThemedText>Build</ThemedText>
          <ThemedText>2025.10.20</ThemedText>
        </View>
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
  section: {
    padding: 20,
    marginVertical: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
});
