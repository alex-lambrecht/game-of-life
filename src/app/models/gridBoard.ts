export class GridBoard {
    grid: Array<Array<boolean>>;

    constructor(gridSize: number){
        this.grid = Array<Array<boolean>>();
        for(var i = 0; i < gridSize; i++){
            this.grid[i] = [];
            for(var j = 0; j < gridSize; j++){
                this.grid[i][j] = true;
            }
        }
        this.populateGrid();
    }

    populateGrid() { //fill the grid randomly
        for (var j = 0; j < this.grid.length; j++) { //iterate through rows
            for (var k = 0; k < this.grid[j].length; k++) { //iterate through columns
                var rawRandom = Math.random(); //get a raw random number
                var improvedNum = (rawRandom * 2); //convert it to an int
                var randomBinary = Math.floor(improvedNum);
                if (randomBinary === 1) {
                    this.grid[j][k] = true;
                } else {
                    this.grid[j][k] = false;
                }
            }
        }
    }
}