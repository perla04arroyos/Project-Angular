import { Component, OnInit } from '@angular/core'
import { Zapatilla } from '../models/zapatilla'

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit {
     public titulo: string;
     public zapatillas: Array<Zapatilla>;

     constructor() {
         this.titulo = "Las zapatillas"
         this.zapatillas = [
             new Zapatilla("Rebok Clasic","Rebok","Negro",1500,true),
             new Zapatilla("Vans","Vans","Gris",1000,true),
             new Zapatilla("Nike Air","Nike","Rosa con blanco",200,true)
         ];
     }

     ngOnInit(){
         console.log(this.zapatillas);
     }
}