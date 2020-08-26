import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
@Input() result;
@Output() resClicked = new EventEmitter<{}>();
  constructor() { }

  ngOnInit(): void {
  }

  resultClicked(){
    this.resClicked.emit(this.result);
  }

}
