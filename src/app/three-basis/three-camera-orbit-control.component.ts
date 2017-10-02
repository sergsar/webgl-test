import {Component} from '@angular/core';
import {CameraProvider} from './camera-provider.service';
import {OrbitControls} from 'three';

@Component({selector: 'three-camera-orbit-control', template: ''})
export class ThreeCameraOrbitControlComponent {
    constructor(private cameraProvider: CameraProvider) {
        let camera = this.cameraProvider.getCamera();
        // let controls = new OrbitControls(camera);
        // controls.addEventListener('change', () => {});
    }

}
