import {MeshLambertMaterial, Object3D} from 'three';

export abstract class CubeElement {
    protected material: MeshLambertMaterial = new MeshLambertMaterial({color: 0x00ff00});
    protected element: Object3D;

    public getElement(): Object3D {
        return this.element;
    }
}
