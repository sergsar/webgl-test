import {Component, forwardRef} from '@angular/core';
import {DirectionalLight} from 'three';
import {Object3D} from './object3d';

@Component({
    selector: 'direct-light',
    template: '',
    providers: [{ provide: Object3D, useExisting: forwardRef(() => DirectLightComponent) }]})
export class DirectLightComponent extends Object3D {
    private directionalLight: DirectionalLight;

    constructor() {
        super();

        this.directionalLight = new DirectionalLight(0x606060);
        this.directionalLight.position.set(1, 1, 1);

        this.object3D = this.directionalLight;
    }
}
