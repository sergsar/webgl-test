import {Component, forwardRef} from '@angular/core';
import {DirectionalLight} from 'three';
import {ObjectThreeDComponent} from './object-three-d.component';

@Component({
    selector: 'direct-light',
    template: '',
    providers: [{ provide: ObjectThreeDComponent, useExisting: forwardRef(() => DirectLightComponent) }]})
export class DirectLightComponent extends ObjectThreeDComponent {
    private directionalLight: DirectionalLight;

    constructor() {
        super();

        this.directionalLight = new DirectionalLight(0xFFFFFF, 1);
        this.directionalLight.color.setHSL(0.1, 1, 0.95);
        this.directionalLight.position.set(0, 10, 0);
        this.directionalLight.position.multiplyScalar(30);

        this.object3D = this.directionalLight;
    }
}
