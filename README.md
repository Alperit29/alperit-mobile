# ALPERIT Mobile

Aplicación móvil desarrollada como parte del Proyecto ABP, correspondiente a la carrera Analista en Sistemas.

## Descripción

ALPERIT Mobile es una aplicación desarrollada con React Native y Expo, orientada a la visualización de vehículos y al registro de solicitudes de peritaje.

El proyecto se desarrolla de manera incremental, incorporando nuevas funcionalidades en cada instancia evaluativa.

En este segundo corte se amplió la navegación y se incorporaron funcionalidades nativas del dispositivo, como el acceso a la cámara y a la galería de fotografías.

## Tecnologías utilizadas

- React Native
- Expo
- TypeScript
- Expo Router
- Zustand
- Expo Image Picker
- Node.js
- Android Studio

## Funcionalidades implementadas

### Primer corte

- Pantalla principal con catálogo de vehículos.
- Listado de vehículos mediante `FlatList`.
- Visualización de imagen, marca, modelo, año y kilometraje.
- Datos estáticos de vehículos Toyota.
- Componente reutilizable `VehicleCard`.
- Comunicación entre componentes mediante props.
- Navegación mediante Expo Router.
- Pantalla de detalle de vehículos.
- Formulario de solicitudes de peritaje.
- Validación de nombre y teléfono.
- Asociación de solicitudes con vehículos.
- Gestión del estado compartido mediante Zustand.
- Pantalla de consulta de solicitudes registradas.

### Segundo corte

- Navegación mediante pestañas inferiores (Tabs).
- Acceso directo a las secciones Vehículos y Mis solicitudes.
- Integración con la galería del dispositivo.
- Acceso a la cámara mediante Expo Image Picker.
- Solicitud de permisos para utilizar la cámara.
- Captura de fotografías desde el dispositivo.
- Vista previa de fotografías en el formulario.
- Asociación de fotografías a solicitudes de peritaje.
- Visualización de fotografías en Mis solicitudes.
- Contador dinámico de solicitudes registradas.
- Pruebas funcionales en emulador Android.
- Verificación del código TypeScript sin errores.

## Componentes y recursos utilizados

- `View`
- `Text`
- `Image`
- `FlatList`
- `TouchableOpacity`
- `TextInput`
- `Alert`
- `StyleSheet`
- `useState`
- `Tabs`
- `expo-image-picker`

Se utiliza Expo Router para gestionar la navegación y Zustand para compartir el estado de las solicitudes entre pantallas.

## Funcionalidades disponibles

- [x] Consultar vehículos disponibles.
- [x] Visualizar detalles de un vehículo.
- [x] Registrar solicitudes de peritaje.
- [x] Validar datos obligatorios.
- [x] Consultar solicitudes registradas.
- [x] Visualizar el estado de las solicitudes.
- [x] Navegar mediante pestañas.
- [x] Seleccionar fotografías desde la galería.
- [x] Tomar fotografías utilizando la cámara.
- [x] Adjuntar fotografías a solicitudes.
- [x] Visualizar fotografías registradas.
- [x] Consultar el total de solicitudes.

## Funcionalidades pendientes

- [ ] Integración con API y servicios externos.
- [ ] Persistencia permanente de solicitudes.
- [ ] Modificación del estado de las solicitudes.
- [ ] Autenticación de usuarios.

## Estado actual

**Proyecto en desarrollo – Segundo corte evaluativo.**

La aplicación permite consultar vehículos, visualizar sus características y registrar solicitudes de peritaje.

Las solicitudes pueden incluir fotografías obtenidas desde la cámara o la galería del dispositivo.

La información registrada se administra temporalmente mediante Zustand y puede consultarse desde la sección Mis solicitudes.

Actualmente se utilizan datos estáticos para los vehículos y almacenamiento temporal en memoria para las solicitudes.

## Ejecución del proyecto

1. Clonar el repositorio.
2. Instalar las dependencias con `npm install`.
3. Iniciar el proyecto con `npx expo start`.
4. Ejecutar la aplicación en un emulador Android mediante Expo Go.

## Repositorio

https://github.com/Alperit29/alperit-mobile

## Integrantes

- Fabian Berozub
