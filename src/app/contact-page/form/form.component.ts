import {Component} from '@angular/core';
import {TextareaComponent} from './textarea/textarea.component';
import {ButtonComponent} from './button/button.component';
import {InputComponent} from './input/input.component';
import {SelectComponent} from './select/select.component';
import {FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    TextareaComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  styles: [`
  `],
  template: `
    <form [formGroup]="form" action="">

      <app-input
        formControlName="name"
        label="Name"
        placeholder="Ethan Johnson"
      ></app-input>

      <app-input
        formControlName="email"
        label="Company Email"
        placeholder="ethan@johnson.com"
      ></app-input>

      <app-select formControlName="companySize" [options]="companySizeOptions">
        <label>Company Size</label>
      </app-select>

      <app-select formControlName="subject" [options]="subjects">
        <label>Subject</label>
      </app-select>

      <app-textarea formControlName="message">
        <label>Message</label>
      </app-textarea>
      <app-button (click)="logForm()">Contact Sales</app-button>
    </form>
  `,
})
export class FormComponent {
  form: FormGroup;
  companySizeOptions: string[] = [
    '1-4 employees',
    '5-9 employees',
    '10-49 employees',
    '50-100 employees',
    '101-499 employees',
    '500+ employees',
  ];
  subjects: string[] = [
    'Building Landing pages',
    'Designing Landing pages',
    'Integrating Landing pages',
    'Optimizing Landing pages',
  ];

  constructor(
    private builder: NonNullableFormBuilder,
  ) {
    this.form = builder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      companySize: ['50-100 employees', [Validators.required]],
      subject: ['Building Landing pages', [Validators.required]],
      message: ['50-100 employees', [Validators.required]],
    });
  }

  logForm() {
    console.log(this.form.value);
  }
}
