const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const agencyRoutes = require('./routes/agencyRoute');
const channelRoutes = require('./routes/channelRoute');
app.use('/agencies', agencyRoutes);
app.use('/channel', channelRoutes)

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});