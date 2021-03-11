import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './navbar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [NavBarComponent, SharedModule]
})
export class NavbarModule { }
