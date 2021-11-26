import { Model, DataTypes } from 'sequelize';

export default class Usuario extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
        direccion: DataTypes.STRING,
        telefono: DataTypes.INTEGER,
        id_rol: DataTypes.INTEGER
      },
      {
        sequelize,
        modelName: 'usuarios',
      }
    );
  }
}