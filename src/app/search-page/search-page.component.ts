import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  //styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  @ViewChild('inputField') inputField:ElementRef;
  input:string;
  resultList = [];
  detailResult;
  constructor() { }

  ngOnInit(): void {
  }

  async searchInput(){
    this.input = this.inputField.nativeElement.value;
    this.inputField.nativeElement.value = "";
    try{
      const res  = await axios('https://fakerapi.it/api/v1/persons?_quantity=1000');
      this.resultList= res.data.data.filter(el=>el.firstname.toLowerCase().includes(this.input.toLowerCase()));
      console.log(this.resultList);
    }catch(err){
  
    };
  }

  displayDetails(res){
    this.detailResult = res;
  }

}
