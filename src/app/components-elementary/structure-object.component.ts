import {Component, ContentChildren, QueryList} from '@angular/core';
import {StructureItemComponent} from './structure-item.component';

@Component({ selector: 'structure-object', template: '<ng-content></ng-content>' })
export class StructureObjectComponent {

    @ContentChildren(StructureItemComponent)
    private structureItems: QueryList<StructureItemComponent> = new QueryList<StructureItemComponent>();

    public get values(): QueryList<StructureItemComponent> {
        return this.structureItems;
    }
}
