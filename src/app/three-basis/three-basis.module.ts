import {NgModule} from '@angular/core';

import {RendererComponent} from './renderer.component';
import {SceneComponent} from './scene.component';
import {PerspectiveCameraComponent} from './perspective-camera.component';
import {ThreeAreaComponent} from './three-area.component';
import {DirectLightComponent} from './direct-light.component';
import {RendererProvider} from './renderer-provider.service';
import {CameraProvider} from './camera-provider.service';
import {SceneProvider} from './scene-provider.service';
import {CameraOrbitControlComponent} from './camera-orbit-control.component';
import {AnimateProvider} from './animate-provider.service';
import {BoxControlComponent} from './box-control.component';

@NgModule({
    imports: [],
    declarations: [
        ThreeAreaComponent,
        DirectLightComponent,
        RendererComponent,
        SceneComponent,
        PerspectiveCameraComponent,
        CameraOrbitControlComponent,
        BoxControlComponent
    ],
    exports: [
        ThreeAreaComponent,
        DirectLightComponent,
        RendererComponent,
        SceneComponent,
        PerspectiveCameraComponent,
        CameraOrbitControlComponent,
        BoxControlComponent
    ],
    providers: [
        AnimateProvider,
        RendererProvider,
        CameraProvider,
        SceneProvider
    ]
})

export  class ThreeBasisModule {}
