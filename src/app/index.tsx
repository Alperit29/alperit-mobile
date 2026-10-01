import VehicleCard from "@/components/VehicleCard";
import { useRouter } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ALPERIT</Text>

      <Text style={styles.subtitle}>Gestión de peritajes y vehículos</Text>

      <TouchableOpacity
        style={styles.botonSolicitudes}
        onPress={() => router.push("/mis-solicitudes")}
      >
        <Text style={styles.textoBotonSolicitudes}>Mis solicitudes</Text>
      </TouchableOpacity>

      <FlatList
        data={vehiculos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <VehicleCard
            imagen={item.imagen}
            marca={item.marca}
            modelo={item.modelo}
            anio={item.anio}
            kilometraje={item.kilometraje}
            onPress={() =>
              router.push({
                pathname: "/detalle",
                params: {
                  marca: item.marca,
                  modelo: item.modelo,
                  anio: item.anio.toString(),
                  kilometraje: item.kilometraje,
                },
              })
            }
          />
        )}
        style={styles.lista}
        contentContainerStyle={styles.listaContenido}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b172a",
    alignItems: "center",
    paddingTop: 60,
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
    marginBottom: 20,
  },

  botonSolicitudes: {
    backgroundColor: "#ffffff",
    width: "90%",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },

  textoBotonSolicitudes: {
    color: "#0b172a",
    fontSize: 16,
    fontWeight: "bold",
  },

  lista: {
    width: "90%",
  },

  listaContenido: {
    paddingBottom: 40,
  },
});
