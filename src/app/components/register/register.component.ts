import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    public tittle: String;

    constructor() {
        this.tittle = 'Registro';
    }

    ngOnInit() {
        console.log('Componente de registro');
    }
}
