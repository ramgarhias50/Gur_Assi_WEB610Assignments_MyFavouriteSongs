import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {
  @Input()
  hovereffect: boolean = false;
  @Input()
  boldeffect: boolean = false;
  constructor(private ele: ElementRef) { }
  @HostListener('mouseenter') onmousemove() {
    if (this.hovereffect) {
      this.ele.nativeElement.style.textDecoration = "underline";
      
    

    }
    if (this.boldeffect) {
      this.ele.nativeElement.style.fontWeight = 'bold';
    }


  }
  @HostListener('mouseleave') onMouseleave() {
    this.ele.nativeElement.style.textDecoration = 'none';
    this.ele.nativeElement.style.fontWeight = 'normal';
    this.ele.nativeElement.firstElementChild.borderRadius='none';
  }


}
