import { MdButtonModule, MdToolbarModule, MdIconModule } from '@angular/material'
import { NgModule } from '@angular/core'

@NgModule({
  imports: [MdButtonModule, MdToolbarModule, MdIconModule],
  exports: [MdButtonModule, MdToolbarModule, MdIconModule],
})
export class MaterialModule { }
