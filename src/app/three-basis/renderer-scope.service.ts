import {Injectable} from '@angular/core';
import {WebGLRenderer, WebGLRendererParameters} from 'three';

@Injectable()
export  class RendererScopeService {
    private renderer: WebGLRenderer;

    public getRenderer(parameters: WebGLRendererParameters): WebGLRenderer {
        if (this.renderer == null) {
            this.renderer = new WebGLRenderer(parameters);
        }
        return this.renderer;
    }
}
