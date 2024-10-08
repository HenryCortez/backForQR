const db = require('../config/db.MySQL');
const Agency = {
 
}
Agency.create = (name, address, callback) => {
    const query = 'INSERT INTO agency (name, address) VALUES (?, ?)';
    db.query(query, [name, address], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result);
    });
}

//obtener todos los registros
Agency.getAll = (callback) => {
    const query = 'SELECT * FROM agency';
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
Agency.update = (id, name, address, callback) => {
    const query = 'UPDATE agency SET name = ?, address = ? WHERE id = ?';
    db.query(query, [name, address, id], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result.affectedRows);
    });
}

//obtener solo 1
Agency.getById = (id, callback) => {
    const query = 'SELECT * FROM agency WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result);
    });
}

//delete
Agency.delete = (id, callback) => {
    const query = 'DELETE FROM agency WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result.affectedRows);
    });
}


module.exports = Agency;