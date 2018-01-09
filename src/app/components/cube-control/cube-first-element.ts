import {Mesh, BoxGeometry, Vector3, Material} from 'three';
import {CubeElement} from './cube-element';

export class CubeFirstElement extends CubeElement {


    constructor(value: number, height: number, material: Material) {
        super();
        this.material = material;
        let boxGeometry = new BoxGeometry(value, height, value);
        let element = new Mesh(boxGeometry, this.material);
        element.translateOnAxis(new Vector3(value - 1, height, value - 1).multiplyScalar(0.5), 1);
        this.element = element;
    }
}
