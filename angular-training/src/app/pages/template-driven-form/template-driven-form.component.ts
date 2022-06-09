import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit {
  user: any = {
    name: '',
    email: '',
    gender: '',
    note: '',
    agreeTc: false,
  };
  genders: string[] = ['Male', 'Female', 'Other'];

  constructor() {}

  ngOnInit(): void {}

  onSubmit(event: any) {
    console.log("[FormSubmitted]", event.form.value);
    
  }
}
