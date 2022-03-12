import { Component, ViewChild } from '@angular/core';
import {NgxChessBoardService} from 'ngx-chess-board';
import {NgxChessBoardView} from 'ngx-chess-board';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(private ngxChessBoardService: NgxChessBoardService) { }
  title = 'ChessTest';
  

  @ViewChild('board', { static: false })
  board!: NgxChessBoardView;


   reset() {
       this.board.reset();
   }

}
