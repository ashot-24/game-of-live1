class  Vedma {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.kyanq = 5;
    }
    Directions() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 3, this.y - 3],
            [this.x - 3, this.y - 2],
            [this.x - 3, this.y - 1],
            [this.x - 3, this.y],
            [this.x - 3, this.y + 1],
            [this.x - 3, this.y + 2],
            [this.x - 3, this.y + 3],
            [this.x - 2, this.y + 3],
            [this.x - 1, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 1, this.y + 3],
            [this.x + 2, this.y + 3],
            [this.x + 3, this.y + 3],
            [this.x + 3, this.y + 2],
            [this.x + 3, this.y + 1],
            [this.x + 3, this.y],
            [this.x + 3, this.y - 1],
            [this.x + 3, this.y - 2],
            [this.x + 3, this.y - 3],
            [this.x + 2, this.y - 3],
            [this.x + 1, this.y - 3],
            [this.x, this.y - 3],
            [this.x - 1, this.y - 3],
            [this.x - 2, this.y - 3],
        ]
    }
    chooseCell(t) {
        this.Directions()
        let found = []
        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i])
                }
            }
        }
        return found;
    }
    stexcel() {
        this.jamanak = Math.floor(random(0, 10))
        this.jamanak--;
        if (this.jamanak == 0) {
            let azat = this.chooseCell(0)
            let stexcelXotaker = random(azat)
            if (stexcelXotaker) {
                let x = stexcelXotaker[0]
                let y = stexcelXotaker[1]
                matrix[y][x] = 2;
                let xotaker = new Eatgrass(x, y)
                eatArr.push(xotaker)
                this.kyanq--
                if (this.kyanq == 0) {
                    matrix[this.y][this.x] = 0
                    for (let i in  vedmaArr) {
                        if (this.x ==  vedmaArr[i].x && this.y ==  vedmaArr[i].y) {
                            vedmaArr.splice(i, 1)
                        }
                    }
                    
                }
            }
        }
    }
}