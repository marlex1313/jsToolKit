class Grid {
    constructor(cellWidth,cellHeight,border) {
        this.cw = cellWidth;
        this.ch = cellHeight;
        this.b = border;
    }

    static draw(grid) {
        ctx.fillStyle = "lightgrey";
        for(var y = 0;y<c.height;y+=grid.ch) {
            ctx.fillRect(0,y-grid.b/2,c.width,grid.b);
        }
        for(var x = 0;x<c.width;x+=grid.cw) {
            ctx.fillRect(x-grid.b/2,0,grid.b,c.height);
        }
    }
    
    //gets the origin of the cell in witch are mx and my
    static getCell(grid,mX,mY) {
        var x = 0;
        var y = 0;
        while(x<mX) {
            x+=grid.cw;
        }
        x-=grid.cw;
        while(y<mY) {
            y+=grid.ch;
        }
        y-=grid.ch;
        return new Vector2(x,y);
    }
}
