import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  styles: [`

    @import '../../../../assets/variables';

    #button {
      font-size: 20px;
      color: $button-text-color;
      font-weight: 600;
      display: block;
      width: 100%;
      border: none;
      padding: 25px;
      cursor: pointer;
    }
  `],
  template: `
    <button type="button" id="button" class="border-radius">
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {

}
