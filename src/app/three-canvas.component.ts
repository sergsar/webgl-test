import {Component, ContentChild, Input, AfterContentInit, ViewChild } from '@angular/core';
import {WebGLRenderer} from 'three';
import {ThreeSceneComponent} from './three-scene.component';

@Component({ selector: 'three-canvas', templateUrl: './three-canvas.component.html' })
export class  ThreeCanvasComponent implements AfterContentInit {
  private renderer: WebGLRenderer;

  @Input()
  height: number = 500;

  @Input()
  width: number = 500;

  @ContentChild(ThreeSceneComponent)
  threeSceneComponent: ThreeSceneComponent;

  @ViewChild('canvas')
  canvas: any;

  public ngAfterContentInit() {
    this.renderer = new WebGLRenderer({ canvas: this.canvas.nativeElement });
    this.renderer.setSize(this.width, this.height);

    this.renderer.render(this.threeSceneComponent.scene, this.threeSceneComponent.camera);
  }
}
