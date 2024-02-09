import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ],
  styles: [`
    .textarea {
      padding: 24px;
      resize: none;
      font-family: inherit;
      font-size: inherit;
    }
  `],
  template: `
    <fieldset class="input-container">
      <label *ngIf="label" class="label">{{label}}</label>
      <textarea
        class="text-input textarea"
        rows="10"
        [(ngModel)]="value"
        (input)="onInput($any($event).target.value)"
      ></textarea>
    </fieldset>
  `,
})
export class TextareaComponent implements ControlValueAccessor {
  @Input() placeholder?: string;
  @Input() label?: string;
  disabled = false;

  value: string = '';

  onChange = (value: string) => {
  };

  onTouched = () => {
  };

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(value: string): void {
    this.value = value;
    this.onChange(this.value);
  }

}
