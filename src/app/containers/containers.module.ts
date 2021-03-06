import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardActionsComponent } from './card/card-actions/card-actions.component';
import { CardBodyComponent } from './card/card-body/card-body.component';
import { CardHeaderComponent } from './card/card-header/card-header.component';
import { CardTitleComponent } from './card/card-title/card-title.component';
import { CardFooterComponent } from './card/card-footer/card-footer.component';
import { ModalFooterComponent } from './modal/modal-footer/modal-footer.component';
import { ModalHeaderComponent } from './modal/modal-header/modal-header.component';
import { ModalBodyComponent } from './modal/modal-body/modal-body.component';
import { ModalComponent } from './modal/modal.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [CardActionsComponent, CardBodyComponent, CardHeaderComponent, CardTitleComponent, CardFooterComponent, CardComponent, ModalFooterComponent, ModalHeaderComponent, ModalBodyComponent, ModalComponent],
  imports: [
    CommonModule
  ],
  exports:[CardActionsComponent, CardBodyComponent, CardHeaderComponent, CardTitleComponent, CardFooterComponent, CardComponent, ModalFooterComponent, ModalHeaderComponent, ModalBodyComponent, ModalComponent ]
})
export class ContainersModule { }
