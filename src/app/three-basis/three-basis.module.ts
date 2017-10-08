import {NgModule} from '@angular/core';

import {RendererComponent} from './renderer.component';
import {SceneComponent} from './scene.component';
import {PerspectiveCameraComponent} from './perspective-camera.component';
import {ThreeAreaComponent} from './three-area.component';
import {RendererProvider} from './renderer-provider.service';
import {CameraProvider} from './camera-provider.service';
import {SceneProvider} from './scene-provider.service';
import {CameraOrbitControlComponent} from './camera-orbit-control.component';
import {AnimateProvider} from './animate-provider.service';

@NgModule({
    imports: [],
    declarations: [
        ThreeAreaComponent,
        RendererComponent,
        SceneComponent,
        PerspectiveCameraComponent,
        CameraOrbitControlComponent
    ],
    exports: [
        ThreeAreaComponent,
        RendererComponent,
        SceneComponent,
        PerspectiveCameraComponent,
        CameraOrbitControlComponent
    ],
    providers: [
        AnimateProvider,
        RendererProvider,
        CameraProvider,
        SceneProvider
    ]
})

export  class ThreeBasisModule {}
