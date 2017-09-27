import {AfterContentInit, Component, ContentChild, NgZone} from '@angular/core';
import {ThreeRendererComponent} from './three-renderer.component';
import {ThreeSceneComponent} from './three-scene.component';
import {ThreeCameraComponent} from './three-camera.component';

@Component({selector: 'three-area', template: `<ng-content></ng-content>`})
export class ThreeAreaComponent implements AfterContentInit {

    constructor(private ngZone: NgZone) { }

    @ContentChild(ThreeRendererComponent)
    threeRendererComponent: ThreeRendererComponent;

    @ContentChild(ThreeSceneComponent)
    threeSceneComponent: ThreeSceneComponent;

    @ContentChild(ThreeCameraComponent)
    threeCameraComponent: ThreeCameraComponent;

    public ngAfterContentInit() {
        this.animate();
    }

    private animate() {
        this.ngZone.runOutsideAngular(() => requestAnimationFrame(() => this.animate()));
        this.threeRendererComponent.render(this.threeSceneComponent.scene, this.threeCameraComponent.camera);
    }
}
