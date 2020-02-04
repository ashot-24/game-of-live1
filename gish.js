var LivingCreature = require('./cnox')
module.exports = class Gish extends LivingCreature {

    constructor(x, y) {
        super(x,y);
        this.energy = 10
        
    }
    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    
    move() {
        let azat = this.chooseCell(0)
        let azat1 = this.chooseCell(1)
        let found = azat.concat(azat1)
       
        var datark = Math.floor(Math.random() * fund.length)
        if (datark) {
            let x = datark[0]
            let y = datark[1]
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 1;
            let g = new Grass(this.y, this.x)
            grassArr.push(g)
            this.y = y;
            this.x = x;
        }

    }
    eat() {
        let utel = this.chooseCell(2)
        let utel1 = this.chooseCell(3)
        let found1 = utel.concat(utel1)
       
        var utelutex = Math.floor(Math.random() * found1.length)
        if (uteluTex) {
            let x = uteluTex[0]
            let y = uteluTex[1]
            if (matrix[y][x] == 3) {
                matrix[y][x] = 4
                matrix[this.y][this.x] = 0;
                this.x = x;
                this.y = y;
                this.multiply++
                this.energy++

                for (let i in gishArr) {
                    if (x == gishArr[i].x && y == gishArr[i].y) {
                        gishArr.splice(i, 1)
                    }
                }
                if (this.multiply == 5) {
                    this.mul()
                    this.multiply = 0;
                }

            }
            else if (matrix[y][x] == 2) {
                matrix[y][x] = 4
                matrix[this.y][this.x] = 0;
                this.x = x;
                this.y = y;
                this.multiply++
                this.energy++

                for (let i in eatArr) {
                    if (x == eatArr[i].x && y == eatArr[i].y) {
                        eatArr.splice(i, 1)
                    }
                }
                if (this.multiply == 5) {
                    this.mul()
                    this.multiply = 0;
                }

            }
        }
        else
            this.move()
        this.energy--
        if (this.energy <= 0) {
            this.die()
        }
    }
    mul() {
        let azat = this.chooseCell(0)
        
        var kord = Math.floor(Math.random() * azat.length)
        if (kord) {
            let x = kord[0]
            let y = kord[1]
            matrix[y][x] = 4;
            let gish1 = new Gish(x, y)
            gish1Arr.push(gish1)
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (let i in gish1Arr) {
            if (this.x == gish1Arr[i].x && this.y == gish1Arr[i].y) {
                gish1Arr.splice(i, 1)
            }
        }

    }

}
