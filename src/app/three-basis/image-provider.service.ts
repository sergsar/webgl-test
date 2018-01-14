import {Injectable} from '@angular/core';

@Injectable()
export class ImageProviderService {
    public getImage(url: string) {
        let image = document.createElementNS( 'http://www.w3.org/1999/xhtml', 'img' );
        image.setAttribute('src', url);
        image.setAttribute('crossOrigin', 'Anonymous');
        return image;
    }
}
