import { Directive, ElementRef, Renderer2, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
  standalone: true
})
export class FadeInDirective implements OnInit {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngOnInit() {
    console.log('Directiva ejecutándose en:', this.el.nativeElement);
    // 1. Configura estado inicial INVISIBLE
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'visibility', 'hidden');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'opacity 0.5s ease-in-out, visibility 0.5s');
    
    // 2. Fuerza el reflow antes de animar
    setTimeout(() => {
      // 3. Hace visible y dispara la animación
      this.renderer.setStyle(this.el.nativeElement, 'visibility', 'visible');
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
    }, 300);
  }
}