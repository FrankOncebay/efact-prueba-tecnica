.

🌐 Prueba Técnica – EFACT (Frontend Angular)

Aplicación desarrollada como parte del proceso de selección para el puesto
Colaborador Junior del Área de Desarrollo en EFACT.

Este proyecto implementa autenticación OAuth, consumo de APIs oficiales de EFACT y visualización de comprobantes electrónicos (PDF, XML y CDR), siguiendo el flujo solicitado por la prueba técnica.

📋 Contenido

🚀 Descripción general

🛠 Tecnologías utilizadas

📦 Instalación y ejecución

📁 Estructura del proyecto

🔐 Credenciales de prueba

🧪 Funcionamiento del sistema

👨‍💻 Autor

🚀 Descripción general

La solución desarrollada incluye:

Pantalla de inicio de sesión con OAuth (Password Flow).

Obtención y almacenamiento del token de acceso.

Visualización de documentos del comprobante:

📄 PDF

🧾 XML firmado

📃 CDR

Consumo de los endpoints protegidos usando Bearer Token.

Protección de rutas usando AuthGuard.

Manejo de sesión (login / logout) y navegación segura.

Configuración de proxy Angular para evitar errores de CORS.

🛠 Tecnologías utilizadas
Tecnología	Descripción
Angular 18	Framework principal del frontend
TypeScript	Lenguaje con tipado estático
Angular Router	Navegación y guardas
HttpClient	Consumo de API REST
SCSS	Estilos del proyecto
Node.js 20 / npm 10	Entorno backend / gestor de paquetes
📦 Instalación y ejecución
🔹 1. Clonar el repositorio
git clone https://github.com/FrankOncebay/efact-prueba-tecnica.git
cd efact-prueba-tecnica

🔹 2. Instalar dependencias
npm install

🔹 3. Ejecutar el proyecto con proxy habilitado
ng serve --proxy-config proxy.conf.json


El proxy redirige automáticamente solicitudes hacia:

https://odin-dev.efact.pe/api-efact-ose/

🔹 4. Abrir en el navegador
http://localhost:4200

📁 Estructura del proyecto
src/
 ├── app/
 │   ├── guards/
 │   │   └── auth.guard.ts
 │   ├── pages/
 │   │   ├── login/
 │   │   └── docs/
 │   ├── services/
 │   │   ├── auth/
 │   │   └── files/
 │   ├── app-routing.module.ts
 │   └── app.component.ts
 ├── proxy.conf.json
 ├── styles.scss
 └── ...

🔐 Credenciales de prueba

Credenciales proporcionadas en el documento oficial de la prueba técnica.

Ticket utilizado:

571cc3a3-5b1f-4855-af26-0de6e7c5475f

🧪 Funcionamiento del sistema

El usuario inicia sesión con OAuth Password Flow.

Se obtiene el access_token y se almacena en localStorage.

AuthGuard bloquea el acceso a /docs si no hay sesión.

La pantalla principal permite visualizar:

PDF incrustado en visor

XML formateado como texto

CDR firmado por SUNAT

Navegación segura (logout y replaceUrl).

👨‍💻 Autor

Frank Luis Oncebay Guerra
Postulante — Colaborador Junior del Área de Desarrollo
📧 frankoncebay@gmail.com

🔗 GitHub: FrankOncebay

✔️ Ahora sí, copia todo esto EXACTO en tu README.

Si quieres también te redacto el mensaje para enviar por correo con el link del repositorio. ¿Deseas que lo haga?
