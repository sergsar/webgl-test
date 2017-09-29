import {NgModule} from '@angular/core';

import {ThreeRendererComponent} from './three-renderer.component';
import {ThreeSceneComponent} from './three-scene.component';
import {ThreeCameraComponent} from './three-camera.component';
import {ThreeAreaComponent} from './three-area.component';
import {RendererScopeService} from './renderer-scope.service';
import {CameraScopeService} from './camera-scope.service';
import {SceneScopeService} from "./scene-scope.service";

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
    ],
    providers: [
        RendererScopeService,
        CameraScopeService,
        SceneScopeService
    ]
})

export  class ThreeBasisModule {}
