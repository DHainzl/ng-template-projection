import { Component, OnInit, TemplateRef, Input, Renderer2, HostBinding, ElementRef, OnDestroy, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'bm-more-button',
    templateUrl: './bm-more-button.component.html',
    styleUrls: ['./bm-more-button.component.css']
})
export class BmMoreButtonComponent {
    private _visible = false;
    private _visible$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    @Input()
    set visible (visible: boolean) {
        if (this._visible !== visible) {
            this._visible = visible;
            this.triggerEvents();
        }
    }

    @Output()
    visibleChange: EventEmitter<boolean> = new EventEmitter();

    get visible$(): Observable<boolean> {
        return this._visible$.asObservable();
    }

    onClick(): void {
        this._visible = !this._visible;
        this.triggerEvents();
    }

    private triggerEvents() {
        this._visible$.next(this._visible);
        this.visibleChange.emit(this._visible);
    }
}
