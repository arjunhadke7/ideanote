import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdeaDetailPageRoutingModule } from './idea-detail-routing.module';

import { IdeaDetailPage } from './idea-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdeaDetailPageRoutingModule
  ],
  declarations: [IdeaDetailPage]
})
export class IdeaDetailPageModule {}
