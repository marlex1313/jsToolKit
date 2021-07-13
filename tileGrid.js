class SquareTile {
    constructor(x,y,s,id) {
        this.x = x;
        this.y = y;
        this.s = s;
        this.id = id;
        this.color = "grey";
    }

    isTile(x,y) {
        if(this.x < x && this.x + this.s > x && this.y < y && this.y + this.s > y) {
            return true;
        }
    }
}

class Grid {
    constructor(line,columns,sx,sy,cellSize,array) {
        for(var y=0;y<columns;y++) {
            for(var x=0;x<line;x++) {
                array[array.length] = new SquareTile(sx + x*cellSize,sy+y*cellSize,cellSize,array.length);
            }
        }
    }
}
