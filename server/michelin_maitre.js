const maitreRestaurateur = require('./maitre');
const michelin = require('./michelin');
const fs = require("fs");
const similarity = require("similarity");

var restaurantMaitre;
var restaurantMichelin;

async function getMaitreRestaurateur() {
    try {
        for (var i = 1; i <= 150; i++) maitreRestaurateur.scrapeRestaurant(i)
        restaurantMaitre = maitreRestaurateur.get()
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

async function getMichelin() {
    try {
        restaurantMichelin = await michelin.get()
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

var json = JSON.parse(fs.readFileSync("./maitrerestaurateur.json").toString());
var json2 = JSON.parse(fs.readFileSync("./michelin.json").toString());


var final = [];
for (i = 0; i < json2.length; i++) {
    for (j = 0; j < json.length; j++) {
        if (json2[i].toLowerCase() == json[j].toLowerCase()) {
            final.push(json2[i]);
        }

    }
    console.log(final);
}





