import { Component } from '@angular/core';
import { Scene } from 'three';
import { PerspectiveCamera } from 'three';
import { WebGLRenderer } from  'three';
import { BoxGeometry } from 'three';
import { MeshBasicMaterial } from 'three';
import { Mesh } from 'three';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;
  private boxGeometry: BoxGeometry;
  private basicMaterial: MeshBasicMaterial;
  private mesh: Mesh;

  public ngOnInit() {
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    this.renderer = new WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);


    this.boxGeometry = new BoxGeometry(1, 1, 1);
    this.basicMaterial = new MeshBasicMaterial({ color: 0x00ff00 });
    this.mesh = new Mesh(this.boxGeometry, this.basicMaterial);

    this.scene.add(this.mesh);

    this.camera.position.z = 5;

    this.renderer.render(this.scene, this.camera);
  }
}
