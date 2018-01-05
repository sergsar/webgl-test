import {NgModule} from '@angular/core';
import {Group3dComponent} from './group3d.component';
import {DataObjectComponent} from "./data-object.component";
import {DataItemComponent} from "./data-item.component";

@NgModule({
    declarations: [Group3dComponent, DataObjectComponent, DataItemComponent],
    exports: [Group3dComponent, DataObjectComponent, DataItemComponent]
})
export class ComponentsElementaryModule { }
