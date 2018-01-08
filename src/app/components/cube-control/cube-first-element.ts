import {Mesh, BoxGeometry, Vector3, Color} from 'three';
import {CubeElement} from './cube-element';

export class CubeFirstElement extends CubeElement {


    constructor(value: number, height: number, color: Color) {
        super(color);
        let boxGeometry = new BoxGeometry(value, height, value);
        let element = new Mesh(boxGeometry, this.material);
        element.translateOnAxis(new Vector3(value - 1, height, value - 1).multiplyScalar(0.5), 1);
        this.element = element;
    }
}
