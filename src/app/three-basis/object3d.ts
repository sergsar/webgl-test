import {Object3D as ThreeObject} from 'three';

export abstract class Object3D {
    protected object3D: ThreeObject;

    public getObject3D(): ThreeObject {
        return this.object3D;
    }
}
