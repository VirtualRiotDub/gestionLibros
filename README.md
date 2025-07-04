# Sistema de Gestión Académica - Instituto Tecnológico San Juan

Este proyecto es una aplicación web para la gestión de cursos y docentes, que incluye un backend API RESTful en Node.js con Express y SQLite, y un frontend HTML que consume la API para realizar operaciones CRUD.
[![image.png](https://i.postimg.cc/RVYrwgw9/image.png)](https://postimg.cc/0b7HsdtH)
---

## Tecnologías utilizadas

- Backend:
  - Node.js
  - Express
  - Sequelize ORM
  - SQLite
  - CORS

- Frontend:
  - HTML, CSS, JavaScript (Fetch API)

---

## Instalación y ejecución

### Requisitos previos

- Tener instalado Node.js (versión 12 o superior recomendada)
- Abrirlo de preferencia en google

### Pasos para ejecutar el backend

1. Abrir una terminal y navegar a la carpeta `backend`:

```bash
cd backend
```

2. Instalar las dependencias:

```bash
npm install express sequelize sqlite3 cors body-parser
```

3. Iniciar el servidor backend:

```bash
node server.js
```

El servidor correrá en `https://gestionlibros.onrender.com`.

---

### Ejecutar el frontend

Abrir el archivo `frontend/index.html` directamente en un navegador web moderno Chrome.
```bash
http://127.0.0.1:5501/frontend/index.html?
```
El frontend consumirá la API del backend para mostrar y gestionar cursos y docentes.

---

## Endpoints disponibles

### Cursos

- `GET /api/cursos` - Listar todos los cursos (opcional filtro por ciclo con query param `?ciclo=`)
- `GET /api/cursos/{id}` - Obtener un curso por ID
- `POST /api/cursos` - Agregar un nuevo curso
- `PUT /api/cursos/{id}` - Actualizar un curso existente
- `DELETE /api/cursos/{id}` - Eliminar un curso

### Docentes

- `GET /api/docentes` - Listar todos los docentes
- `GET /api/docentes/{id}` - Obtener un docente por ID
- `POST /api/docentes` - Agregar un nuevo docente
- `PUT /api/docentes/{id}` - Actualizar un docente existente
- `DELETE /api/docentes/{id}` - Eliminar un docente

---

## Uso

Desde el frontend podrá:

- Visualizar, agregar, modificar y eliminar cursos.
- Visualizar, agregar, modificar y eliminar docentes.

---

## Notas

- El backend utiliza SQLite como base de datos local (`backend/database.sqlite`).
- Se ha habilitado CORS para permitir que el frontend acceda a la API desde un archivo local.
- Para cualquier duda o mejora, puede contactarse con el equipo de desarrollo.

---
