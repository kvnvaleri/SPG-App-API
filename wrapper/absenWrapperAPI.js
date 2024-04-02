const express = require('express');
const axios = require('axios');
const https = require('https');
const multer = require('multer');
const FormData = require('form-data');
const fs = require('fs');
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.single('file_data'), async (req, res) => {
  try {
    const formData = new FormData();
    if (req.file) {
      formData.append('file', req.file.buffer, {
        filename: req.file.originalname,
        contentType: req.file.mimetype,
      });
    }
    Object.keys(req.body).forEach(key => {
      formData.append(key, req.body[key]);
    });
    const response = await axios.post('https://mnjpt.com:97/api/spg/transaksi_spg/absen.php', formData, {
      headers: {
        ...formData.getHeaders(),
      },
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    });
    res.json(response.data);
  } catch (error) {
    console.error("Axios error:", error.response ? error.response.data : error.message);
    res.status(500).send(`Error forwarding request to original API: ${error.message}`);
  }
});

module.exports = router;