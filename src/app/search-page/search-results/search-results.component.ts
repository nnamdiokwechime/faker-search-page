import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  search: string; 
  resultList = [];
  constructor() { }

  ngOnInit(): void {
  }

  async getData(){
    try{
      const res  = await axios('https://fakerapi.it/api/v1/persons?_quantity=1000');
      this.resultList= res.data.data.filter(el=>el.firstname === ('Emily'));
      console.log(this.resultList);
    }catch(err){

    };
  }

}
