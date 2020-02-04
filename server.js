var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


var Grass = require('./class')
var Eatgrass = require('./xotaker')
var Gishatich = require('./gishatich')
var Gish = require('./gish')
var Vedma = require('./vedma')
app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);
matrix = []; // Մատրիցի ստեղծում
let rows = 25; // Տողերի քանակ
let columns = 25; // Սյուների քանակ

grassArr = []; //խոտերի զանգված
eatArr = []; //խոտակերների զանգված
gishArr = [] //gishatichneri zangvac
vedmaArr = []
gish1Arr = []



for (let y = 0; y < rows; y++) {
    matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
    for (let x = 0; x < columns; x++) {
        let a = Math.floor(Math.random() * 100);
        if (a >= 0 && a < 20) {
            matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
        }
        if (a >= 20 && a < 60) {
            matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
        }
        else if (a >= 60 && a < 80) {
            matrix[y][x] = 2; // Մատրիցի 20 տոկոսը կլինի 2
        }
        else if (a >= 80 && a < 90) {
            matrix[y][x] = 3; // Մատրիցի 10 տոկոսը կլինի 3
        }
        else if (a >= 90 && a < 99) {
            matrix[y][x] = 4; // Մատրիցի 10 տոկոսը կլինի 4
        }
        else if (a >= 99 && a < 100) {
            matrix[y][x] = 5; // Մատրիցի 0 տոկոսը կլինի 5
        }
    }
}

for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 2) {
            var eatgrass = new Eatgrass(x, y);
            eatArr.push(eatgrass);
        }
        else if (matrix[y][x] == 1) {
            var grass = new Grass(x, y);
            grassArr.push(grass);
        }
        else if (matrix[y][x] == 3) {
            let gishatich = new Gishatich(x, y)
            gishArr.push(gishatich)
        }
        else if (matrix[y][x] == 4) {
            let gish1 = new Gish(x, y)
            gish1Arr.push(gish1)
        }
        else if (matrix[y][x] == 5) {
            let vedma = new Vedma(x, y)
            vedmaArr.push(vedma)
        }
    }
}

function game() {
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in eatArr) {
        eatArr[i].eat();
    }
    for (let i in gishArr) {
        gishArr[i].eat()
    }
    for (let u in gish1Arr) {
        gish1Arr[u].eat()
    }
    for (let i in vedmaArr) {
        vedmaArr[i].stexcel()
    }
    io.sockets.emit("drawM", matrix)
}
setInterval(game, 1000)