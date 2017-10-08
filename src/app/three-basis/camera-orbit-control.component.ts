import {Component} from '@angular/core';
import {CameraProvider} from './camera-provider.service';
import {OrbitControls} from 'three-orbitcontrols-ts';

@Component({selector: 'camera-orbit-control', template: ''})
export class CameraOrbitControlComponent {

    constructor(private cameraProvider: CameraProvider) {
        let perspectiveCamera = this.cameraProvider.getPerspectiveCamera();
        let controls = new OrbitControls(perspectiveCamera);
        controls.addEventListener('change', () => {});
    }

}
