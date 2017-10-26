import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildMotionAlertModule } from 'buildmotion-alert';
import { BuildMotionLoggingModule } from 'buildmotion-logging';
import { BuildMotionFoundationModule } from 'buildmotion-foundation';

@NgModule({
  imports: [
    CommonModule,
    BuildMotionAlertModule,
    BuildMotionFoundationModule,
    BuildMotionLoggingModule
  ],
  declarations: [],
  exports:[]
})
export class BuildMotionComponentModule { }
