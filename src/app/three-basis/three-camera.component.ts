import {Component} from '@angular/core';
import {PerspectiveCamera} from 'three';
import {CameraProvider} from './camera-provider.service';

@Component({selector: 'three-camera', template: '<ng-content></ng-content>'})
export class ThreeCameraComponent {

    public camera: PerspectiveCamera;

    constructor(private cameraProvider: CameraProvider) {
        let cameraSetupFn = () => new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera = this.cameraProvider.getCamera(cameraSetupFn);
        this.camera.position.z = 5;
    }
}
