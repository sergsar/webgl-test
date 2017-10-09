import {Component, forwardRef} from '@angular/core';
import {HemisphereLight} from 'three';
import {ObjectThreeDComponent} from './object-three-d.component';

@Component({
  selector: 'hemisphere-light',
  template: '',
  providers: [{ provide: ObjectThreeDComponent, useExisting: forwardRef(() => HemisphereLightComponent) }]})
export class HemisphereLightComponent extends ObjectThreeDComponent {
  private hemisphereLight: HemisphereLight;

  constructor() {
    super();

    this.hemisphereLight = new HemisphereLight(0x606090, 0x404040);

    this.object3D = this.hemisphereLight;
  }
}
