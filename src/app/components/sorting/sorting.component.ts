import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { options } from './sorting-options';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {
  options: Array<Object> = options;  

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSelectChange(value) {
    this.dataService.changeOption(+value);
  }

}
