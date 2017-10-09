import {Object3D} from 'three';

export abstract class ObjectThreeDComponent {
    protected object3D: Object3D;

    public getObject3D(): Object3D {
        return this.object3D;
    }
}
