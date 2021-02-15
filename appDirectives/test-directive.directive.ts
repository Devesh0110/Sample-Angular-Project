import { Directive,ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) {
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','yellow');
   }

   @HostListener('mouseover')onClick(){
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','lightblue');
   }
   @HostListener('mouseout')oClick(){
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','grey');
   }

}
