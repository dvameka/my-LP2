import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//added by me
import {FormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNewAlbumComponent } from './components/add-new-album.component';
import { DisplayCollectionComponent } from './components/display-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewAlbumComponent,
    DisplayCollectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
