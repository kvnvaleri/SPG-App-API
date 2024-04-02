const express = require('express');
const axios = require('axios');
const https = require('https');
const multer = require('multer');
const FormData = require('form-data');
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.none(), async (req, res) => {
  try {
    const formData = new FormData();
    Object.entries(req.body).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await axios.post('https://mnjpt.com:97/api/spg/transaksi_spg/input_realisasi.php', formData, {
      headers: { ...formData.getHeaders() },
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    });

    res.json(response.data);
  } catch (error) {
    console.error("Axios error:", error.response ? error.response.data : error.message);
    res.status(500).send(`Error forwarding request to original API: ${error.message}`);
  }
});

module.exports = router;