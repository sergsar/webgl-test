import {AfterContentInit, Component} from '@angular/core';
import {PerspectiveCamera} from 'three';
import {CameraScopeService} from './camera-scope.service';

@Component({selector: 'three-camera', templateUrl: './three-camera.component.html'})
export class ThreeCameraComponent implements AfterContentInit {

    public camera: PerspectiveCamera;

    constructor(private cameraScopeService: CameraScopeService) {}

    public ngAfterContentInit() {
        this.camera = this.cameraScopeService.getCamera(() => new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000));
        this.camera.position.z = 5;
    }
}
