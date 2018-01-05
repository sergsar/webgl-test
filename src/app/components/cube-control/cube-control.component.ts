import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {Group3d} from '../../elements/group3d';

@Component({ selector: 'cube-control', template: '<ng-content></ng-content>' })
export class CubeControlComponent implements AfterContentInit {

    @ContentChildren(Group3d)
    items3d: QueryList<Group3d> = new QueryList<Group3d>();

    ngAfterContentInit() {

    }
}
