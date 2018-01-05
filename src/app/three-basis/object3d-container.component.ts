import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {Object3D} from './object3d';
import {Object3D as ThreeObject} from 'three';

@Component({template: ''})
export abstract class Object3dContainerComponent implements AfterContentInit {

    protected object3d: ThreeObject;

    @ContentChildren(Object3D)
    objects3D: QueryList<Object3D> = new QueryList<Object3D>();

    ngAfterContentInit() {
        this.objects3D.forEach(p => this.object3d.add(p.getObject3D()));

    }

    public getObject3D(): ThreeObject {
        return this.object3d;
    }
}
