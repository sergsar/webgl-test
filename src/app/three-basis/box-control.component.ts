import {BoxGeometry, Mesh, MeshBasicMaterial} from 'three';
import {Component, forwardRef} from '@angular/core';
import {ObjectThreeDComponent} from './object-three-d.component';

@Component({
    selector: 'box-control',
    template: '',
    providers: [{provide: ObjectThreeDComponent, useExisting: forwardRef(() => BoxControlComponent) }]
})
export class BoxControlComponent extends ObjectThreeDComponent {
    private boxGeometry: BoxGeometry;
    private basicMaterial: MeshBasicMaterial;


    constructor() {
        super();

        this.boxGeometry = new BoxGeometry(1 , 1, 1);
        this.basicMaterial = new MeshBasicMaterial({color: 0x00ff00});
        this.object3D = new Mesh(this.boxGeometry, this.basicMaterial);
    }
}
