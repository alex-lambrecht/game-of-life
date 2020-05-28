import { Component } from '@angular/core';
import { GridBoard } from './models/gridBoard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Game of Life';
  public gridSize = 30;
  public gridBoard : GridBoard;
  public interval;

  constructor(){
    this.gridBoard = new GridBoard(this.gridSize);
  }

  startGame(){
    this.interval = setInterval(() => {
      this.updateGrid();
    }, 100);
  }

  stopGame(){
    if(this.interval){
      clearInterval(this.interval);
    }
  }

  updateGrid() { //perform one iteration of grid update
    for (var j = 0; j < this.gridBoard.grid.length; j++) { //iterate through rows
      for (var k = 0; k < this.gridBoard.grid[j].length; k++) { //iterate through columns
        var totalCells = 0;
        //add up the total values for the surrounding cells
        //if top row and first column
        if(j === 0 && k == 0){
          totalCells += this.gridBoard.grid[j][k + 1] ? 1 : 0; //middle right
          totalCells += this.gridBoard.grid[j + 1][k] ? 1 : 0; //bottom center
          totalCells += this.gridBoard.grid[j + 1][k + 1] ? 1 : 0; //bottom right
        }
        //if top row and last column
        else if(j === 0 && k === this.gridBoard.grid[j].length-1){
          totalCells += this.gridBoard.grid[j][k-1] ? 1 : 0; //middle left
          totalCells += this.gridBoard.grid[j+1][k-1] ? 1 : 0; //bottom left
          totalCells += this.gridBoard.grid[j + 1][k] ? 1 : 0; //bottom center
        }
        //if bottom row and first column
        else if(j === this.gridBoard.grid.length-1 && k === 0){
          totalCells += this.gridBoard.grid[j-1][k] ? 1 : 0; //top center
          totalCells += this.gridBoard.grid[j-1][k+1] ? 1 : 0; //top right
          totalCells += this.gridBoard.grid[j][k + 1] ? 1 : 0; //middle right
        }
        //if bottom row and last column
        else if(j === this.gridBoard.grid.length-1 && k === this.gridBoard.grid[j].length-1){
          totalCells += this.gridBoard.grid[j-1][k-1] ? 1 : 0; //top left
          totalCells += this.gridBoard.grid[j-1][k] ? 1 : 0; //top center
          totalCells += this.gridBoard.grid[j][k-1] ? 1 : 0; //middle left
        }
        //if top row
        else if(j === 0){
          totalCells += this.gridBoard.grid[j][k-1] ? 1 : 0; //middle left
          totalCells += this.gridBoard.grid[j][k + 1] ? 1 : 0; //middle right
          totalCells += this.gridBoard.grid[j+1][k-1] ? 1 : 0; //bottom left
          totalCells += this.gridBoard.grid[j + 1][k] ? 1 : 0; //bottom center
          totalCells += this.gridBoard.grid[j + 1][k + 1] ? 1 : 0; //bottom right
        }
        //if first column
        else if(k === 0){
          totalCells += this.gridBoard.grid[j-1][k] ? 1 : 0; //top center
          totalCells += this.gridBoard.grid[j-1][k+1] ? 1 : 0; //top right
          totalCells += this.gridBoard.grid[j][k + 1] ? 1 : 0; //middle right
          totalCells += this.gridBoard.grid[j + 1][k] ? 1 : 0; //bottom center
          totalCells += this.gridBoard.grid[j + 1][k + 1] ? 1 : 0; //bottom right
        }
        //if last column
        else if(k === this.gridBoard.grid[j].length-1){
          totalCells += this.gridBoard.grid[j-1][k-1] ? 1 : 0; //top left
          totalCells += this.gridBoard.grid[j-1][k] ? 1 : 0; //top center
          totalCells += this.gridBoard.grid[j][k-1] ? 1 : 0; //middle left
          totalCells += this.gridBoard.grid[j+1][k-1] ? 1 : 0; //bottom left
          totalCells += this.gridBoard.grid[j + 1][k] ? 1 : 0; //bottom center
        }
        //if bottom row
        else if(j === this.gridBoard.grid.length-1){
          totalCells += this.gridBoard.grid[j-1][k-1] ? 1 : 0; //top left
          totalCells += this.gridBoard.grid[j-1][k] ? 1 : 0; //top center
          totalCells += this.gridBoard.grid[j-1][k+1] ? 1 : 0; //top right
          totalCells += this.gridBoard.grid[j][k-1] ? 1 : 0; //middle left
          totalCells += this.gridBoard.grid[j][k + 1] ? 1 : 0; //middle right
        }else{
          totalCells += this.gridBoard.grid[j-1][k-1] ? 1 : 0; //top left
          totalCells += this.gridBoard.grid[j-1][k] ? 1 : 0; //top center
          totalCells += this.gridBoard.grid[j-1][k+1] ? 1 : 0; //top right
          totalCells += this.gridBoard.grid[j][k-1] ? 1 : 0; //middle left
          totalCells += this.gridBoard.grid[j][k + 1] ? 1 : 0; //middle right
          totalCells += this.gridBoard.grid[j+1][k-1] ? 1 : 0; //bottom left
          totalCells += this.gridBoard.grid[j + 1][k] ? 1 : 0; //bottom center
          totalCells += this.gridBoard.grid[j + 1][k + 1] ? 1 : 0; //bottom right
        }
        //apply the rules to each cell
        if (!this.gridBoard.grid[j][k]) {
          if(totalCells === 3){
            this.gridBoard.grid[j][k] = true;
          }
        }
        if(this.gridBoard.grid[j][k]){
          if(totalCells < 2){
            this.gridBoard.grid[j][k] = false;
          }else if(totalCells > 3){
            this.gridBoard.grid[j][k] = false;
          }else if(totalCells === 2 || totalCells === 3){
            this.gridBoard.grid[j][k] = true;
          }
        }
      }
    }
  }
}
