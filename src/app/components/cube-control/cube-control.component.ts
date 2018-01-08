import {Component, forwardRef} from '@angular/core';
import {Object3dComponent} from '../../three-basis/object3d.component';
import {CubeFirstElement} from './cube-first-element';
import {Group, Vector3} from 'three';
import {CubeSerialElement} from './cube-serial-element';

@Component({
    selector: 'cube-control',
    template: '<ng-content></ng-content>',
    providers: [{ provide: Object3dComponent, useExisting: forwardRef(() => CubeControlComponent) }]
})
export class CubeControlComponent extends Object3dComponent {
    constructor() {
        super();

        let value = 0.6;
        let value2 = 1;
        let height = 0.15;
        let group = new Group();
        let firstElement = new CubeFirstElement(value, height).getElement();
        firstElement.translate(1, new Vector3(-value * 0.5, 0, -value * 0.5));
        let serialElement = new CubeSerialElement(value, value2, height).getElement();
        group.add(firstElement);
        group.add(serialElement);
        this.object3d = group;
    }
}
