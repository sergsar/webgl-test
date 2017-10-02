import {Injectable} from '@angular/core';
import {PerspectiveCamera} from 'three';

@Injectable()
export class CameraProvider {
    private cameras: Map<string, PerspectiveCamera> = new Map();

    public getCamera(fn?: () => PerspectiveCamera, id?: string): PerspectiveCamera {
        if (fn == null) {
            fn = () => new PerspectiveCamera();
        }

        let camera = this.cameras.get(id);

        if (camera == null) {
            camera = fn();
            this.cameras.set(id, camera);
        }

        return camera;
    }
}