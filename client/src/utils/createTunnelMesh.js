import * as THREE from "three";
import { colors } from './colorsTunnel';

export function createTunnelMesh(){
    const points4 = [];

    for (var i = 0; i < 5; i += 1) {
        points4.push(new THREE.Vector3(0, 0, 1.3 * (i / 4)))
    }

    this.tunnelLength = 1.3;

    this.curve4 = new THREE.CatmullRomCurve3(points4);

    this.curve4.type = "catmullrom";

    this.tubeGeometry4 = new THREE.TubeBufferGeometry(this.curve4, 70, 0.02, 50, false);

    //textures 
    const textureLoader = new THREE.TextureLoader(this.loadingManager);

    this.loadTextures(textureLoader)

    for (let i = 0; i < this.textures.length; i++) {
        this.renderer.initTexture(this.textures[i])
    }
    this.tubeMaterials = []
    this.uniforms = []

    for (let tunnelIndex = 0; tunnelIndex <= this.textures.length; tunnelIndex++) {

        this.uniforms[tunnelIndex] = {
            color1: {
                value: new THREE.Color(colors[tunnelIndex])
            },
            color2: {
                value: new THREE.Color(colors[tunnelIndex + 1])
            },
            map: { type: 't', value: this.textures[tunnelIndex] },
        };
    }

    for (var materialIndex = 0; materialIndex < this.textures.length; materialIndex++) {
        this.textures[materialIndex].minFilter = THREE.LinearMipMapLinearFilter
        this.textures[materialIndex].maxFilter = THREE.LinearMipMapLinearFilter
        this.textures[materialIndex].anisotropy = this.anisotropy
        this.textures[materialIndex].wrapS = THREE.ClampToEdgeWrapping
        this.textures[materialIndex].wrapT = THREE.ClampToEdgeWrapping
        this.textures[materialIndex].repeat.set(1, 1)
        this.textures[materialIndex].flipY = false

        if (materialIndex === this.textures.length - 1) {
            this.tubeMaterials[materialIndex] = new THREE.ShaderMaterial({
                uniforms: this.uniforms[materialIndex],
                fragmentShader: this.march20_2_fragmentShader(),
                vertexShader: this.vertexShader(),
                side: THREE.BackSide,
                transparent: true,
                premultipliedAlpha: false,
                blending: THREE.CustomBlending,
                blendSrc: THREE.SrcAlphaFactor,
                blendDst: THREE.SrcColorFactor,
            });
        } else {
            this.tubeMaterials[materialIndex] = new THREE.ShaderMaterial({
                uniforms: this.uniforms[materialIndex],
                fragmentShader: this.fragmentShader(),
                vertexShader: this.vertexShader(),
                side: THREE.BackSide,
                transparent: true,
                premultipliedAlpha: false,
                blending: THREE.CustomBlending,
                blendSrc: THREE.SrcAlphaFactor,
                blendDst: THREE.SrcColorFactor,
            });
        }
    }

    const group = new THREE.Group();
    let object;

    for (let i = 0; i <= 35; i++) {
        object = new THREE.Mesh(this.tubeGeometry4, this.tubeMaterials[i]);
        object.position.z = i * this.tunnelLength

        if (i === 35) this.lastAddedMesh = object.position.z;
        group.add(object)
    }

    this.scene.add(group);

    this.createProgressiveLoadedMeshes();
}