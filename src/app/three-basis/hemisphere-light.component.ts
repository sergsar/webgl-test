import {Component, forwardRef} from '@angular/core';
import {HemisphereLight} from 'three';
import {Object3D} from './object3d';

@Component({
  selector: 'hemisphere-light',
  template: '',
  providers: [{ provide: Object3D, useExisting: forwardRef(() => HemisphereLightComponent) }]})
export class HemisphereLightComponent extends Object3D {
  private hemisphereLight: HemisphereLight;

  constructor() {
    super();

    this.hemisphereLight = new HemisphereLight(0x606090, 0x404040);

    this.object3D = this.hemisphereLight;
  }
}
