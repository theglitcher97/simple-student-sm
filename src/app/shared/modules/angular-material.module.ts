import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const angularMaterialModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
];

@NgModule({
  imports: [...angularMaterialModules],
  exports: [...angularMaterialModules],
})
export class AngularModules {}
