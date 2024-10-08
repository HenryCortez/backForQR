const express = require('express');
const router = express.Router();
const Agency = require('../models/agencyModel');

router.post('/', (req, res) => {
    const { name, address } = req.body;
    Agency.create(name, address, (err, id) => {
        if (err) {
            res.status(500).json({ error: 'Error creating agency' });
        }
        res.status(201).json({ message: 'Agency created', id});
    }
    );
}
);
//obtener todos los registros
router.get('/', (req, res) => {
    Agency.getAll( (err, agencies) => {
        if (err) {
            res.status(500).json({ error: 'Error charging agencies' });
        }
        res.json(agencies);
    }
    );
}
);

//obtener una agencia

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Agency.getById(id, (err, agency) => {
        if (err) {
            res.status(500).json({ error: 'Error charging agency' });
        }if(!agency){
            res.status(404).json({ error: 'Agency not found' });
        }
        res.json(agency);
    }
    );
}   
);

//actualizar
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, address } = req.body;
    Agency.update(id, name, address, (err, affectedRows) => {
        if (err) {
            res.status(500).json({ error: 'Error updating agency' });
        }if(affectedRows === 0){
            res.status(404).json({ error: 'Agency not found' });
        }
        res.json({ message: 'Agency updated (' + affectedRows + ')' });
    }
    );
}
);

//eliminar
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Agency.delete(id, (err, affectedRows) => {
        if (err) {
            res.status(500).json({ error: 'Error deleting agency' });
        }if(affectedRows === 0){
            res.status(404).json({ error: 'Agency not found' });
        }
        res.json({ message: 'Agency deleted' });
    }
    );
}
);

module.exports = router;