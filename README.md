# ALPERIT Mobile

Aplicación móvil desarrollada como parte del Proyecto ABP.

## Descripción

ALPERIT Mobile es una aplicación orientada a la visualización y gestión de vehículos dentro del sistema de peritajes ALPERIT.

El proyecto se encuentra en desarrollo incremental. Actualmente permite consultar un listado de vehículos y acceder a la información detallada de cada uno.

## Tecnologías utilizadas

- React Native
- Expo
- TypeScript
- Expo Router
- Node.js
- Android Studio

## Funcionalidades implementadas

- Pantalla principal de ALPERIT.
- Listado de vehículos mediante `FlatList`.
- Visualización de imagen, marca, modelo, año y kilometraje.
- Datos estáticos para representar los vehículos.
- Componente reutilizable `VehicleCard`.
- Comunicación entre componentes mediante props.
- Tarjetas interactivas mediante `TouchableOpacity`.
- Navegación entre pantallas mediante Expo Router.
- Pantalla de detalle de cada vehículo.
- Botón para regresar al listado de vehículos.
- Ejecución y pruebas en emulador Android.

## Componentes utilizados

Durante el desarrollo se implementaron componentes y recursos de React Native como:

- `View`
- `Text`
- `Image`
- `FlatList`
- `TouchableOpacity`
- `StyleSheet`

También se utiliza Expo Router para gestionar la navegación entre las pantallas de la aplicación.

## Features

### Implementadas

- [x] Consultar listado de vehículos.
- [x] Consultar información detallada de un vehículo.

### Pendientes

- [ ] Registrar solicitudes de peritaje.
- [ ] Consultar solicitudes de peritaje realizadas.
- [ ] Gestionar el estado de las solicitudes.
- [ ] Integración con servicios/API.
- [ ] Persistencia de datos.
- [ ] Autenticación de usuarios.

## Estado actual

**Proyecto en desarrollo - Corte evaluativo**

La aplicación cuenta actualmente con un listado interactivo de vehículos. El usuario puede seleccionar un vehículo y acceder a una nueva pantalla donde se visualizan sus datos específicos.

El proyecto continuará evolucionando de forma incremental, incorporando nuevas funcionalidades durante las siguientes etapas.

## Integrantes

- Fabian Berozub
