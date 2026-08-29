import { View, Text, StyleSheet, ScrollView } from "react-native";
import VehicleCard from "@/components/VehicleCard";

const vehiculos = [
  {
    id: 1,
    imagen: require("../../assets/corolla.jpg"),
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2023,
    kilometraje: "32.000 km",
  },
  {
    id: 2,
    imagen: require("../../assets/hilux.jpg"),
    marca: "Toyota",
    modelo: "Hilux",
    anio: 2022,
    kilometraje: "48.000 km",
  },
  {
    id: 3,
    imagen: require("../../assets/yaris.jpg"),
    marca: "Toyota",
    modelo: "Yaris",
    anio: 2024,
    kilometraje: "18.500 km",
  },
  {
    id: 4,
    imagen: require("../../assets/sw4.jpg"),
    marca: "Toyota",
    modelo: "SW4",
    anio: 2021,
    kilometraje: "61.000 km",
  },
];

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={true}
    >
      <Text style={styles.title}>ALPERIT</Text>

      <Text style={styles.subtitle}>Gestión de peritajes y vehículos</Text>

      <View style={styles.lista}>
        {vehiculos.map((vehiculo) => (
          <VehicleCard
            key={vehiculo.id}
            imagen={vehiculo.imagen}
            marca={vehiculo.marca}
            modelo={vehiculo.modelo}
            anio={vehiculo.anio}
            kilometraje={vehiculo.kilometraje}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#0b172a",
  },

  container: {
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 40,
  },

  title: {
    color: "#ffffff",
    fontSize: 42,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#ffffff",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 30,
  },

  lista: {
    width: "90%",
  },
});
