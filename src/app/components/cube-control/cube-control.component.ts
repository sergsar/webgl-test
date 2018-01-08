import {Component, forwardRef, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import {Object3dComponent} from '../../three-basis/object3d.component';
import {CubeFirstElement} from './cube-first-element';
import {Color, Group, Object3D} from 'three';
import {CubeSerialElement} from './cube-serial-element';
import {BindObjectComponent} from '../../components-elementary/bind-object.component';

@Component({
    selector: 'cube-control',
    template: '<ng-content></ng-content>',
    providers: [{ provide: Object3dComponent, useExisting: forwardRef(() => CubeControlComponent) }]
})
export class CubeControlComponent extends Object3dComponent implements AfterContentInit {

    @ContentChildren(BindObjectComponent)
    private objects: QueryList<BindObjectComponent> = new QueryList<BindObjectComponent>();

    ngAfterContentInit() {

        let height = 0.15;
        let cubePartsRoot = this.objects.filter(p => p.name === 'CubeParts')[0];
        let cubeParts = cubePartsRoot.getObjects().filter(p => p.name === 'CubePart').sort(p => -Number(p.getItems().filter(p1 => p1.key === 'Value')[0].value));
        let group = new Group();
        let maxValue = Number(cubeParts[cubeParts.length - 1].getItems().filter(p => p.key === 'Value')[0].value);
        for (let i = 0; i < cubeParts.length; i++) {
            let cubePart = cubeParts[i];
            let color = new Color(cubePart.getItems().filter(p => p.key === 'Color')[0].value);
            let element: Object3D;
            if (i === 0) {
                let value = Number(cubePart.getItems().filter(p => p.key === 'Value')[0].value) / maxValue;
                element = new CubeFirstElement(value, height, color).getElement();
            } else {
                let previousCubePart = cubeParts[i - 1];
                let value = Number(previousCubePart.getItems().filter(p => p.key === 'Value')[0].value) / maxValue;
                let value2 = Number(cubePart.getItems().filter(p => p.key === 'Value')[0].value) / maxValue;
                element = new CubeSerialElement(value, value2, height, color).getElement();
            }
            group.add(element);
        }
        this.object3d = group;
    }
}
