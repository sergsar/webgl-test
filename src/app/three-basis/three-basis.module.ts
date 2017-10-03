import {NgModule} from '@angular/core';

import {ThreeRendererComponent} from './three-renderer.component';
import {ThreeSceneComponent} from './three-scene.component';
import {ThreeCameraComponent} from './three-camera.component';
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
        ThreeCameraComponent,
        ThreeCameraOrbitControlComponent
    ],
    exports: [
        ThreeAreaComponent,
        ThreeRendererComponent,
        ThreeSceneComponent,
        ThreeCameraComponent,
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
