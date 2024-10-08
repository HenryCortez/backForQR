const express = require('express');
const router = express.Router();
const Channel = require('../models/channelModel');

router.post('/', (req, res) => {
    const { name, descripcion } = req.body;
    Channel.create(name, descripcion, (err, id) => {
        if (err) {
            res.status(500).json({ error: 'Error creating agency' });
        }
        res.status(201).json({ message: 'Channel created', id});
    }
    );
}
);
//obtener todos los registros
router.get('/', (req, res) => {
    Channel.getAll( (err, channels) => {
        if (err) {
            res.status(500).json({ error: 'Error charging agencies' });
        }
        res.json(channels);
    }
    );
}
);

//obtener una agencia

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Channel.getById(id, (err, channel) => {
        if (err) {
            res.status(500).json({ error: 'Error charging channel' });
        }if(!channel){
            res.status(404).json({ error: 'Channel not found' });
        }
        res.json(channel);
    }
    );
}   
);

//actualizar
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, descripcion } = req.body;
    Channel.update(id, name, descripcion, (err, affectedRows) => {
        if (err) {
            res.status(500).json({ error: 'Error updating agency' });
        }if(affectedRows === 0){
            res.status(404).json({ error: 'Channel not found' });
        }
        res.json({ message: 'Channel updated (' + affectedRows + ')' });
    }
    );
}
);

//eliminar
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Channel.delete(id, (err, affectedRows) => {
        if (err) {
            res.status(500).json({ error: 'Error deleting Channel' });
        }if(affectedRows === 0){
            res.status(404).json({ error: 'Channel not found' });
        }
        res.json({ message: 'Channel deleted' });
    }
    );
}
);

module.exports = router;