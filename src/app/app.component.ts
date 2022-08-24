import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {ModalComponent} from "./modal/modal.component";
import {RefDerective} from "./ref.derective";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // modal: boolean = false;
  @ViewChild(RefDerective, {static: false}) refDir!:RefDerective

  constructor(
    private resolver: ComponentFactoryResolver,
    private title: Title,
    private meta: Meta
    ) {
    title.setTitle('AppComponentPage')
    meta.addTags([
      {name: 'keywords', content: 'google'},
      {name: 'description', content: 'Hello World OZOZOZOOZ'}
    ])
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
