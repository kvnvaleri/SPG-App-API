const express = require('express');
const axios = require('axios');
const https = require('https');
const router = express.Router();

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

router.post('/', async (req, res) => {
  try {
    const formData = new URLSearchParams(req.body).toString();
    const response = await axios.post('https://mnjpt.com:97/api/spg/transaksi_spg/saldoawal.php', formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      httpsAgent: httpsAgent,
    });
    res.json(response.data);
  } catch (error) {
    console.error("Axios error:", error.response ? error.response.data : error.message);
    res.status(500).send(`Error forwarding request to original API: ${error.message}`);
  }
});

module.exports = router;
