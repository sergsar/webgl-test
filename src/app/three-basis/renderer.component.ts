import {Component, Input, AfterContentInit, ViewChild, ContentChild } from '@angular/core';
import {WebGLRenderer} from 'three';
import {SceneComponent} from './scene.component';
import {RendererProvider} from './renderer-provider.service';
import {AnimateProvider} from './animate-provider.service';

@Component({ selector: 'renderer', templateUrl: './renderer.component.html' })
export class  RendererComponent implements AfterContentInit {
    private renderer: WebGLRenderer;

    @Input()
    private height: number = 500;

    @Input()
    private width: number = 800;

    @ViewChild('canvas')
    private canvas: any;

    @ContentChild(SceneComponent)
    sceneComponent: SceneComponent;

    constructor(private animateProvider: AnimateProvider, private rendererProvider: RendererProvider) {}

    public ngAfterContentInit() {
        this.renderer = this.rendererProvider.getRenderer({ canvas: this.canvas.nativeElement });
        this.renderer.setSize(this.width, this.height);

        let scene = this.sceneComponent.scene;
        let perspectiveCamera = this.sceneComponent.perspectiveCameraComponent.perspectiveCamera;

        let animateTask = () => this.renderer.render(scene, perspectiveCamera);
        this.animateProvider.setFrameTask(this, animateTask);
    }
}
