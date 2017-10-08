import {BoxGeometry, Mesh, MeshBasicMaterial, Object3D} from 'three';
import {Component} from '@angular/core';

@Component({selector: 'box-control', template: ''})
export class BoxControlComponent {
    private boxGeometry: BoxGeometry;
    private basicMaterial: MeshBasicMaterial;

    private object3D: Object3D;


    constructor() {
        this.boxGeometry = new BoxGeometry(1 , 1, 1);
        this.basicMaterial = new MeshBasicMaterial({color: 0x00ff00});
        this.object3D = new Mesh(this.boxGeometry, this.basicMaterial);
    }

    public getObject3D(): Object3D {
        return this.object3D;
    }
}
