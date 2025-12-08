<div align="center">

# 🌐 Prueba Técnica – EFACT (Frontend Angular)

Aplicación desarrollada como parte del proceso de selección para el puesto  
**Colaborador Junior del Área de Desarrollo** en **EFACT**.

Este proyecto implementa autenticación **OAuth**, consumo de **APIs oficiales de EFACT** y visualización de comprobantes electrónicos (**PDF, XML y CDR**), siguiendo el flujo solicitado por la prueba técnica.

<!-- 
Si quieres agregar imágenes reales, reemplaza por tus rutas:
![Login](ruta-a-tu-imagen.png)
![Docs](ruta-a-tu-imagen.png)
![PDF/XML/CDR](ruta-a-tu-imagen.png)
-->

</div>

---

## 🧩 Contenido

- 🚀 [Descripción General](#-descripción-general)
- 🛠 [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- 📦 [Instalación y Ejecución](#-instalación-y-ejecución)
- 📁 [Estructura del Proyecto](#-estructura-del-proyecto)
- 🔐 [Credenciales de Prueba](#-credenciales-de-prueba)
- 🧪 [Funcionamiento del Sistema](#-funcionamiento-del-sistema)
- ✨ [Características Principales](#-características-principales)
- 👨‍💻 [Autor](#-autor)

---

## 🚀 Descripción General

La solución desarrollada incluye:

✅ Pantalla de inicio de sesión con **OAuth (Password Flow)**  
✅ Obtención y almacenamiento del **token de acceso**  
✅ Visualización de documentos del comprobante:

- 📄 **PDF**
- 🧾 **XML firmado**
- 📃 **CDR**

✅ Consumo de endpoints protegidos usando **Bearer Token**  
✅ Protección de rutas usando **AuthGuard**  
✅ Manejo de sesión (**login / logout**) y navegación segura  
✅ Configuración de **proxy Angular** para evitar errores de **CORS**

---

## 🛠 Tecnologías Utilizadas

| Herramienta | Descripción |
|-------------|-------------|
| **Angular 18** | Framework principal |
| **TypeScript** | Tipado estático |
| **RxJS** | Manejo de datos asíncronos |
| **SCSS** | Estilos avanzados |
| **HttpClient** | Consumo de API REST |
| **Angular Router** | Navegación + AuthGuard |
| **Node.js 20 / npm 10** | Entorno del proyecto |
| **Git / GitHub** | Control de versiones |

---

## 📦 Instalación y Ejecución

### 🔹 1. Clonar el repositorio

    git clone https://github.com/FrankOncebay/efact-prueba-tecnica.git
    cd efact-prueba-tecnica

### 🔹 2. Instalar dependencias

    npm install

### 🔹 3. Ejecutar el proyecto con proxy habilitado

    ng serve --proxy-config proxy.conf.json

> **Nota:** El proxy redirige automáticamente las solicitudes hacia:  
> https://odin-dev.efact.pe/api-efact-ose/

### 🔹 4. Abrir en el navegador

    http://localhost:4200

---

## 📁 Estructura del Proyecto

    src/
     ├── app/
     │   ├── guards/
     │   │   └── auth.guard.ts          # Protección de rutas
     │   ├── pages/
     │   │   ├── login/                 # Pantalla de autenticación
     │   │   └── docs/                  # Visualización de comprobantes
     │   ├── services/
     │   │   ├── auth/                  # Servicio de autenticación OAuth
     │   │   └── files/                 # Servicio de consulta/descarga de documentos
     │   ├── app-routing.module.ts      # Configuración de rutas
     │   └── app.component.ts           # Componente principal
     ├── proxy.conf.json                # Configuración del proxy
     ├── styles.scss                    # Estilos globales
     └── ...

---

## 🔐 Credenciales de Prueba

> **Credenciales proporcionadas en el documento oficial de la prueba técnica.**

**🎫 Ticket utilizado:**

    571cc3a3-5b1f-4855-af26-0de6e7c5475f

---

## 🧪 Funcionamiento del Sistema

<table>
  <tr>
    <td width="50px" align="center">1️⃣</td>
    <td>El usuario inicia sesión con <b>OAuth Password Flow</b>.</td>
  </tr>
  <tr>
    <td width="50px" align="center">2️⃣</td>
    <td>Se obtiene el <code>access_token</code> y se almacena en <code>localStorage</code>.</td>
  </tr>
  <tr>
    <td width="50px" align="center">3️⃣</td>
    <td><code>AuthGuard</code> bloquea el acceso a <code>/docs</code> si no hay sesión activa.</td>
  </tr>
  <tr>
    <td width="50px" align="center">4️⃣</td>
    <td>
      La pantalla principal permite visualizar:
      <ul>
        <li>📄 <b>PDF</b> incrustado en visor</li>
        <li>🧾 <b>XML</b> formateado como texto</li>
        <li>📃 <b>CDR</b> firmado por SUNAT</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50px" align="center">5️⃣</td>
    <td>Navegación segura (<b>logout</b> y <code>replaceUrl</code>).</td>
  </tr>
</table>

---

## ✨ Características Principales

| 🐾 Característica | ✅ Descripción |
|------------------|----------------|
| 🔒 Autenticación segura | OAuth 2.0 (Password Flow) |
| 🛡️ Rutas protegidas | Implementación de **AuthGuard** |
| 🧾 Visualización de documentos | PDF, XML firmado y CDR |
| ⚡ Consumo eficiente de API | HttpClient + Bearer Token |
| 🔄 Sesión persistente | Token almacenado en localStorage |
| 🚫 Solución a CORS | Proxy Angular configurado |

---

## 👨‍💻 Autor

<div align="center">

**Frank Luis Oncebay Guerra**  
Postulante — Colaborador Junior del Área de Desarrollo  

📧 **frankoncebay2001@gmail.com**  
🔗 **GitHub:** FrankOncebay  


</div>
