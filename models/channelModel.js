const db = require('../config/db.MySQL');
const Channel = {
 
}
Channel.create = (name, descripcion, callback) => {
    const query = 'INSERT INTO channel (name, descripcion) VALUES (?, ?)';
    db.query(query, [name, descripcion], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result);
    });
}

//obtener todos los registros
Channel.getAll = (callback) => {
    const query = 'SELECT * FROM channel';
    db.query(query, (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results);
    }
    );
}
//update
Channel.update = (id, name, descripcion, callback) => {
    const query = 'UPDATE channel SET name = ?, descripcion = ? WHERE id = ?';
    db.query(query, [name, descripcion, id], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result.affectedRows);
    });
}

//obtener solo 1
Channel.getById = (id, callback) => {
    const query = 'SELECT * FROM channel WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result);
    });
}

//delete
Channel.delete = (id, callback) => {
    const query = 'DELETE FROM channel WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result.affectedRows);
    });
}


module.exports = Channel;