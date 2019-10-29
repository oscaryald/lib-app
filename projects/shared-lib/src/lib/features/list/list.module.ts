import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list.component';

@NgModule({
  declarations: [ListComponent],
  exports: [ListComponent],
  imports: [CommonModule],
})
export class ListModule {}
