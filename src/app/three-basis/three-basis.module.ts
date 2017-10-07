import {NgModule} from '@angular/core';

import {ThreeRendererComponent} from './three-renderer.component';
import {ThreeSceneComponent} from './three-scene.component';
import {ThreePerspectiveCameraComponent} from './three-perspective-camera.component';
import {ThreeAreaComponent} from './three-area.component';
import {RendererProvider} from './renderer-provider.service';
import {CameraProvider} from './camera-provider.service';
import {SceneProvider} from './scene-provider.service';
import {ThreeCameraOrbitControlComponent} from './three-camera-orbit-control.component';
import {AnimateProvider} from './animate-provider.service';

@NgModule({
    imports: [],
    declarations: [
        ThreeAreaComponent,
        ThreeRendererComponent,
        ThreeSceneComponent,
        ThreePerspectiveCameraComponent,
        ThreeCameraOrbitControlComponent
    ],
    exports: [
        ThreeAreaComponent,
        ThreeRendererComponent,
        ThreeSceneComponent,
        ThreePerspectiveCameraComponent,
        ThreeCameraOrbitControlComponent
    ],
    providers: [
        AnimateProvider,
        RendererProvider,
        CameraProvider,
        SceneProvider
    ]
})

export  class ThreeBasisModule {}
