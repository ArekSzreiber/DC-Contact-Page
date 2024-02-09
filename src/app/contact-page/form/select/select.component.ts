import {Component, forwardRef, Input} from '@angular/core';
import {FormsModule, NG_VALUE_ACCESSOR, SelectControlValueAccessor} from '@angular/forms';
import {NgIf} from '@angular/common';


export interface Option {
  label: string;
  value: any;
}
@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ],
  styleUrls: ['./select.component.scss'],
  template: `
    <fieldset class="input-container">
      <label *ngIf="label" class="label">{{label}}</label>

      <select [(ngModel)]="value" class="select text-input border-radius">
        @for (option of options; track option) {
          <option [value]="option">{{ option }}</option>
        }
      </select>
    </fieldset>
  `,
})
export class SelectComponent extends SelectControlValueAccessor {
  @Input() options: string[] = [];
  @Input() label?: string;
}
