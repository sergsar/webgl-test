import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {Group3dComponent} from '../../components-elementary/group3d.component';

@Component({ selector: 'cube-control', template: '<ng-content></ng-content>' })
export class CubeControlComponent implements AfterContentInit {

    @ContentChildren(Group3dComponent)
    items3d: QueryList<Group3dComponent> = new QueryList<Group3dComponent>();

    ngAfterContentInit() {

    }
}
