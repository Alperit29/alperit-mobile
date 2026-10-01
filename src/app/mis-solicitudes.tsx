import { useSolicitudesStore } from "@/store/solicitudesStore";
import { useRouter } from "expo-router";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function MisSolicitudesScreen() {
  const router = useRouter();

  const solicitudes = useSolicitudesStore((state) => state.solicitudes);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mis solicitudes</Text>

      {solicitudes.length === 0 ? (
        <View style={styles.vacio}>
          <Text style={styles.textoVacio}>
            Todavía no hay solicitudes registradas.
          </Text>
        </View>
      ) : (
        <FlatList
          data={solicitudes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.vehiculo}>
                {item.marca} {item.modelo} - {item.anio}
              </Text>

              <Text style={styles.detalle}>Cliente: {item.nombre}</Text>

              <Text style={styles.detalle}>Teléfono: {item.telefono}</Text>

              {item.observaciones ? (
                <Text style={styles.detalle}>
                  Observaciones: {item.observaciones}
                </Text>
              ) : null}

              <Text style={styles.estado}>Estado: {item.estado}</Text>
            </View>
          )}
          contentContainerStyle={styles.lista}
        />
      )}

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
    marginBottom: 25,
  },

  lista: {
    paddingBottom: 20,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 18,
    marginBottom: 15,
  },

  vehiculo: {
    color: "#0b172a",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },

  detalle: {
    color: "#475569",
    fontSize: 15,
    marginBottom: 7,
  },

  estado: {
    color: "#0b172a",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },

  vacio: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 20,
  },

  textoVacio: {
    color: "#475569",
    fontSize: 16,
    textAlign: "center",
  },

  botonVolver: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },

  textoVolver: {
    color: "#0b172a",
    fontSize: 16,
    fontWeight: "bold",
  },
});
