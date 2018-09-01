import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';


export interface albumDetail {
  album: string;
  artist: string;
  rating: number;
  img: string;
}

@Component({
  selector: 'app-add-new-album',
  templateUrl: './add-new-album.component.html',
  styleUrls: ['./add-new-album.component.css']
})

export class AddNewAlbumComponent implements OnInit {

  myAlbum: albumDetail;

  @Output()
  // albumAdded = new EventEmitter<string>();
  albumAdded = new EventEmitter();

     
  constructor() { 
  }

  ngOnInit() {
  }


  addAlbum(form: NgForm) {
  
    
    const albumNameValue = form.value.albumName;
    const artistNameValue = form.value.artistName;
    const ratingValue = form.value.rating;
    const imgURLValue = form.value.imgURL;

    this.myAlbum = { album:albumNameValue, artist:artistNameValue, rating:ratingValue, img:imgURLValue };


    console.log(albumNameValue,artistNameValue,ratingValue,imgURLValue);
    
  //  this.myAlbum.push({album:albumNameValue, artist:artistNameValue, rating:ratingValue, img:imgURLValue });
  //  this.albumAdded.emit({ album:albumNameValue, artist:artistNameValue, rating:ratingValue, img:imgURLValue });

    this.albumAdded.emit(this.myAlbum);
    

  // this.myAlbum.push(albumNameValue, artistNameValue, ratingValue);
  
  
  //this.albumAdded.next("Album Name:  "+albumNameValue+"Artist Name:  "+artistNameValue+"Rating:  "+ratingValue+"Album Art"+imgURLValue+"");
  
    console.log("*Loggin this  ", this.myAlbum);
       
  }

}
