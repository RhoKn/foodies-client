import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    public tittle: String;

    constructor() {
        this.tittle = 'Inicio de sesión';
    }

    ngOnInit() {
        console.log('Componente de inicio de sesión');
    }
}
