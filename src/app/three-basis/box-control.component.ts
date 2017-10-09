import {BoxGeometry, Mesh, MeshBasicMaterial, MeshPhongMaterial, MeshLambertMaterial} from 'three';
import {Component, forwardRef} from '@angular/core';
import {ObjectThreeDComponent} from './object-three-d.component';

@Component({
    selector: 'box-control',
    template: '',
    providers: [{ provide: ObjectThreeDComponent, useExisting: forwardRef(() => BoxControlComponent) }]
})
export class BoxControlComponent extends ObjectThreeDComponent {
    private boxGeometry: BoxGeometry;
    private meshPhongMaterial: MeshPhongMaterial;
    private meshBasicMaterial: MeshBasicMaterial;
    private meshLambertMaterial: MeshLambertMaterial;


    constructor() {
        super();

        this.boxGeometry = new BoxGeometry(1 , 1, 1);
        this.meshBasicMaterial = new MeshBasicMaterial({color: 0x00ff00});
        this.meshPhongMaterial = new MeshPhongMaterial({color: 0x00ff00, specular: 0x050505});
        this.meshLambertMaterial = new MeshLambertMaterial({color: Math.random() * 0xffffff});
        this.object3D = new Mesh(this.boxGeometry, this.meshLambertMaterial);
    }
}
