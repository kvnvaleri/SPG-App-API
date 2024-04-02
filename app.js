const express = require('express');
const app = express();

const listProductWrapperAPI = require('./wrapper/listProductWrapperAPI');
const targetRealisasiWrapperAPI = require('./wrapper/targetRealisasiWrapperAPI');
const listOutletWrapperAPI = require('./wrapper/listOutletWrapperAPI');
const listProductInputWrapperAPI = require('./wrapper/listProductInputWrapperAPI');
const saldoAwalWrapperAPI = require('./wrapper/saldoAwalWrapperAPI');

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