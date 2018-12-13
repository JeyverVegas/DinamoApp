import { Component, Input, OnChanges } from '@angular/core';
import { Empresa } from '../../interfaces/Empresa';

@Component({
  selector: 'app-carousel',
  templateUrl: 'carousel.html'
})
export class CarouselComponent implements OnChanges {
  @Input() empresas: Empresa[];
  @Input() encabezado: string;

  private readonly numbElementosAMostrar: number = 3;
  indexActual: number = 0;
  empresasEnSlider: Empresa[] = [];

  ngOnChanges(): void {
    this.establecerEmpresasEnSlider();
  }

  private establecerEmpresasEnSlider(): void {
    const empresaPendiente = {
      nombre: 'Proximamente',
      imgUrl: '../../assets/imgs/proximamente.png',
      ofertas: []
    };

    if (this.empresas.length === 0) {
      this.empresasEnSlider = [empresaPendiente, empresaPendiente, empresaPendiente];
    } else if (this.empresas.length === 1) {
      this.empresasEnSlider = [empresaPendiente, empresaPendiente, ...this.empresas];
    } else if (this.empresas.length === 2) {
      this.empresasEnSlider = [empresaPendiente, ...this.empresas];
    } else {
      this.empresasEnSlider = this.empresas.slice(this.indexActual, this.indexActual + this.numbElementosAMostrar)
    }
  }

  isBackButtonDisabled(): boolean {
    return this.indexActual < 1;
  }

  isForwardButtonDisabled(): boolean {
    return this.indexActual + this.numbElementosAMostrar >= this.empresas.length;
  }

  onMoveSliderToRight(): void {
    this.moveToNextSlide();
  }

  private moveToNextSlide() {
    this.indexActual++;
    this.establecerEmpresasEnSlider();
  }

  onMoveSliderToLeft(): void {
    this.moveToPreviousSlide();
  }

  private moveToPreviousSlide() {
    this.indexActual--;
    this.establecerEmpresasEnSlider();
  }

  onSwipeLeft(): void {
    if (!this.isForwardButtonDisabled()) {
      this.moveToNextSlide();
    }
  }

  onSwipeRight(): void {
    if (!this.isBackButtonDisabled()) {
      this.moveToPreviousSlide();
    }
  }
}
