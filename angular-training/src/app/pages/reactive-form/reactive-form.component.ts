import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  user: any = {
    name: '',
    email: '',
    gender: '',
    note: '',
    agreeTc: false,
  };
  userForm: FormGroup;
  genders: string[] = ['Male', 'Female', 'Other'];

  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email,
      ]),
      gender: new FormControl(this.user.gender, [Validators.required]),
      note: new FormControl(this.user.note),
      agreeTc: new FormControl(this.user.agreeTc, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log('[FormSubmitted]', this.userForm.value);
  }

  control(name: string) {
    return this.userForm.get(name);
  }
}
