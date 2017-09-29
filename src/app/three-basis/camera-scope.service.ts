import {Injectable} from '@angular/core';
import {PerspectiveCamera} from 'three';

@Injectable()
export class CameraScopeService {
    private camera: PerspectiveCamera;

    public getCamera(fn: () => PerspectiveCamera): PerspectiveCamera {
        if (this.camera == null) {
            this.camera = fn();
        }
        return this.camera;
    }
}