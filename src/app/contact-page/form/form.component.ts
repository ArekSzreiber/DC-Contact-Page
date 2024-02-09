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

    #form-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      column-gap: 16px;
    }

    $column-width: 520px;

    .flex-child {
      flex-grow: 1;
      flex-basis: $column-width;
    }

    .flex-colspan2 {
      flex-basis: calc(2 * $column-width);
    }

    @media screen and (min-width: 1024px) {
      $column-width: 370px;
      .flex-child {
        flex-basis: $column-width;
      }

      .flex-colspan2 {
        flex-basis: calc(2 * $column-width);
      }
    }

    @media screen and (min-width: 1280px) {
      $column-width: 500px;
      .flex-child {
        flex-basis: $column-width;
      }

      .flex-colspan2 {
        flex-basis: calc(2 * $column-width);
      }
    }


  `],
  template: `
    <form [formGroup]="form" id="form-container">

      <app-input
        class="flex-child"
        formControlName="name"
        label="Name"
        placeholder="Ethan Johnson"
      ></app-input>

      <app-input
        class="flex-child"
        formControlName="email"
        label="Company Email"
        placeholder="ethan@johnson.com"
      ></app-input>

      <app-select
        class="flex-child"
        formControlName="companySize"
        [options]="companySizeOptions"
        label="Company Size"
      ></app-select>

      <app-select
        class="flex-child"
        formControlName="subject"
        [options]="subjects"
        label="Subject"
      ></app-select>

      <app-textarea
        class="flex-child flex-colspan2"
        formControlName="message"
        label="Message"
      ></app-textarea>

      <app-button class="flex-child flex-colspan2">Contact Sales</app-button>
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

}
