import {Component, AfterContentInit } from '@angular/core';
import {BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene} from 'three';

@Component({ selector: 'three-scene', templateUrl: './three-scene.component.html' })
export class ThreeSceneComponent implements AfterContentInit {
  private boxGeometry: BoxGeometry;
  private basicMaterial: MeshBasicMaterial;
  private mesh: Mesh;

  public scene: Scene;
  public camera: PerspectiveCamera;

  public ngAfterContentInit() {
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    this.boxGeometry = new BoxGeometry(1, 1, 1);
    this.basicMaterial = new MeshBasicMaterial({ color: 0x00ff00 });
    this.mesh = new Mesh(this.boxGeometry, this.basicMaterial);

    this.scene.add(this.mesh);

    this.camera.position.z = 5;
  }
}
