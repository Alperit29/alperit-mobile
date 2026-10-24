import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Vehículos" }} />
      <Tabs.Screen
        name="mis-solicitudes"
        options={{ title: "Mis solicitudes" }}
      />
    </Tabs>
  );
}
