import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() result; 
  @Output() resClicked = new EventEmitter<{}>();
  constructor() { }

  ngOnInit(): void {
  }

  resultClicked(){
    this.resClicked.emit(this.result);
    console.log(this.result);
  }
  

}
