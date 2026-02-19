ProyectoFinal+Vega

Aplicación Web tipo e-commerce (SPA) desarrollada con React.
Permite navegar por catálogo, filtrar por categorías, ver detalle de productos, agregar al carrito y generar órdenes almacenadas en Firebase Firestore.

🚀 Tecnologías utilizadas

React

React Router DOM

Context API

Firebase (Firestore)

CSS personalizado

🛒 Funcionalidades principales
Navegación (SPA)

Catálogo principal → /

Categorías → /category/:categoryId

Detalle de producto → /item/:itemId

Carrito → /cart

Checkout → /checkout

Ruta 404 → *

La navegación se realiza sin recarga de página (Single Page Application).

📦 Estructura del proyecto
Componentes principales

NavBar

CartWidget

ItemListContainer (contenedor)

ItemList

ItemCard

ItemDetailContainer (contenedor)

ItemDetail

ItemCount

Cart

CartItem

CheckoutForm

Separación de responsabilidades

Los Containers manejan estado y efectos (useEffect, llamadas a Firestore).

Los componentes de presentación se encargan del render visual.

🛍️ Carrito de compras

Implementado con Context API

Permite:

Agregar productos

Eliminar productos

Vaciar carrito

Calcular total de unidades

Calcular total a pagar

CartWidget muestra la cantidad total de productos agregados

🔥 Firebase / Firestore

Se utiliza Firestore como base de datos.

Colecciones utilizadas:
products

Almacena los productos del catálogo.

Estructura de documento:

title (string)

description (string)

category (string): "cascos" | "guantes" | "calzado"

price (number)

stock (number)

orders

Se genera automáticamente al confirmar una compra.

Contiene:

buyer (datos del cliente)

items (productos comprados)

total

createdAt (timestamp)

Al finalizar la compra, se muestra el ID de la orden generada.

🎯 Requisitos del proyecto cubiertos

✔ React Router implementado

✔ Navegación entre catálogo, categorías, detalle y checkout

✔ Estado global con Context

✔ ItemCount con validaciones (mínimo 1, máximo stock)

✔ ItemCount se oculta luego de agregar al carrito

✔ Renderizado condicional (loader, sin stock, carrito vacío, etc.)

✔ Firestore como base de datos

✔ Generación de orden en Firestore

✔ Formato de precios con separador de miles

✔ Diseño responsive

⚙️ Instalación
1️⃣ Clonar repositorio
git clone <url-del-repo>

2️⃣ Instalar dependencias
npm install

3️⃣ Configurar Firebase

Crear proyecto en Firebase

Crear base de datos Firestore (modo test durante desarrollo)

Crear archivo .env basado en .env.example

Agregar credenciales del proyecto

Ejemplo:

VITE_API_KEY=...
VITE_AUTH_DOMAIN=...
VITE_PROJECT_ID=...
VITE_STORAGE_BUCKET=...
VITE_MESSAGING_SENDER_ID=...
VITE_APP_ID=...

4️⃣ Ejecutar proyecto
npm run dev

📌 Notas adicionales

Los productos deben cargarse previamente en la colección products.

El proyecto puede desplegarse en Vercel o Netlify.

Las credenciales de Firebase se manejan mediante variables de entorno.
👨‍💻 Autor
René Vega
Proyecto Final React
