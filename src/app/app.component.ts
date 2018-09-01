import { Component, EventEmitter, Output, Input } from '@angular/core';
import {albumDetail} from './components/add-new-album.component';


export interface fullAlbumList {
  album: string;
  artist: string;
  rating: number;
  img: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'my-LP2';

  myAlbumList: fullAlbumList[] = [
    { album: "Best of Michael Jackson", artist: "Michael", rating: 10, img: "http://" },
    { album: "Best of 80s", artist: "Rick Astley", rating: 7, img: "http://" }
  ];

@Input()
album: string[]=[];

@Output()
listUpdated = new EventEmitter();

addToList(album: albumDetail) {
  console.log (">>> New album passed: ", album);     
  
  this.myAlbumList.push(album);
  console.log (">>> List Added : ", this.myAlbumList);     

  this.listUpdated.emit(this.myAlbumList);

  }

}
