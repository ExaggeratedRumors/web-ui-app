import { Component, OnInit} from '@angular/core';
import {
  FormGroup, FormControl, Validators
} from '@angular/forms';
import { Student } from '../student';
// https://www.plukasiewicz.net/Angular/Angular8Forms


@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.css']
})
export class TempFormComponent implements OnInit {
  constructor() { }

  students: Student[] = [
    {id: 1, index: '123456', name: 'Jan', lastname: 'Kowalski'},
    {id: 2, index: '133456', name: 'Maciej', lastname: 'Markowski'},
    {id: 3, index: '153456', name: 'Ewa', lastname: 'Kopcińska'},
  ];

  student: Student = new Student(0, "", "", "");

  ngOnInit() {
  }

  removeStudent() {
    this.students.pop();
  }

  addStudent() {
    this.students.push(new Student(this.students.length + 1, this.student.index , this.student.name, this.student.lastname));
  }
}
