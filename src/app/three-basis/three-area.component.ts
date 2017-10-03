import { Component, ContentChildren, QueryList } from '@angular/core';
import {ThreeRendererComponent} from './three-renderer.component';

@Component({selector: 'three-area', template: `<ng-content></ng-content>`})
export class ThreeAreaComponent {

    @ContentChildren(ThreeRendererComponent)
    threeRendererComponents: QueryList<ThreeRendererComponent>;
}
