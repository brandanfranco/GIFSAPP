import { Component, OnInit } from '@angular/core';


import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {
  
  

 

  constructor( private gifsservice:GifsService ){

  }

    get historial(){
      return this.gifsservice.historial
    }
 

    buscar(termino:string){
        this.gifsservice.buscarGifts(termino)
    }
 

}
