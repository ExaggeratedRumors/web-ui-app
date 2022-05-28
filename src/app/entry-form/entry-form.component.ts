import { Component, OnInit } from '@angular/core';
import {
  FormGroup, FormControl, Validators
} from '@angular/forms';
import { Request } from '../request';

@Component({
  selector: 'entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  constructor() { }


  requests: Request[] = [];
  request: Request = new Request(0, "","", "");

  ngOnInit(): void {
  }

  remove() {
     this.requests.pop();
  }

   submit() {
    this.requests.push(new Request(this.requests.length + 1, this.request.name, this.request.lastname, this.request.email));
  }
}
