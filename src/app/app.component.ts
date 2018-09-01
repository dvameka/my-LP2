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
    { album: "The Essential Michael Jackson", artist: "Michael Jackson", rating: 8, img: "../../assets/MJ_bad.jpg" },
    { album: "Bad", artist: "Michael Jackson", rating: 10, img: "../../assets/MJessential.jpg" }
    { album: "Aretha Franklin", artist: "Aretha Franklin", rating: 9, img: "../../assets/arethafranklin.jpg" }

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
