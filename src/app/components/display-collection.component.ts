import { Component, OnInit, Input } from '@angular/core';
import {fullAlbumList} from '../app.component';

/*
export interface albumDetail {
  album: string;
  artist: string;
  rating: number;
  img: string;
}
*/

@Component({
  selector: 'app-display-collection',
  templateUrl: './display-collection.component.html',
  styleUrls: ['./display-collection.component.css']
})



export class DisplayCollectionComponent implements OnInit {

  @Input()
  listUpdated: fullAlbumList[];
  //add2list: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
