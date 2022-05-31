import { Component, OnInit } from '@angular/core';
import {
  FormGroup, FormControl, Validators
} from '@angular/forms';
import { Request } from '../request';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
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

  desc = new FormControl('', [
    Validators.required,
    Validators.minLength(10)
  ]);

  info = "Utwórz kurs";

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

  constructor(private base: BaseService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  putData(): void {
    this.base.putRequest(this.request);
  }

  getData(): void {
    this.base.getRequest().subscribe(data => {
      this.request = data[0];
    })
  }

  submit() {
    if(this.email.valid && this.name.valid && this.lastname.valid && this.desc.valid) {
      this.request.p0 = this.name.value;
      this.request.p1 = this.lastname.value
      this.request.p2 = this.email.value;
      this.putData();
      this.getData();
      this.info="Kurs został utworzony!";
    }
    this.name.setValue("");
    this.lastname.setValue("");
    this.email.setValue("");
  }
}
