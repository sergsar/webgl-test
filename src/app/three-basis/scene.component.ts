import {AfterContentInit, Component, ContentChild, ContentChildren, QueryList} from '@angular/core';
import {Scene} from 'three';
import {PerspectiveCameraComponent} from './perspective-camera.component';
import {SceneProvider} from './scene-provider.service';
import {Object3dComponent} from './object3d.component';

@Component({ selector: 'scene', templateUrl: './scene.component.html' })
export class SceneComponent implements AfterContentInit {

    public scene: Scene;

    @ContentChild(PerspectiveCameraComponent)
    perspectiveCameraComponent: PerspectiveCameraComponent;

    @ContentChildren(Object3dComponent)
    object3dComponents: QueryList<Object3dComponent> = new QueryList<Object3dComponent>();

    constructor(private sceneProvider: SceneProvider) {
        this.scene = this.sceneProvider.getScene();

    }

    ngAfterContentInit() {
        this.object3dComponents.forEach(p => this.scene.add(p.getObject3D()));

    }
}
