import { Component } from '@angular/core';
import {FormComponent} from './form/form.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    FormComponent,
    NgOptimizedImage
  ],
  styles: [`
    @import '../../assets/variables';

    :host {
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }

    #logo {
      display: block;
      margin-top: 30px;
      margin-left: 20px;
    }

    #header {
      margin-top: 60px;
      text-align: center;
      align-self: center;
      max-width: 630px;
      word-spacing: 2px;
    }

    #heading {
      font-size: 64px;
      letter-spacing: -3px;
      margin: 0;
    }

    #heading2 {
      font-size: 32px;
      letter-spacing: -2.2px;
      margin: 20px 0 60px;
    }


    #card {
      background-color: rgba($bg-color, 0.18);
      padding: 30px;
      border-radius: 30px;
      margin: 0 25px 25px;
      align-self: stretch;
    }


  `],
  template: `
    <img id="logo" ngSrc="../../assets/contact-form-icon.svg" width="100" height="30" alt="Becv-logo">
    <header id="header">
      <h1 id="heading">Interested in our business pricing?</h1>
      <p id="heading2">Fill out the form to view details and we’ll contact you as soon as possible.</p>
    </header>
    <main id="card">
      <app-form></app-form>
    </main>
  `,
})
export class ContactPageComponent {

}
