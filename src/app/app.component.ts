import { Component, ViewChild } from '@angular/core';
import {NgxChessBoardService} from 'ngx-chess-board';
import {NgxChessBoardView} from 'ngx-chess-board';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(private ngxChessBoardService: NgxChessBoardService) { }
  title = 'ChessTest';
  fileName = '';
  faFileUpload = faFileUpload;

  @ViewChild('board', { static: false })
  board!: NgxChessBoardView;


   reset() {
       this.board.reset();
   }


   onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("thumbnail", file);

        //const upload$ = this.http.post("/api/thumbnail-upload", formData);

        //upload$.subscribe();
    }
}

   
}
