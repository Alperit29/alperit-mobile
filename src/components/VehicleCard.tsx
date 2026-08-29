import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";

type VehicleCardProps = {
  imagen: ImageSourcePropType;
  marca: string;
  modelo: string;
  anio: number;
  kilometraje: string;
};

export default function VehicleCard({
  imagen,
  marca,
  modelo,
  anio,
  kilometraje,
}: VehicleCardProps) {
  return (
    <View style={styles.card}>
      <Image source={imagen} style={styles.imagen} />

      <Text style={styles.nombre}>
        {marca} {modelo}
      </Text>

      <Text style={styles.detalle}>Año: {anio}</Text>
      <Text style={styles.detalle}>Kilometraje: {kilometraje}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginBottom: 15,
    width: "100%",
    overflow: "hidden",
  },

  imagen: {
    width: "100%",
    height: 180,
  },

  nombre: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0b172a",
    marginTop: 16,
    marginHorizontal: 18,
    marginBottom: 10,
  },

  detalle: {
    fontSize: 16,
    color: "#475569",
    marginHorizontal: 18,
    marginBottom: 8,
  },
});
