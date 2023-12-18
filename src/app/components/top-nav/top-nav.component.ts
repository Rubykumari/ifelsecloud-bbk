import { Component } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {
  isStripeVisible= true;
  constructor(){}
  hideStripe(){
    this.isStripeVisible= false;
  }
}
