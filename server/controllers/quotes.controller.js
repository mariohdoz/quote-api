const path = require('path');

const DATA_PATH = path.join(__dirname + '/../data/db.json');
let data = require(DATA_PATH);
const fs = require('fs');

function render(file, res){
    return res.sendFile(path.join(__dirname + `/../views/${file}.html`));
};

class QuoteController {
    async index (req, res) {
        return render('quotes', res);
    };

    async get (req, res) {
        return res.send(data);
    };

    async add (req, res) {

        const {body: quote} = req; 
        const lastQuote = data[data.lenght - 1];
        const {id} = lastQuote;
        quote.id = id+1;
        data.push(quote);
        fs.writeFileSync(DATA_PATH, JSON.stringify(data));
        return res.status(201).send();

    }

}

module.exports = new QuoteController();
