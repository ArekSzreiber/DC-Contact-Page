import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  styles: [`
    @import '../../../../assets/variables';

    .input {
      height: 40px;
      padding: 14px 24px;

      &::placeholder {
        color: $placeholder-text-color;
        opacity: 1;
      }
    }

  `],
  template: `
    <fieldset class="input-container">
      <label *ngIf="label" class="label">{{label}}</label>
      <input
        class="input text-input border-radius"
        type="text"
        [(ngModel)]="value"
        [placeholder]="placeholder"
        (input)="onInput($any($event).target.value)"
      >
    </fieldset>
  `,
})
export class InputComponent implements ControlValueAccessor {
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
