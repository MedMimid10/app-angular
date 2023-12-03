// data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Example data, replace this with your actual data
  private data = [
    { id: 1, name: 'John Doe', email: 'John@gmail.com' },
    { id: 2, name: 'Alice Smith', email: 'Alice@gmail.com' },
    { id: 3, name: 'Mimid Ben', email: 'Mimid@gmail.com' },
    { id: 4, name: 'Bob Johnson', email: 'Bob@gmail.com' },
    { id: 5, name: 'Norhan Darmans', email: 'Norhan@gmail.com' }
  ];

  getData() {
    return this.data;
  }

  deleteItem(id: number) {
    this.data = this.data.filter(item => item.id !== id);
  }

  modifyItem(id: number) {
    
  }
}
