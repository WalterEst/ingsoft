const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gestiondepractica'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('Conectado a MySQL');
});

app.use(bodyParser.json());
app.use(cors());

// Obtener todos los planteles
app.get('/planteles', (req, res) => {
  db.query('SELECT * FROM Plantel', (err, results) => {
    if (err) {
      res.status(500).send('Error al obtener planteles');
      return;
    }
    res.json(results);
  });
});

// Crear un plantel
app.post('/planteles', (req, res) => {
  const data = req.body;
  db.query('INSERT INTO Plantel SET ?', data, (err, result) => {
    if (err) {
      res.status(500).send('Error al crear plantel');
      return;
    }
    res.status(201).json({ id: result.insertId });
  });
});

// Obtener producciones
app.get('/producciones', (req, res) => {
  db.query('SELECT * FROM Produccion', (err, results) => {
    if (err) {
      res.status(500).send('Error al obtener producciones');
      return;
    }
    res.json(results);
  });
});

// Crear produccion
app.post('/producciones', (req, res) => {
  const data = req.body;
  db.query('INSERT INTO Produccion SET ?', data, (err, result) => {
    if (err) {
      res.status(500).send('Error al crear producción');
      return;
    }
    res.status(201).json({ id: result.insertId });
  });
});

// Editar producción
app.put('/producciones/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;
  db.query('UPDATE Produccion SET ? WHERE id_produccion = ?', [data, id], (err) => {
    if (err) {
      res.status(500).send('Error al actualizar producción');
      return;
    }
    res.status(200).json({ msg: 'Producción actualizada correctamente' });
  });
});

// Obtener pedidos
app.get('/pedidos', (req, res) => {
  db.query('SELECT * FROM Pedido', (err, results) => {
    if (err) {
      res.status(500).send('Error al obtener pedidos');
      return;
    }
    res.json(results);
  });
});

// Crear pedido
app.post('/pedidos', (req, res) => {
  const data = req.body;
  db.query('INSERT INTO Pedido SET ?', data, (err, result) => {
    if (err) {
      res.status(500).send('Error al crear pedido');
      return;
    }
    res.status(201).json({ id: result.insertId });
  });
});

// Editar pedido
app.put('/pedidos/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;
  db.query('UPDATE Pedido SET ? WHERE id_pedido = ?', [data, id], (err) => {
    if (err) {
      res.status(500).send('Error al actualizar pedido');
      return;
    }
    res.status(200).json({ msg: 'Pedido actualizado correctamente' });
  });
});

// Obtener ventas
app.get('/ventas', (req, res) => {
  db.query('SELECT * FROM Venta', (err, results) => {
    if (err) {
      res.status(500).send('Error al obtener ventas');
      return;
    }
    res.json(results);
  });
});

// Crear venta
app.post('/ventas', (req, res) => {
  const data = req.body;
  db.query('INSERT INTO Venta SET ?', data, (err, result) => {
    if (err) {
      res.status(500).send('Error al crear venta');
      return;
    }
    res.status(201).json({ id: result.insertId });
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
