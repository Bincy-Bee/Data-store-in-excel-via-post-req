const {Router} = require('express');
const { dataForm, addData } = require('../controller/student.controller');
const router = Router();

router.get("/dataform",dataForm);

router.post("/addDatatoExcel", addData)

module.exports={router}