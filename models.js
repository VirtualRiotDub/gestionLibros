const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const Docente = sequelize.define('Docente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nombres: {
    type: DataTypes.STRING,
    allowNull: false
  },
  profesion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fechaNacimiento: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
}, {
  timestamps: false
});

const Curso = sequelize.define('Curso', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  curso: {
    type: DataTypes.STRING,
    allowNull: false
  },
  creditos: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  horasSemanal: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ciclo: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idDocente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Docente,
      key: 'id'
    }
  }
}, {
  timestamps: false
});

Docente.hasMany(Curso, { foreignKey: 'idDocente' });
Curso.belongsTo(Docente, { foreignKey: 'idDocente' });

module.exports = {
  sequelize,
  Docente,
  Curso
};
