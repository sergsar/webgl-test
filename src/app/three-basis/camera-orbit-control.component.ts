import {Component} from '@angular/core';
import {CameraProvider} from './camera-provider.service';
import 'threejs/controls/OrbitControls';
import {OrbitControls} from 'three';

@Component({selector: 'camera-orbit-control', template: ''})
export class CameraOrbitControlComponent {

    constructor(private cameraProvider: CameraProvider) {
        let perspectiveCamera = this.cameraProvider.getPerspectiveCamera();
        let controls = new OrbitControls(perspectiveCamera);
        controls.addEventListener('change', () => {});
    }

}
