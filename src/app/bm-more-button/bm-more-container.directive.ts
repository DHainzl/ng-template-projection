import { OnInit, Directive, Input, OnDestroy, ViewContainerRef, TemplateRef } from '@angular/core';
import { BmMoreButtonComponent } from '../bm-more-button/bm-more-button.component';
import { Subscription } from 'rxjs';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[bmMoreContainer]',
})
export class BmMoreContainerDirective implements OnDestroy {
    private _moreButton: BmMoreButtonComponent;
    private moreButtonSubscription: Subscription;
    visible = false;

    @Input()
    set bmMoreContainer(moreButton: BmMoreButtonComponent) {
        if (this.moreButtonSubscription) {
            this.moreButtonSubscription.unsubscribe();
        }

        this._moreButton = moreButton;
        this.moreButtonSubscription = this._moreButton.visible$.subscribe(visible => {
            this.visible = visible;
            this.updateView();
        });
    }

    constructor(
        private _viewContainer: ViewContainerRef,
        private templateRef: TemplateRef<any>,
    ) { }

    ngOnDestroy() {
        this.moreButtonSubscription.unsubscribe();
    }

    updateView() {
        if (!this._moreButton) {
            return;
        }

        if (!this.visible) {
            this._viewContainer.clear();
        } else {
            this._viewContainer.createEmbeddedView(this.templateRef);
        }
    }
}
