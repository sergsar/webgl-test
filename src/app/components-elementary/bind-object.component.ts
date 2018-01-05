import {Component, ContentChildren, QueryList} from '@angular/core';
import {BindItemComponent} from './bind-item.component';

@Component({ selector: 'bind-object', template: '<ng-content></ng-content>' })
export class BindObjectComponent {

    @ContentChildren(BindItemComponent)
    private items: QueryList<BindItemComponent> = new QueryList<BindItemComponent>();

    public getItems(): QueryList<BindItemComponent> {
        return this.items;
    }
}
