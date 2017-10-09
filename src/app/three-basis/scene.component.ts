import {AfterContentInit, Component, ContentChild, ContentChildren, QueryList} from '@angular/core';
import {Scene} from 'three';
import {PerspectiveCameraComponent} from './perspective-camera.component';
import {SceneProvider} from './scene-provider.service';
import {ObjectThreeDComponent} from './object-three-d.component';

@Component({ selector: 'scene', templateUrl: './scene.component.html' })
export class SceneComponent implements AfterContentInit {

    public scene: Scene;

    @ContentChild(PerspectiveCameraComponent)
    perspectiveCameraComponent: PerspectiveCameraComponent;

    @ContentChildren(ObjectThreeDComponent)
    objectThreeDComponents: QueryList<ObjectThreeDComponent> = new QueryList<ObjectThreeDComponent>();

    constructor(private sceneProvider: SceneProvider) {
        this.scene = this.sceneProvider.getScene();

    }

    ngAfterContentInit() {
        this.objectThreeDComponents.forEach(p => this.scene.add(p.getObject3D()));

    }
}
