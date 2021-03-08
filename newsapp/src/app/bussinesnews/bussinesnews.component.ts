import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../services/newsapiservices.service';

@Component({
  selector: 'app-bussinesnews',
  templateUrl: './bussinesnews.component.html',
  styleUrls: ['./bussinesnews.component.scss']
})
export class BussinesnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }
  businessnewsDisplay:any = [];

  ngOnInit(): void {
    this._services.businessNews().subscribe((result) =>{
      this.businessnewsDisplay = result.articles;
    });
  }

}
