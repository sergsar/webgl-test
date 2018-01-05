import {NgModule} from '@angular/core';
import {Group3dComponent} from './group3d.component';
import {StructureObjectComponent} from "./structure-object.component";
import {StructureItemComponent} from "./structure-item.component";

@NgModule({
    declarations: [Group3dComponent, StructureObjectComponent, StructureItemComponent],
    exports: [Group3dComponent, StructureObjectComponent, StructureItemComponent]
})
export class ComponentsElementaryModule { }
