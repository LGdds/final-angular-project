import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Data } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  tasks: string;
  salary: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Maria Julia', tasks: "fazer o mundo melhor", salary: 15.211},
  {position: 2, name: 'Luiz', tasks: "fazer alguma coisa que preste", salary: 10.111},
  // ... rest of your data
];

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  displayedColumns: string[] = ['position', 'name', 'tasks', 'salary'];
  dataSource = ELEMENT_DATA;
}



export class ButtonOverviewExample {}
