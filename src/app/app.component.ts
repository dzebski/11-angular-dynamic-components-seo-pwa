import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {ModalComponent} from "./modal/modal.component";
import {RefDerective} from "./ref.derective";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // modal: boolean = false;
  @ViewChild(RefDerective, {static: false}) refDir!:RefDerective
  constructor(private resolver: ComponentFactoryResolver) {
  }
  showModalWindow() {
  const modalFactory = this.resolver.resolveComponentFactory(ModalComponent)
    this.refDir.containerRef.clear()
    const component = this.refDir.containerRef.createComponent(modalFactory)
    component.instance.modalTitle = 'New Dynamic Title'
    component.instance.close.subscribe(()=>{
      this.refDir.containerRef.clear()
    })
  }
}
//
