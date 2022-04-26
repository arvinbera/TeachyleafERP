import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {

  constructor(public fb: FormBuilder) { }
  registrationForm = this.fb.group({
    addDynamicElement: this.fb.array([]),
  });
  /*############### Add Dynamic Elements ###############*/
  get addDynamicElement() {
    return this.registrationForm.get('addDynamicElement') as FormArray;
  }
  addItems() {
    this.addDynamicElement.push(this.fb.control(''));
  }
  // Submit Registration Form
  onSubmit() {
    alert(JSON.stringify(this.registrationForm.value));
  }
  ngOnInit(): void {
  }

}
