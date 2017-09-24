import {AfterContentInit, Component} from '@angular/core';
import {PerspectiveCamera} from 'three';

@Component({selector: 'three-camera', templateUrl: './three-camera.component.html'})
export class ThreeCameraComponent implements AfterContentInit {
    public camera: PerspectiveCamera;

    public ngAfterContentInit() {
        this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 5;
    }
}
