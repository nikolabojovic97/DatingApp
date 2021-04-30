import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbDropdownModule,
    NgbNavModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    TabsModule,
    NgxGalleryModule,
  ],
  exports: [
    NgbDropdownModule,
    NgbNavModule,
    ToastrModule,
    TabsModule,
    NgxGalleryModule,
  ],
})
export class SharedModule { }
