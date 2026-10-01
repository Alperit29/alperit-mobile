# ALPERIT Mobile

Aplicación móvil desarrollada como parte del Proyecto ABP.

## Descripción

ALPERIT Mobile es una aplicación orientada a la visualización y gestión de vehículos dentro del sistema de peritajes ALPERIT.

El proyecto se encuentra en desarrollo incremental. Actualmente permite consultar vehículos, visualizar su información detallada, registrar solicitudes de peritaje y consultar las solicitudes realizadas.

## Tecnologías utilizadas

- React Native
- Expo
- TypeScript
- Expo Router
- Zustand
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
- Formulario para registrar solicitudes de peritaje.
- Asociación de la solicitud con el vehículo seleccionado.
- Validación de nombre y teléfono.
- Confirmación al registrar una solicitud.
- Gestión de estado compartido mediante Zustand.
- Pantalla "Mis solicitudes".
- Visualización de vehículo, cliente, teléfono, observaciones y estado de cada solicitud.
- Ejecución y pruebas en emulador Android.

## Componentes y recursos utilizados

Durante el desarrollo se implementaron componentes y recursos de React Native como:

- `View`
- `Text`
- `Image`
- `FlatList`
- `TouchableOpacity`
- `TextInput`
- `Alert`
- `StyleSheet`

También se utiliza Expo Router para gestionar la navegación entre las distintas pantallas y Zustand para compartir el estado de las solicitudes.

## Features

### Implementadas

- [x] Consultar listado de vehículos.
- [x] Consultar información detallada de un vehículo.
- [x] Registrar solicitudes de peritaje.
- [x] Asociar una solicitud al vehículo seleccionado.
- [x] Consultar solicitudes de peritaje realizadas.
- [x] Visualizar el estado de una solicitud.

### Pendientes

- [ ] Integración con servicios/API.
- [ ] Persistencia permanente de datos.
- [ ] Gestión y modificación del estado de las solicitudes.
- [ ] Autenticación de usuarios.

## Estado actual

**Proyecto en desarrollo - Corte evaluativo**

Actualmente la aplicación permite recorrer un listado de vehículos, seleccionar uno y consultar su información detallada.

Desde el detalle del vehículo se puede iniciar una solicitud de peritaje, completar los datos del solicitante y registrar la solicitud asociada al vehículo seleccionado.

Las solicitudes registradas se almacenan temporalmente mediante Zustand y pueden consultarse desde la pantalla "Mis solicitudes", donde se visualizan sus datos y su estado actual.

En esta etapa los datos se mantienen en memoria durante la ejecución de la aplicación. La integración con una API y la persistencia permanente de la información quedan previstas para etapas posteriores del proyecto.

## Integrantes

- Fabian Berozub
