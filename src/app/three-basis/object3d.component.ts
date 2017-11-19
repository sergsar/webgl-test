import {Object3D} from 'three';

export abstract class Object3dComponent {
    protected object3D: Object3D;

    public getObject3D(): Object3D {
        return this.object3D;
    }
}
