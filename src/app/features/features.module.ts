import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashlistComponent } from './components/dashlist/dashlist.component';

@NgModule({
  declarations: [FeaturesComponent, DashlistComponent],
  imports: [CommonModule, FeaturesRoutingModule, SharedModule],
})
export class FeaturesModule {}
