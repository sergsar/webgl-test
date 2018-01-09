import {Component, forwardRef, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import {Object3dComponent} from '../../three-basis/object3d.component';
import {CubeFirstElement} from './cube-first-element';
import {BoxGeometry, Color, Group, MeshLambertMaterial, Mesh, Object3D, Vector3, Material} from 'three';
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
        function getBodyMaterial(color: any): Material { return new MeshLambertMaterial({color: color}); }
        let partsHeight = 0.1;
        let cubePartsRoot = this.objects.filter(p => p.name === 'CubeParts')[0];
        let cubeParts = cubePartsRoot.getObjects().filter(p => p.name === 'CubePart').sort(p => -Number(p.getItems().filter(p1 => p1.key === 'Value')[0].value));
        let group = new Group();
        let ratesMaxValue = Number(cubeParts[cubeParts.length - 1].getItems().filter(p => p.key === 'Value')[0].value);
        for (let i = 0; i < cubeParts.length; i++) {
            let cubePart = cubeParts[i];
            let color = new Color(cubePart.getItems().filter(p => p.key === 'Color')[0].value);
            let element: Object3D;
            if (i === 0) {
                let value = Math.sqrt(Number(cubePart.getItems().filter(p => p.key === 'Value')[0].value) / ratesMaxValue);
                element = new CubeFirstElement(value, partsHeight, getBodyMaterial(color)).getElement();
            } else {
                let previousCubePart = cubeParts[i - 1];
                let value = Math.sqrt(Number(previousCubePart.getItems().filter(p => p.key === 'Value')[0].value) / ratesMaxValue);
                let value2 = Math.sqrt(Number(cubePart.getItems().filter(p => p.key === 'Value')[0].value) / ratesMaxValue);
                element = new CubeSerialElement(value, value2, partsHeight, getBodyMaterial(color)).getElement();
            }
            group.add(element);
        }

        let ratesThickness = 0.08;
        let cubeRatesRoot = this.objects.filter(p => p.name === 'CubeRates')[0];
        let cubeRates = cubeRatesRoot.getObjects().filter(p => p.name === 'CubeRate');
        let ratesSum = cubeRates.map(function (p) { return Number(p.getItems().filter(p1 => p1.key === 'Value')[0].value); }).reduce(function (p, p1) { return p + p1; }, 0);
        let widths = 0;
        cubeRates.forEach(rate => {
            let value = Number(rate.getItems().filter(p => p.key === 'Value')[0].value);
            let width = value / ratesSum;
            let color = rate.getItems().filter(p => p.key === 'Color')[0].value;
            let element = new Mesh(new BoxGeometry(width, ratesThickness, ratesThickness), getBodyMaterial(color));
            element.translateOnAxis(new Vector3((width - 1) * 0.5 + widths, partsHeight + ratesThickness * 0.5, (ratesThickness - 1) * 0.5), 1);
            widths = widths + width;
            group.add(element);
        });


        this.object3d = group;
    }
}
