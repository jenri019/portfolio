import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[fadeIn]',
    standalone: true
})
export class FadeInDirective implements OnInit {
    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
        this.renderer.setStyle(this.el.nativeElement, 'transition', 'opacity 0.5s ease-in-out');

        setTimeout(() => {
            this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
        }, 100);
    }
}