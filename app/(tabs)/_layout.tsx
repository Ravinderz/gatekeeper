import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: 'Home' }} />
            <Tabs.Screen name="add" options={{ title: 'Add' }}  />
            <Tabs.Screen name="history" options={{ title: 'History' }}  />
            <Tabs.Screen name="settings" options={{ title: 'Settings' }}  />
        </Tabs>
    );
}