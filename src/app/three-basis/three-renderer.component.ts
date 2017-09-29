import {Component, Input, AfterContentInit, ViewChild, ContentChild } from '@angular/core';
import {WebGLRenderer} from 'three';
import {ThreeSceneComponent} from './three-scene.component';
import {RendererScopeService} from './renderer-scope.service';

@Component({ selector: 'three-renderer', templateUrl: './three-renderer.component.html' })
export class  ThreeRendererComponent implements AfterContentInit {
    private renderer: WebGLRenderer;

    @Input()
    private height: number = 500;

    @Input()
    private width: number = 800;

    @ViewChild('canvas')
    private canvas: any;

    @ContentChild(ThreeSceneComponent)
    threeSceneComponent: ThreeSceneComponent;

    constructor(private rendererScopeService: RendererScopeService) {}

    public ngAfterContentInit() {
        this.renderer = this.rendererScopeService.getRenderer({ canvas: this.canvas.nativeElement });
        this.renderer.setSize(this.width, this.height);
    }

    public render() {
        let scene = this.threeSceneComponent.scene;
        let camera = this.threeSceneComponent.threeCameraComponent.camera;
        this.renderer.render(scene, camera);
    }
}
