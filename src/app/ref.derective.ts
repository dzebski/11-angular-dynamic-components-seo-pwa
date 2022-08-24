import {Directive, ViewContainerRef} from "@angular/core";

@Directive({
  selector: '[AppRef]'
})
export class RefDerective {
  constructor(public containerRef: ViewContainerRef) {
  }
}
