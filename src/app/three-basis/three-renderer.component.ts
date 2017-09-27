import {Component, Input, AfterContentInit, ViewChild } from '@angular/core';
import {Camera, Scene, WebGLRenderer} from 'three';

@Component({ selector: 'three-renderer', templateUrl: './three-renderer.component.html' })
export class  ThreeRendererComponent implements AfterContentInit {
  private renderer: WebGLRenderer;

  @Input()
  height: number = 500;

  @Input()
  width: number = 500;

  @ViewChild('canvas')
  canvas: any;

  public ngAfterContentInit() {
    this.renderer = new WebGLRenderer({ canvas: this.canvas.nativeElement });
    this.renderer.setSize(this.width, this.height);
  }

  public render(scene: Scene, camera: Camera) {
    this.renderer.render(scene, camera);
  }
}
