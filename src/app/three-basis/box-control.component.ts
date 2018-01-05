import {BoxGeometry, Mesh, MeshBasicMaterial, MeshPhongMaterial, MeshLambertMaterial} from 'three';
import {Component, forwardRef} from '@angular/core';
import {Object3dComponent} from './object3d.component';

@Component({
    selector: 'box-control',
    template: '',
    providers: [{ provide: Object3dComponent, useExisting: forwardRef(() => BoxControlComponent) }]
})
export class BoxControlComponent extends Object3dComponent {
    private boxGeometry: BoxGeometry;
    private meshPhongMaterial: MeshPhongMaterial;
    private meshBasicMaterial: MeshBasicMaterial;
    private meshLambertMaterial: MeshLambertMaterial;

    constructor() {
        super();

        this.boxGeometry = new BoxGeometry(1 , 1, 1);
        this.meshBasicMaterial = new MeshBasicMaterial({color: 0x00ff00});
        this.meshPhongMaterial = new MeshPhongMaterial({color: 0x00ff00, specular: 0x050505});
        this.meshLambertMaterial = new MeshLambertMaterial({color: 0x00ff00});
        this.object3d = new Mesh(this.boxGeometry, this.meshLambertMaterial);
    }
}
