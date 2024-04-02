const express = require('express');
const app = express();

const listProductWrapperAPI = require('./listProductWrapperAPI');
const targetRealisasiWrapperAPI = require('./targetRealisasiWrapperAPI');
const listOutletWrapperAPI = require('./listOutletWrapperAPI');
const listProductInputWrapperAPI = require('./listProductInputWrapperAPI');
const saldoAwalWrapperAPI = require('./saldoAwalWrapperAPI');

app.use(express.urlencoded({ extended: true }));

app.use('/api/real_list_product_spg', listProductWrapperAPI);
app.use('/api/target_vs_realisasi', targetRealisasiWrapperAPI);
app.use('/api/list_outlet', listOutletWrapperAPI)
app.use('/api/list_product', listProductInputWrapperAPI)
app.use('/api/saldoawal', saldoAwalWrapperAPI)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`API wrapper running on port ${port}`);
});