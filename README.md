# Tienda Virtual

Este proyecto es una tienda virtual desarrollada utilizando el patrón de diseño Modelo Vista Controlador (MVC). La aplicación está dividida en dos partes principales: el frontend y el backend.

## Estructura del Proyecto

```
TiendaVirtual/
├── backend/
│   ├── app/
│   │   ├── controllers/
│   │   ├── models/
│   ├── database/
│   └── package.json
├── frontend/
│   ├── app/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── views/
│   ├── public/
│   │   ├── css/
│   │   ├── js/
│   │   ├── images/
│   ├── database/
│   ├── package.json
│   ├── index.html
│   └── app.js
└── README.md
```

## Descripción de Carpetas

### Backend

- **app/**: Contiene la lógica principal de la aplicación backend.
    - **controllers/**: Controladores que manejan las solicitudes y respuestas.
    - **models/**: Modelos que representan la lógica de datos.
- **database/**: Archivos de conexión y configuración de la base de datos.
- **package.json**: Archivo de configuración de npm para el backend.

### Frontend

- **app/**: Contiene la lógica principal de la aplicación frontend.
    - **controllers/**: Controladores que manejan la lógica de la aplicación.
    - **models/**: Modelos que representan la lógica de datos.
    - **views/**: Vistas que se muestran al usuario.
- **public/**: Archivos públicos accesibles desde el navegador.
    - **css/**: Archivos CSS globales.
    - **js/**: Archivos JavaScript globales.
    - **images/**: Imágenes públicas.
- **database/**: Archivos de conexión y configuración de la base de datos.
- **package.json**: Archivo de configuración de npm para el frontend.
- **index.html**: Archivo principal HTML que carga la aplicación en el navegador.
- **app.js**: Archivo principal JavaScript que inicializa la aplicación y sus componentes.

## Instalación

### Backend

1. Navega al directorio `backend`:
     ```sh
     cd backend
     ```
2. Instala las dependencias:
     ```sh
     npm install
     ```
3. Inicia el servidor:
     ```sh
     npm start
     ```

### Frontend

1. Navega al directorio `frontend`:
     ```sh
     cd frontend
     ```
2. Instala las dependencias:
     ```sh
     npm install
     ```
3. Inicia el servidor:
     ```sh
     npm start
     ```

## Uso

1. Abre tu navegador y navega a `http://localhost:3000` para ver la aplicación en funcionamiento.
2. Utiliza las rutas definidas en `app.js` para interactuar con la API.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un nuevo Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
