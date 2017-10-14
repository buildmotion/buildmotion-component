import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildMotionAlertModule } from 'buildmotion-alert';
import { BuildmotionLoggingModule } from 'buildmotion-logging';
import { BuildmotionFoundationModule } from 'buildmotion-foundation';

@NgModule({
  imports: [
    CommonModule,
    BuildMotionAlertModule,
    BuildmotionFoundationModule,
    BuildmotionLoggingModule
  ],
  declarations: [],
  exports:[]
})
export class BuildMotionComponentModule { }
