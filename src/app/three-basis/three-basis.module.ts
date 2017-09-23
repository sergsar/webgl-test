import {NgModule} from '@angular/core';

import {ThreeRendererComponent} from './three-renderer.component';
import {ThreeSceneComponent} from './three-scene.component';

@NgModule({
    imports: [],
    declarations: [ThreeRendererComponent, ThreeSceneComponent],
    exports: [ThreeRendererComponent, ThreeSceneComponent]
})

export  class ThreeBasisModule {}
