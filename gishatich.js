var LivingCreature = require('./cnox')
module.exports = class Gishatich extends LivingCreature {
    constructor(x, y,) {
        super(x,y,);
        this.energy = 5;
        // this.multiply = 0;
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
        let qaylel = this.chooseCell(0)
        var sharjvel = Math.floor(Math.random() * qaylel.length)
        if (sharjvel) {
            let x = sharjvel[0]
            let y = sharjvel[1]
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0
            this.x = x;
            this.y = y;
        }
    }
    mul() {
        let findCords = this.chooseCell(0)
        var cord = Math.floor(Math.random() * findCords.length)
        if (cord) {
            let x = cord[0]
            let y = cord[1]
            matrix[y][x] = 5
            let norGishatich = new Gishatich(x, y)
            gishArr.push(norGishatich)
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (let i in gishArr) {
            if (this.x == gishArr[i].x && this.y == gishArr[i].y) {
                gishArr.splice(i, 1)
            }
        }
    }
    eat() {
        console.log("Gihs utuma xotaker")
        let findCords = this.chooseCell(2)
        var cord = Math.floor(Math.random() * fundCords.length)
        if (cord) {
            let x = cord[0];
            let y = cord[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            this.energy++;
            this.multiply++;
            for (let i in eatArr) {
                if (this.x == eatArr[i].x && this.y == eatArr[i].y) {
                    eatArr.splice(i, 1)
                }
            }
            if (this.multiply == 5) {
                this.mul()
                this.multiply = 0;
            }
        }
        else {
            this.move()
            this.energy--
            if (this.energy == 0) {
                this.die()
            }
        }
    }
}