import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlight]' // [] here selects by CSS style. leave out for selection by element. #: by id. .: by class.
})
export class HighlightDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }
}
