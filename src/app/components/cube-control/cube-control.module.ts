import {NgModule} from '@angular/core';
import {ThreeBasisModule} from '../../three-basis/three-basis.module';
import {CubeControlComponent} from './cube-control.component';
import {ComponentsElementaryModule} from '../../components-elementary/components-elementary.module';

@NgModule({
    imports: [ThreeBasisModule, ComponentsElementaryModule],
    declarations: [CubeControlComponent],
    exports: [CubeControlComponent]
})

export class CubeControlModule {}
