class Vector2 {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    static add(a,b) {
        return new Vector2(a.x+b.x,a.y+b.y);
    }
  
    static isEqual(a,b) {
        if(a.x == b.x && a.y == b.y) {
            return true;
        }
        else {
            return false;
        }
    }
}

function getDist(a,b) {
    return Math.sqrt((a.x-b.x)**2+(a.y-b.y)**2);
}
