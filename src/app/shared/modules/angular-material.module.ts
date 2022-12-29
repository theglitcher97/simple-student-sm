import { NgModule } from "@angular/core";

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';

const angularMaterialModules = [
  MatToolbarModule, MatIconModule
]

@NgModule({
  imports: [...angularMaterialModules],
  exports: [...angularMaterialModules]
})
export class AngularModules {}