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

        this.directionalLight = new DirectionalLight(0xFFFFFF);
        this.directionalLight.position.set(1, 1, 1);

        this.object3D = this.directionalLight;
    }
}
