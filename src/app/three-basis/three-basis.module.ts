import {NgModule} from '@angular/core';

import {ThreeRendererComponent} from './three-renderer.component';
import {ThreeSceneComponent} from './three-scene.component';
import {ThreeCameraComponent} from './three-camera.component';
import {ThreeAreaComponent} from './three-area.component';

@NgModule({
    imports: [],
    declarations: [
        ThreeAreaComponent,
        ThreeRendererComponent,
        ThreeSceneComponent,
        ThreeCameraComponent
    ],
    exports: [
        ThreeAreaComponent,
        ThreeRendererComponent,
        ThreeSceneComponent,
        ThreeCameraComponent
    ]
})

export  class ThreeBasisModule {}
