import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'App';
  name: string = 'Qasem';
  age: number = 21;
  salary: number = 850;

  customers: {
    customerNo: number;
    name: string;
    address: string;
    city: string;
    state: string;
  }[] = [
    {
      customerNo: 1,
      name: 'Ali',
      address: 'amman',
      city: 'amman',
      state: '123',
    },
    {
      customerNo: 2,
      name: 'Ali',
      address: 'amman',
      city: 'amman',
      state: '123',
    },
    {
      customerNo: 3,
      name: 'Ahmad',
      address: 'irbid',
      city: 'irbid',
      state: '123',
    },
  ];

  hasMoreThan2: boolean = this.customers.length > 2;


  HandleClick(evt: any) {
    this.name = evt.target.value + ' ...';
    console.log(evt.target.value);
  }

  handleSalary(evt: any) {
    this.salary = evt.target.value;
  }

  handleChange(evt: any) {
    let value = evt.target.value;
    console.log(value);
  }

  restAll() {
    this.name = '';
    this.age = 0;
    this.salary = 0;
  }
}
