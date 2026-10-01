import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DetalleScreen() {
  const router = useRouter();

  const { marca, modelo, anio, kilometraje } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalle del vehículo</Text>

      <View style={styles.card}>
        <Text style={styles.nombre}>
          {marca} {modelo}
        </Text>

        <Text style={styles.detalle}>Año: {anio}</Text>
        <Text style={styles.detalle}>Kilometraje: {kilometraje}</Text>
      </View>

      <TouchableOpacity
        style={styles.boton}
        onPress={() =>
          router.push({
            pathname: "/solicitud",
            params: {
              marca: marca,
              modelo: modelo,
              anio: anio,
            },
          })
        }
      >
        <Text style={styles.textoBoton}>Solicitar peritaje</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botonVolver}
        onPress={() => router.back()}
      >
        <Text style={styles.textoVolver}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b172a",
    padding: 25,
    paddingTop: 70,
  },

  titulo: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 20,
  },

  nombre: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0b172a",
    marginBottom: 20,
  },

  detalle: {
    fontSize: 17,
    color: "#475569",
    marginBottom: 10,
  },

  boton: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
    alignItems: "center",
  },

  textoBoton: {
    color: "#0b172a",
    fontSize: 16,
    fontWeight: "bold",
  },

  botonVolver: {
    padding: 15,
    alignItems: "center",
    marginTop: 10,
  },

  textoVolver: {
    color: "#ffffff",
    fontSize: 16,
  },
});
