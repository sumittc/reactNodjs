const sequelize = new Sequelize('studentinfo', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define a model
const Student = sequelize.define('Student', {
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date_of_birth: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'students', // Specify the table name explicitly
  timestamps: false // Disable timestamps (createdAt, updatedAt)
});

// Sync model with database
(async () => {
  try {
    await sequelize.sync();
    console.log("Database synced!");

    // Fetch data from the table
    const students = await Student.findAll();
    console.log("All students:", JSON.stringify(students, null, 2));
  } catch (error) {
    console.error("Error syncing database:", error);
  } finally {
    await sequelize.close();
  }
})();
