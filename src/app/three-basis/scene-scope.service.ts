import {Injectable} from '@angular/core';
import {Scene} from 'three';

@Injectable()
export class SceneScopeService {
    private privateScene: Scene;

    public get scene(): Scene {
        if (this.privateScene == null) {
            this.privateScene = new Scene();
        }
        return this.privateScene;
    }
}