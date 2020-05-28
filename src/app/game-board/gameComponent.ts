import { Component, Input, Output, EventEmitter } from "@angular/core";
import { GridBoard } from '../models/gridBoard';

@Component({
    selector: 'game-of-life',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})

export class GameComponent{
    @Input() gridBoard: GridBoard = new GridBoard(0);
}