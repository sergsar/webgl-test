import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {Item3d} from '../../elements/item3d';

@Component({ selector: 'cube-control', template: '<ng-content></ng-content>' })
export class CubeControlComponent implements AfterContentInit {

    @ContentChildren(Item3d)
    items3d: QueryList<Item3d> = new QueryList<Item3d>();

    ngAfterContentInit() {

    }
}
