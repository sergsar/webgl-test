import {BufferGeometry, Color, Vector3, Float32BufferAttribute, MeshPhongMaterial, DoubleSide, VertexColors, Mesh} from 'three';
import {CubeElement} from './cube-element';

export class CubeSerialElement extends CubeElement {
    constructor(value1: number, value2: number, height: number, ) {
        super();

        let positions = [];
        let geometry = new BufferGeometry();

        let v1 = value1, v2 = value2, h = height;
        let half = new Vector3(0.5, 0, 0.5);

        // points:
        let p11 = new Vector3(v2, 0, 0).sub(half), p12 = new Vector3(v2, h, 0).sub(half), p13 = new Vector3(v1, h, 0).sub(half), p14 = new Vector3(v1, 0, 0).sub(half);
        let p21 = new Vector3(v2, 0, v2).sub(half), p22 = new Vector3(v2, h, v2).sub(half), p23 = new Vector3(v1, h, v1).sub(half);
        let p31 = new Vector3(0, 0, v2).sub(half), p32 = new Vector3(0, h, v2).sub(half), p33 = new Vector3(0, h, v1).sub(half), p34 = new Vector3(0, 0, v1).sub(half);

        // triangles:
        positions.push(p11.x, p11.y, p11.z, p12.x, p12.y, p12.z, p13.x, p13.y, p13.z);
        positions.push(p11.x, p11.y, p11.z, p13.x, p13.y, p13.z, p14.x, p14.y, p14.z);
        positions.push(p11.x, p11.y, p11.z, p21.x, p21.y, p21.z, p12.x, p12.y, p12.z);
        positions.push(p12.x, p12.y, p12.z, p21.x, p21.y, p21.z, p22.x, p22.y, p22.z);
        positions.push(p12.x, p12.y, p12.z, p22.x, p22.y, p22.z, p23.x, p23.y, p23.z);
        positions.push(p12.x, p12.y, p12.z, p23.x, p23.y, p23.z, p13.x, p13.y, p13.z);
        positions.push(p21.x, p21.y, p21.z, p31.x, p31.y, p31.z, p22.x, p22.y, p22.z);
        positions.push(p22.x, p22.y, p22.z, p31.x, p31.y, p31.z, p32.x, p32.y, p32.z);
        positions.push(p22.x, p22.y, p22.z, p32.x, p32.y, p32.z, p23.x, p23.y, p23.z);
        positions.push(p23.x, p23.y, p23.z, p32.x, p32.y, p32.z, p33.x, p33.y, p33.z);
        positions.push(p31.x, p31.y, p31.z, p34.x, p34.y, p34.z, p33.x, p33.y, p33.z);
        positions.push(p31.x, p31.y, p31.z, p33.x, p33.y, p33.z, p32.x, p32.y, p32.z);

        let pA = new Vector3();
        let pB = new Vector3();
        let pC = new Vector3();
        let ba = new Vector3();
        let ca = new Vector3();
        let nx, ny, nz: number;
        let normals = [];
        let colors = [];
        let color = new Color();
        color.setRGB(0.8, 0.8, 0.4);

        let i = -1;
        while (i <= positions.length) {
            pA.set(positions[++i], positions[++i], positions[++i]);
            pB.set(positions[++i], positions[++i], positions[++i]);
            pC.set(positions[++i], positions[++i], positions[++i]);
            ba.subVectors(pB, pA);
            ca.subVectors(pC, pA);
            ba.cross(ca).normalize();
            nx = ba.x; ny = ba.y; nz = ba.z;
            normals.push(nx, ny, nz);
            normals.push(nx, ny, nz);
            normals.push(nx, ny, nz);

            colors.push(color.r, color.g, color.b);
            colors.push(color.r, color.g, color.b);
            colors.push(color.r, color.g, color.b);
        }


        function disposeArray() { this.array = null; }

        geometry.addAttribute('position', new Float32BufferAttribute(positions, 3).onUpload(disposeArray));
        geometry.addAttribute('normal', new Float32BufferAttribute(normals, 3).onUpload(disposeArray));
        geometry.addAttribute('color', new Float32BufferAttribute(colors, 3).onUpload(disposeArray));

        geometry.computeBoundingSphere();

        let material = new MeshPhongMaterial( {
            color: 0xaaaaaa, specular: 0xffffff, shininess: 250,
            side: DoubleSide, vertexColors: VertexColors
        } );

        this.element = new Mesh( geometry, material );
    }
}
