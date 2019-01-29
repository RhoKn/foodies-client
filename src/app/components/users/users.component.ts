import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})

export class UserComponent implements OnInit {
    public tittle: String;

    constructor() {
        this.tittle = 'Usuarios';
    }

    ngOnInit() {
        console.log('Componente de usuarios');
    }
}
