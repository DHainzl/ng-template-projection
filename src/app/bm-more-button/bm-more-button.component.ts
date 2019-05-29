import { Component, OnInit, TemplateRef, Input, Renderer2, HostBinding, ElementRef } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bm-more-button',
  templateUrl: './bm-more-button.component.html',
  styleUrls: ['./bm-more-button.component.css']
})
export class BmMoreButtonComponent implements OnInit {
  private visible = false;
  private _templateRef: HTMLElement;

  @Input()
  set templateRef (value: HTMLElement) {
    this._templateRef = value;
    this.updateView();
  }

  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
  }

  onClick(): void {
    this.visible = !this.visible;
    this.updateView();
  }

  private updateView() {
    if (!this._templateRef) {
      return;
    }

    if (this.visible) {
      this._templateRef.classList.remove('hidden');
    } else {
      this._templateRef.classList.add('hidden');
    }
  }
}
