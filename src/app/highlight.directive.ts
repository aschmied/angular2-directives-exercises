import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]' // [] here selects by CSS style. leave out for selection by element. #: by id. .: by class.
})
export class HighlightDirective {
  @HostListener('mouseenter')
  onMouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    console.log('click target: ' + event.target);
  }

  @HostBinding('style.backgroundColor')
  get setColor() {
    return this.backgroundColor;
  }

  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'green';
  private backgroundColor: string;

  constructor() {
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
