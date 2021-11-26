import { Model, DataTypes } from 'sequelize';

export default class Curso extends Model {
  static init(sequelize) {
    return super.init(
      {
        horario: DataTypes.STRING,
        id_materia: DataTypes.INTEGER,
        id_profesor: DataTypes.INTEGER
      },
      {
        sequelize,
        modelName: 'cursos',
      }
    );
  }
}