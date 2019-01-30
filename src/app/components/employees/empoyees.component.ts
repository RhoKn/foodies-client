import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-employees',
    templateUrl: './empoyees.component.html',
    styleUrls: ['./empoyees.component.css']
})

export class EmployeesComponent implements OnInit {
    public tittle: String;

    constructor() {
        this.tittle = 'Employees';
    }

    ngOnInit() {
        console.log('Componente de empleados');
    }
}
