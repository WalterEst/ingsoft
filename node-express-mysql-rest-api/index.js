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
  const sql = `INSERT INTO Plantel (costo, semanas_gallinas, fecha_compra, fecha_llegada, inicio_postura, termino_plantel, inicio_pelecha, gallinas_total, estado, raza_gallina, notas_plantel) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
  const values = [data.costo, data.semanas_gallinas, data.fecha_compra, data.fecha_llegada, data.inicio_postura, data.termino_plantel, data.inicio_pelecha, data.gallinas_total, data.estado, data.raza_gallina, data.notas_plantel];
  db.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send('Error al crear plantel');
      return;
    }
    res.status(201).json({ id: result.insertId });
  });
});

// Editar plantel
app.put('/planteles/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const sql = `UPDATE Plantel SET costo=?, semanas_gallinas=?, fecha_compra=?, fecha_llegada=?, inicio_postura=?, termino_plantel=?, inicio_pelecha=?, gallinas_total=?, estado=?, raza_gallina=?, notas_plantel=? WHERE id_plantel = ?`;
  const values = [data.costo, data.semanas_gallinas, data.fecha_compra, data.fecha_llegada, data.inicio_postura, data.termino_plantel, data.inicio_pelecha, data.gallinas_total, data.estado, data.raza_gallina, data.notas_plantel, id];
  db.query(sql, values, (err) => {
    if (err) {
      res.status(500).send('Error al actualizar plantel');
      return;
    }
    res.status(200).json({ msg: 'Plantel actualizado correctamente' });
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
  const sql = `INSERT INTO Produccion (id_plantel, fecha, cantidad, id_categoria) VALUES (?,?,?,?)`;
  const values = [data.id_plantel, data.fecha, data.cantidad, data.id_categoria];
  db.query(sql, values, (err, result) => {
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
  const sql = `UPDATE Produccion SET id_plantel=?, fecha=?, cantidad=?, id_categoria=? WHERE id_produccion = ?`;
  const values = [data.id_plantel, data.fecha, data.cantidad, data.id_categoria, id];
  db.query(sql, values, (err) => {
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
  const sql = `INSERT INTO Pedido (nombre_cliente, id_categoria, cantidad, fecha_pedido, fecha_entrega, metodo_pago, precio, nota_pedido, estado_pedido) VALUES (?,?,?,?,?,?,?,?,?)`;
  const values = [data.nombre_cliente, data.id_categoria, data.cantidad, data.fecha_pedido, data.fecha_entrega, data.metodo_pago, data.precio, data.nota_pedido, data.estado_pedido];
  db.query(sql, values, (err, result) => {
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
  const sql = `UPDATE Pedido SET nombre_cliente=?, id_categoria=?, cantidad=?, fecha_pedido=?, fecha_entrega=?, metodo_pago=?, precio=?, nota_pedido=?, estado_pedido=? WHERE id_pedido = ?`;
  const values = [data.nombre_cliente, data.id_categoria, data.cantidad, data.fecha_pedido, data.fecha_entrega, data.metodo_pago, data.precio, data.nota_pedido, data.estado_pedido, id];
  db.query(sql, values, (err) => {
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
  const sql = `INSERT INTO Venta (nombre_cliente, cantidad, precio, metodo_pago, fecha_pago, nota_venta, id_plantel) VALUES (?,?,?,?,?,?,?)`;
  const values = [data.nombre_cliente, data.cantidad, data.precio, data.metodo_pago, data.fecha_pago, data.nota_venta, data.id_plantel];
  db.query(sql, values, (err, result) => {
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
