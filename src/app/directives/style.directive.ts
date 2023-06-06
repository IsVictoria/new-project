import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective implements OnInit{
  @Input('appStyle') color: string = 'blue'
  constructor(
    private  el: ElementRef,
    private rend: Renderer2
  ) {}

  ngOnInit() {

  }

  @HostListener('mouseenter') onEnter() {
    this.rend.setStyle(this.el.nativeElement, 'color', this.color)
  }

  @HostListener('mouseleave') onLeave() {
    this.rend.setStyle(this.el.nativeElement, 'color', null)
  }

}
