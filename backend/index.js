const express = require('express');
const cors = require('cors');
const app = express();
const port = 5010;

//POST
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
//

app.use(cors({ origin: '*' }));
app.use(express.static('public'));


//POST (Lägga till vin)
app.post('/api_post', function(req, res) {

    // HANTERAR ID
    let idFilePath = __dirname + '/public/id.json'
    let idFileString = fs.readFileSync(idFilePath);
    let idFile = JSON.parse(idFileString);
    req.body.id = idFile.id;
    idFile.id = idFile.id + 1;
    fs.writeFileSync(idFilePath, JSON.stringify(idFile));


    // Hämtar path till wine.json
    let filePath = __dirname + '/public/wines.json'
    // fs.readFileSync läser filen och sparar den i en variabel (sträng-format)
    let wineFile = fs.readFileSync(filePath);
    // Gör om/tillbaka filen från sträng till json-format(arr)
    let wineArr = JSON.parse(wineFile);
    // Lägger till det inskickade vinet (request från frontend) i arrayen
    wineArr.push(req.body)
    // Skriver över filen med den uppdaterade arrayen (åter till sträng-format)
    fs.writeFileSync(filePath, JSON.stringify(wineArr))
    // Den nya arrayen läses och sparas i en variabel ...
    let newWineFile = fs.readFileSync(filePath)
    // ... som skickas tillbaka till frontenden
    res.send(newWineFile)
})

//DELETE (ta bort vin)
app.delete('/api_delete', function(req, res) {
    let filePath = __dirname + '/public/wines.json';
    let wineFile = fs.readFileSync(filePath);
    let wineArr = JSON.parse(wineFile); 
    // Gör en ny arr utan vinet som ska tas bort
    let newArr = wineArr.filter(obj => obj.id !== req.body.id);
    fs.writeFileSync(filePath, JSON.stringify(newArr))
    let newWineFile = fs.readFileSync(filePath)
    res.send(newWineFile)
})

//PUT (updatera vin)
app.put('/api_put', function(req,res){
    let filePath = __dirname + '/public/wines.json';
    let wineFile = fs.readFileSync(filePath);
    let wineArr = JSON.parse(wineFile); 
    // findIndex() går igenom vinlistan och returnerar indexet för objektet med samma id som vinet som skickats in
    let objIndex = wineArr.findIndex((obj => obj.id == req.body.id));
    console.log(wineArr[objIndex]);
    // Byter ut objektet i listan mot vinet som skickats in
    wineArr[objIndex] = req.body
    console.log(wineArr[objIndex]);
    fs.writeFileSync(filePath, JSON.stringify(wineArr))
    let newWineFile = fs.readFileSync(filePath)
    res.send(newWineFile)
})


app.listen(port, () => {
    console.log('Server is listening on port' + port)
});