import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
  styles: [`
  .custom-header {
  /* Header */

  /* Auto Layout */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;

  background-color: #2c2f33;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.06);
}
a {
  color: cyan;
}
a:hover {
  color: darkcyan;
}

  `]
})
export class NavBarComponent {
  constructor() {}

  ngOnInit() {}
}
