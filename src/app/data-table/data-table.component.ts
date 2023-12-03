import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {

  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  dataSource = this.dataService.getData();

  constructor(private dataService: DataService) {}

  deleteItem(id: number) {
    this.dataService.deleteItem(id);
    this.dataSource = this.dataService.getData();
  }

  modifyItem(id: number) {

  }
}
