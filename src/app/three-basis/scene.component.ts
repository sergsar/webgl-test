import {AfterContentInit, Component, ContentChild, ContentChildren, QueryList} from '@angular/core';
import {Scene} from 'three';
import {PerspectiveCameraComponent} from './perspective-camera.component';
import {SceneProvider} from './scene-provider.service';
import {BoxControlComponent} from './box-control.component';

@Component({ selector: 'scene', templateUrl: './scene.component.html' })
export class SceneComponent implements AfterContentInit {

    public scene: Scene;

    @ContentChild(PerspectiveCameraComponent)
    perspectiveCameraComponent: PerspectiveCameraComponent;

    @ContentChildren(BoxControlComponent)
    ngComponents: QueryList<BoxControlComponent> = new QueryList<BoxControlComponent>();

    constructor(private sceneProvider: SceneProvider) {
        this.scene = this.sceneProvider.getScene();

    }

    ngAfterContentInit() {
        this.ngComponents.forEach(p => this.scene.add(p.getObject3D()));

    }
}
