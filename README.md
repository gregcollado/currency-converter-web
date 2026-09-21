# Currency Converter Web

Aplicación web responsive para consultar tasas de cambio y convertir montos entre **EUR, USD y DOP**. El proyecto combina una interfaz clara y adaptable con una integración a un servicio backend que obtiene las tasas de cambio actualizadas.

## Demo

Puedes probar la aplicación desplegada aquí:

**[Abrir Currency Converter Web](https://currency-converter-web-mocha.vercel.app/)**

## Diseño en Figma

El prototipo visual utilizado como referencia para la interfaz está disponible en Figma:

**[Ver prototipo en Figma]([https://www.figma.com/proto/OVerEnInCYAQjNOfUbGR8f/currency-converter-web?node-id=0-1&t=HjnOHkJZS8sdmkK0-1](https://www.figma.com/design/OVerEnInCYAQjNOfUbGR8f/currency-converter-web?node-id=0-1&t=HjnOHkJZS8sdmkK0-1))**

### Vista previa

![Vista previa del diseño de Currency Converter Web](frontend/img/Desktop%20-%201.png)

## Características

- Conversión entre euros, dólares estadounidenses y pesos dominicanos.
- Tasas EUR → DOP y USD → DOP mostradas en tarjetas principales.
- Tasas cruzadas EUR → USD y USD → EUR en el panel lateral.
- Actualización dinámica de las tasas desde una API.
- Conversión instantánea al modificar el monto o las monedas.
- Intercambio rápido entre moneda de origen y moneda de destino.
- Modo oscuro con control visual tipo switch.
- Diseño responsive para escritorio, tablets y dispositivos móviles.
- Valores de respaldo para mantener la interfaz disponible si la API no responde.

## Tecnologías

- HTML5
- CSS3 con Flexbox, CSS Grid y media queries
- JavaScript moderno con `fetch`, módulos ES y manipulación del DOM
- Font Awesome
- Google Fonts: Inter
- Vercel para el despliegue del frontend

## Estructura del proyecto

```text
currency-converter-web/
├── backend/
│   ├── .env                 # Variables de entorno locales
│   ├── package.json
│   └── server.js            # Servidor Express y proxy de tasas
├── frontend/
│   ├── index.html           # Estructura de la aplicación
│   ├── script.js            # Consulta de tasas y lógica de conversión
│   ├── styles.css           # Estilos responsive y modo oscuro
│   └── img/
│       └── Desktop - 1.png  # Captura del prototipo visual
├── .gitignore
├── package.json
└── README.md
```

## Funcionamiento

1. El frontend solicita las tasas de cambio al servicio backend.
2. El backend utiliza una variable de entorno para proteger la clave de la API externa.
3. Las tasas recibidas actualizan las tarjetas y los textos informativos.
4. La conversión se calcula en el navegador cada vez que cambia el monto o una moneda.
5. Si la consulta falla, la interfaz utiliza valores de respaldo para seguir funcionando.

## Instalación local

### Requisitos

- Node.js 18 o superior
- npm

### Frontend

Desde la carpeta `frontend`, sirve los archivos estáticos con cualquier servidor local. Por ejemplo, usando Live Server en VS Code, abre `frontend/index.html`.

También puedes utilizar:

```bash
npx serve frontend
```

### Backend

Instala las dependencias y ejecuta el servidor:

```bash
cd backend
npm install
npm start
```

Configura la clave de la API en `backend/.env`:

```env
MI_API_KEY=tu_clave_de_api
PORT=3000
```

No subas el archivo `.env` al repositorio. Ya está incluido en `.gitignore`.

## Scripts

En `backend/`:

```bash
npm start
```

Inicia el servidor Express en el puerto configurado, o en el puerto `3000` por defecto.

## API

El backend expone la ruta:

```text
GET /api/tasas
```

Esta ruta funciona como puente entre la aplicación y el proveedor externo de tasas, evitando exponer la clave de API en el navegador.

## Despliegue

El frontend está preparado para desplegarse como sitio estático. La versión publicada está disponible en:

https://currency-converter-web-mocha.vercel.app/

Para un despliegue completo, configura el frontend y el backend como servicios independientes y actualiza la URL de la API en `frontend/script.js`.

## Objetivo del proyecto

Este proyecto fue creado para practicar y demostrar:

- Consumo de APIs desde JavaScript.
- Separación entre frontend y backend.
- Protección de credenciales mediante variables de entorno.
- Construcción de interfaces responsive.
- Cálculos de conversión entre distintas monedas.
- Despliegue de una aplicación web real.

## Autor

**Gregory Collado**

- GitHub: [gregcollado](https://github.com/gregcollado)
