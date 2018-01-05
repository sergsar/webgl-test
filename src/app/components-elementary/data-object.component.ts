import {Component, ContentChildren, QueryList} from '@angular/core';
import {DataItemComponent} from './data-item.component';

@Component({ selector: 'data-object', template: '<ng-content></ng-content>' })
export class DataObjectComponent {

    @ContentChildren(DataItemComponent)
    private dataItems: QueryList<DataItemComponent> = new QueryList<DataItemComponent>();

    public get values(): QueryList<DataItemComponent> {
        return this.dataItems;
    }
}
