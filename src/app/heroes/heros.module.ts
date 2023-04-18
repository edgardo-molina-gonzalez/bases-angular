import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HeroListComponent } from './lista/hero-list.component';

@NgModule({
  declarations: [HeroComponent, HeroListComponent],
  imports: [CommonModule],
  exports: [HeroComponent, HeroListComponent],
})
export class HerosModule {}
