require('dotenv').config()
const app = require('./app');


const { db } = require('./database/config');

db.authenticate()
  .then(() => console.log('Database connected...😉'))
  .catch(() => console.log('error conection'));

db.sync({ force: false })
  .then(() => console.log('Database Synchronized'))
  .catch(() => console.log('Data'));

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
 
});
