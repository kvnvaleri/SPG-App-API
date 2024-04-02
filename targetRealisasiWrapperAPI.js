const express = require('express');
const axios = require('axios');
const https = require('https');
const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));

const httpsAgent = new https.Agent({
  rejectUnauthorized: false, 
});

app.post('/api/target_vs_realisasi', async (req, res) => {
  try {

    const formData = new URLSearchParams(req.body).toString();

    const response = await axios.post('https://mnjpt.com:97/api/spg/transaksi_spg/target_vs_realisasi.php', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      httpsAgent: httpsAgent,
    });

    res.json(response.data);
  } catch (error) {
    console.error("Axios error:", error.response ? error.response.data : error.message);
    res.status(500).send(`Error forwarding request to original API: ${error.message}`);
  }  
});

app.listen(port, () => {
  console.log(`API wrapper running at http://localhost:${port}`);
});
