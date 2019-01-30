import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

import { Router } from '@angular/router';




@Component({
  selector: 'admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.css']
})



export class AdminTemplateComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;
  postions = ["student", "employee"];

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.registrationForm = this.fb.group({
      alternativeMo: this.fb.array([])
    });


  }

  addTextComponent(): FormGroup {
    return this.fb.group({
      type: "text",
      data: this.fb.group({
        question: ["what is your name?"],
        answer: ["yash"]
      })
    });
  }

  addRadioComponent(): FormGroup {
    return this.fb.group({
      type: ['radio'],
      data: this.fb.group({
        question: [''],
        name: ['tea'],
        labels: this.fb.array([])
      })
    });
  }
  get f() { return this.registrationForm; }
  
  getLabe(){
    return this.fb.group({
      option : ['good']
    });
  }
  addLabel(index){
    (index.get('data.labels') as FormArray).push(this.getLabe())
  }

  get alternativeMo() {
    return this.registrationForm.get('alternativeMo') as FormArray;
  }

  addAlternativeMobile() {
    this.alternativeMo.push(this.addRadioComponent());
    this.alternativeMo.push(this.addTextComponent());
  }

  onSubmit() {
    console.log("submit");
    this.submitted = true;

    // stop here if form is invalid
    if (this.registrationForm.invalid) {
      return;
    }

  }



}