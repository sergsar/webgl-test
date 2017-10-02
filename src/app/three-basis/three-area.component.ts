import { AfterContentInit, Component, ContentChildren, NgZone, QueryList } from '@angular/core';
import {ThreeRendererComponent} from './three-renderer.component';

@Component({selector: 'three-area', template: `<ng-content></ng-content>`})
export class ThreeAreaComponent implements AfterContentInit {

    @ContentChildren(ThreeRendererComponent)
    threeRendererComponents: QueryList<ThreeRendererComponent>;

    constructor(private ngZone: NgZone) { }

    public ngAfterContentInit() {
        this.animate();
    }

    private animate() {
        this.ngZone.runOutsideAngular(() => requestAnimationFrame(() => this.animate()));
        this.threeRendererComponents.forEach(p => p.render());
    }
}
