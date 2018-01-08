import {Color, MeshLambertMaterial, Object3D} from 'three';

export abstract class CubeElement {
    protected material: MeshLambertMaterial;
    protected element: Object3D;

    constructor(color: Color) {
        this.material = new MeshLambertMaterial({color: color});
    }

    public getElement(): Object3D {
        return this.element;
    }
}
