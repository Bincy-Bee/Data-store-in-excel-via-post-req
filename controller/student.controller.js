
const Excel = require('exceljs');
const fs = require('fs')

const filePath = 'data.xlsx';
const sheetName = 'FormData';


function checkFileExists(filePath) {
    return fs.existsSync(filePath);
  }

// Function to append data to the Excel sheet
async function appendToExcel(data) {
    const workbook = new Excel.Workbook();
    if ( checkFileExists(filePath)){
  await workbook.xlsx.readFile(filePath); // Load the existing file
    }

  let sheet = workbook.getWorksheet(sheetName);
  if (!sheet) {
    sheet = workbook.addWorksheet(sheetName);
    sheet.addRow(['FirstName', 'LastName', 'EmailAddres','GRID']); // Add headers if the sheet is new
  }

  sheet.addRow([data.fname, data.lname, data.email, data.grid]); // Add the received data

  await workbook.xlsx.writeFile(filePath); // Save the changes
}

const dataForm = (req,res)=>{
    res.render("form");
}

const addData = async (req, res) => {
    const formData = {
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      grid: req.body.grid,
    };
    console.log(formData)
  
    try {
      await appendToExcel(formData); // Append data to Excel
      res.status(200).send({message :'Data added to Excel successfully'});
    } catch (error) {
      res.status(500).send({Error : 'Error adding data to Excel'});
    }
  }
module.exports={dataForm, addData}