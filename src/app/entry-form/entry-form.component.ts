import { Component, OnInit } from '@angular/core';
import {
  FormGroup, FormControl, Validators
} from '@angular/forms';
import { Request } from '../request';
import { BaseService } from '../base.service';

@Component({
  selector: 'entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);

  lastname = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);

  info = "Zapisz się na kurs!";

  request: Request = {
    id: 0,
    p0: '',
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    p5: '',
    p6: '',
    p7: '',
    p8: '',
    p9: ''
  };

  requests: Request[] = [];

  constructor(private base: BaseService) { }

  ngOnInit(): void {
  }

  getData( ): void {
    this.base.getRequest().subscribe(t_request => {
      this.request = t_request;
    });
  }

  remove() {
     this.requests.pop();
  }

  submit() {
  if(this.email.valid && this.name.valid && this.lastname.valid) {
    this.request.p0 = this.name.value;
    this.request.p1 = this.lastname.value
    this.request.p2 = this.email.value;
    this.getData();
    this.requests.push(this.request);
    this.info="Zostałeś zapisany!";
  }
  this.name.setValue("");
  this.lastname.setValue("");
  this.email.setValue("");
  }
}
