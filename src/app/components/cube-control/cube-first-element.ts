import {Mesh, BoxGeometry} from 'three';
import {CubeElement} from './cube-element';

export class CubeFirstElement extends CubeElement {


    constructor(value: number, height: number) {
        super();
        let boxGeometry = new BoxGeometry(value, height, value);
        this.element = new Mesh(boxGeometry, this.material);
    }
}
