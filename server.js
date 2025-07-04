const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize, Curso, Docente } = require('./models');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Sync database
sequelize.sync().then(() => {
  console.log('Database synced');
});

// GET /api/cursos - List all courses
app.get('/api/cursos', async (req, res) => {
  try {
    const { ciclo } = req.query;
    if (ciclo) {
      const cursos = await Curso.findAll({ where: { ciclo }, include: Docente });
      res.json(cursos);
    } else {
      const cursos = await Curso.findAll({ include: Docente });
      res.json(cursos);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/cursos/:id - Get course by ID
app.get('/api/cursos/:id', async (req, res) => {
  try {
    const curso = await Curso.findByPk(req.params.id, { include: Docente });
    if (curso) {
      res.json(curso);
    } else {
      res.status(404).json({ error: 'Curso not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/cursos - Add new course
app.post('/api/cursos', async (req, res) => {
  try {
    const { curso, creditos, horasSemanal, ciclo, idDocente } = req.body;
    const newCurso = await Curso.create({ curso, creditos, horasSemanal, ciclo, idDocente });
    res.status(201).json(newCurso);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /api/cursos/:id - Update course by ID
app.put('/api/cursos/:id', async (req, res) => {
  try {
    const { curso, creditos, horasSemanal, ciclo, idDocente } = req.body;
    const cursoToUpdate = await Curso.findByPk(req.params.id);
    if (cursoToUpdate) {
      cursoToUpdate.curso = curso;
      cursoToUpdate.creditos = creditos;
      cursoToUpdate.horasSemanal = horasSemanal;
      cursoToUpdate.ciclo = ciclo;
      cursoToUpdate.idDocente = idDocente;
      await cursoToUpdate.save();
      res.json(cursoToUpdate);
    } else {
      res.status(404).json({ error: 'Curso not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /api/cursos/:id - Delete course by ID
app.delete('/api/cursos/:id', async (req, res) => {
  try {
    const cursoToDelete = await Curso.findByPk(req.params.id);
    if (cursoToDelete) {
      await cursoToDelete.destroy();
      res.json({ message: 'Curso deleted' });
    } else {
      res.status(404).json({ error: 'Curso not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DOCENTE CRUD ENDPOINTS

// GET /api/docentes - List all docentes
app.get('/api/docentes', async (req, res) => {
  try {
    const docentes = await Docente.findAll();
    res.json(docentes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/docentes/:id - Get docente by ID
app.get('/api/docentes/:id', async (req, res) => {
  try {
    const docente = await Docente.findByPk(req.params.id);
    if (docente) {
      res.json(docente);
    } else {
      res.status(404).json({ error: 'Docente not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/docentes - Add new docente
app.post('/api/docentes', async (req, res) => {
  try {
    const { apellidos, nombres, profesion, fechaNacimiento, correo } = req.body;
    const newDocente = await Docente.create({ apellidos, nombres, profesion, fechaNacimiento, correo });
    res.status(201).json(newDocente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /api/docentes/:id - Update docente by ID
app.put('/api/docentes/:id', async (req, res) => {
  try {
    const { apellidos, nombres, profesion, fechaNacimiento, correo } = req.body;
    const docenteToUpdate = await Docente.findByPk(req.params.id);
    if (docenteToUpdate) {
      docenteToUpdate.apellidos = apellidos;
      docenteToUpdate.nombres = nombres;
      docenteToUpdate.profesion = profesion;
      docenteToUpdate.fechaNacimiento = fechaNacimiento;
      docenteToUpdate.correo = correo;
      await docenteToUpdate.save();
      res.json(docenteToUpdate);
    } else {
      res.status(404).json({ error: 'Docente not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /api/docentes/:id - Delete docente by ID
app.delete('/api/docentes/:id', async (req, res) => {
  try {
    const docenteToDelete = await Docente.findByPk(req.params.id);
    if (docenteToDelete) {
      await docenteToDelete.destroy();
      res.json({ message: 'Docente deleted' });
    } else {
      res.status(404).json({ error: 'Docente not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
