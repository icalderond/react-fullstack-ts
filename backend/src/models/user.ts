import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/config';

class User extends Model {
    public id!: number;
    public name!: string;
    public lastName!: string;
    public email!: string;
}

User.init({
    name: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: new DataTypes.STRING,
        allowNull:true
    },
    email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'users',
    sequelize: sequelize
});

export default User;