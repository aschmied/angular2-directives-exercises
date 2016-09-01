import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]' // [] here selects by CSS style. leave out for selection by element. #: by id. .: by class.
})
export class HighlightDirective {
  @HostListener('mouseenter')
  onMouseEnter() {
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = 'white';
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    console.log('click target: ' + event.target);
  }

  @HostBinding('style.backgroundColor')
  get setColor() {
    return this.backgroundColor;
  }

  private backgroundColor = 'white';

  constructor() {
  }
}
