import {Component, ContentChild} from '@angular/core';
import {BoxGeometry, Mesh, MeshBasicMaterial, Scene} from 'three';
import {ThreePerspectiveCameraComponent} from './three-perspective-camera.component';
import {SceneProvider} from './scene-provider.service';

@Component({ selector: 'three-scene', templateUrl: './three-scene.component.html' })
export class ThreeSceneComponent {
    private boxGeometry: BoxGeometry;
    private basicMaterial: MeshBasicMaterial;
    private mesh: Mesh;

    public scene: Scene;

    @ContentChild(ThreePerspectiveCameraComponent)
    threePerspectiveCameraComponent: ThreePerspectiveCameraComponent;

    constructor(private sceneProvider: SceneProvider) {
        this.scene = this.sceneProvider.getScene();

        this.boxGeometry = new BoxGeometry(1, 1, 1);
        this.basicMaterial = new MeshBasicMaterial({ color: 0x00ff00 });
        this.mesh = new Mesh(this.boxGeometry, this.basicMaterial);

        this.scene.add(this.mesh);
    }
}
