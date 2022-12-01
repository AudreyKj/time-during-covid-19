export const fragmentShader = () => {
    return `
uniform sampler2D map; 
uniform vec3 color1;
uniform vec3 color2;
varying vec2 vUv;

void main() {
   
    vec4 tColor = texture2D(map, vUv);

    gl_FragColor = vec4(mix(color1, color2, vUv.x), 1.0);
    gl_FragColor = vec4(gl_FragColor * tColor); 
     
}
`;
}