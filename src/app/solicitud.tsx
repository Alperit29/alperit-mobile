import { useSolicitudesStore } from "@/store/solicitudesStore";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function SolicitudScreen() {
  const router = useRouter();

  const { marca, modelo, anio } = useLocalSearchParams();

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const agregarSolicitud = useSolicitudesStore(
    (state) => state.agregarSolicitud,
  );

  const enviarSolicitud = () => {
    if (!nombre || !telefono) {
      Alert.alert("Atención", "Completá nombre y teléfono.");
      return;
    }

    agregarSolicitud({
      id: Date.now(),
      marca: String(marca),
      modelo: String(modelo),
      anio: String(anio),
      nombre: nombre,
      telefono: telefono,
      observaciones: observaciones,
      estado: "Pendiente",
    });

    Alert.alert(
      "Solicitud registrada",
      "La solicitud de peritaje fue registrada correctamente.",
    );

    setNombre("");
    setTelefono("");
    setObservaciones("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Solicitar peritaje</Text>

      <View style={styles.vehiculo}>
        <Text style={styles.vehiculoTitulo}>Vehículo seleccionado</Text>

        <Text style={styles.vehiculoTexto}>
          {marca} {modelo} - {anio}
        </Text>
      </View>

      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresá tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={styles.label}>Teléfono</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresá tu teléfono"
        keyboardType="phone-pad"
        value={telefono}
        onChangeText={setTelefono}
      />

      <Text style={styles.label}>Observaciones</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Ingresá una observación"
        multiline
        value={observaciones}
        onChangeText={setObservaciones}
      />

      <TouchableOpacity style={styles.boton} onPress={enviarSolicitud}>
        <Text style={styles.textoBoton}>Registrar solicitud</Text>
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

  label: {
    color: "#ffffff",
    fontSize: 16,
    marginBottom: 8,
  },

  input: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 20,
  },

  textArea: {
    height: 100,
    textAlignVertical: "top",
  },

  boton: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
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

  vehiculo: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 25,
  },

  vehiculoTitulo: {
    color: "#475569",
    fontSize: 14,
    marginBottom: 5,
  },

  vehiculoTexto: {
    color: "#0b172a",
    fontSize: 18,
    fontWeight: "bold",
  },
});
