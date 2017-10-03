import {Component, Input, AfterContentInit, ViewChild, ContentChild } from '@angular/core';
import {WebGLRenderer} from 'three';
import {ThreeSceneComponent} from './three-scene.component';
import {RendererProvider} from './renderer-provider.service';
import {AnimateProvider} from './animate-provider.service';

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

    constructor(private animateProvider: AnimateProvider, private rendererProvider: RendererProvider) {}

    public ngAfterContentInit() {
        this.renderer = this.rendererProvider.getRenderer({ canvas: this.canvas.nativeElement });
        this.renderer.setSize(this.width, this.height);

        let scene = this.threeSceneComponent.scene;
        let camera = this.threeSceneComponent.threeCameraComponent.camera;

        let animateTask = () => this.renderer.render(scene, camera);
        this.animateProvider.setFrameTask(this, animateTask);
    }
}
