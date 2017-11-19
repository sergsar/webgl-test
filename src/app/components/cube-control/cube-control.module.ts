import {NgModule} from '@angular/core';
import {ThreeBasisModule} from '../../three-basis/three-basis.module';
import {CubeControlComponent} from './cube-control.component';

@NgModule({
    imports: [ThreeBasisModule],
    declarations: [CubeControlComponent],
    exports: [CubeControlComponent]
})

export class CubeControlModule {}
