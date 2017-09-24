import {NgModule} from '@angular/core';

import {ThreeRendererComponent} from './three-renderer.component';
import {ThreeSceneComponent} from './three-scene.component';
import {ThreeCameraComponent} from './three-camera.component';

@NgModule({
    imports: [],
    declarations: [
        ThreeRendererComponent,
        ThreeSceneComponent,
        ThreeCameraComponent
    ],
    exports: [
        ThreeRendererComponent,
        ThreeSceneComponent,
        ThreeCameraComponent
    ]
})

export  class ThreeBasisModule {}
