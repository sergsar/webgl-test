import {Injectable} from '@angular/core';
import {WebGLRenderer, WebGLRendererParameters} from 'three';

@Injectable()
export  class RendererProvider {
    private renderers: Map<string, WebGLRenderer> = new Map();

    public getRenderer(parameters: WebGLRendererParameters, id?: string): WebGLRenderer {
        let renderer = this.renderers.get(id);
        if (renderer == null) {
            renderer = new WebGLRenderer(parameters);
            this.renderers.set(id, renderer);
        }
        return renderer;
    }
}
