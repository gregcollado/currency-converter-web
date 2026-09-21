import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors()); // Permite que tu frontend se conecte
app.use(express.json());

// Ruta puente (Proxy)
app.get('/api/tasas', async (req, res) => {
    try {
        // Aquí la API Key está segura en el servidor, el usuario no la ve
        const apiKey = process.env.MI_API_KEY; 
        const url = `https://tu-proveedor.com{apiKey}`;

        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error al conectar con la API externa' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor seguro en puerto ${PORT}`));
