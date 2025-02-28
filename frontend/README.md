# Estructura de Modelo Vista Controlador (MVC)

La estructura de un proyecto MVC generalmente se organiza de la siguiente manera:

```
TiendaVirtual/
├── app/
│   ├── Controllers/
│   ├── Models/
│   ├── Views/
│   │   ├── templates/
├── routes/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
├── config/
├── database/
├── resources/
├── storage/
├── tests/
└── README.md
```

## Descripción de Carpetas

- **app/**: Contiene la lógica principal de la aplicación.
    - **Controllers/**: Controladores que manejan las solicitudes y respuestas.
    - **Models/**: Modelos que representan la lógica de datos.
    - **Views/**: Vistas que se muestran al usuario.
        - **templates/**: Plantillas HTML.

- **routes/**: Archivos de rutas que definen los endpoints de la aplicación.

- **public/**: Archivos públicos accesibles desde el navegador.
    - **css/**: Archivos CSS globales.
    - **js/**: Archivos JavaScript globales.
    - **images/**: Imágenes públicas.

- **config/**: Archivos de configuración de la aplicación.

- **database/**: Migraciones y archivos de base de datos.

- **resources/**: Recursos adicionales como vistas y archivos de idioma.

- **storage/**: Archivos generados por la aplicación, como logs y cachés.

- **tests/**: Pruebas automatizadas de la aplicación.

- **README.md**: Documentación del proyecto.

Esta estructura puede variar dependiendo del framework que estés utilizando, pero esta es una estructura comúnmente aceptada para proyectos MVC.


## Archivos Principales

- **index.html**: Archivo principal HTML que carga la aplicación en el navegador.
- **app.js**: Archivo principal JavaScript que inicializa la aplicación y sus componentes.
- **package.json**: Archivo de configuración de npm que lista las dependencias y scripts del proyecto.
- **.gitignore**: Archivo que especifica qué archivos y directorios deben ser ignorados por Git.

Estos archivos son esenciales para el funcionamiento y la configuración de la aplicación.