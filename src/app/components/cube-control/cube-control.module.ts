import {NgModule} from '@angular/core';
import {ThreeBasisModule} from '../../three-basis/three-basis.module';
import {CubeControlComponent} from './cube-control.component';
import {ElementsModule} from '../../elements/elements.module';

@NgModule({
    imports: [ThreeBasisModule, ElementsModule],
    declarations: [CubeControlComponent],
    exports: [CubeControlComponent]
})

export class CubeControlModule {}
