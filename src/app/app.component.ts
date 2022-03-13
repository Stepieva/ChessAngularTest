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
  fileContent: string | ArrayBuffer | null = null;
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

        //const formData = new FormData();

        let fileReader = new FileReader();  

        let self = this;
        fileReader.onloadend = function(x) {
          self.fileContent = fileReader.result;
        }

        fileReader.readAsText(file);

        //formData.append("thumbnail", file);

        //const upload$ = this.http.post("/api/thumbnail-upload", formData);

        //upload$.subscribe();
    }
  }

  imporPGN(){
    
    this.board.setPGN((this.fileContent || '').toString());
  }

   
}
