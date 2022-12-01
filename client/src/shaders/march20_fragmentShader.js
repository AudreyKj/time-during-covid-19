export const march20_2_fragmentShader = () => {
    return `
    uniform sampler2D map; 
    uniform vec3 color1;
    uniform vec3 color2;
    varying vec2 vUv;
    
    void main() {
       
        vec4 tColor = texture2D(map, vUv);
        gl_FragColor = vec4(color1, 1.0);
        
        float alpha = smoothstep(1.0, 0.5, vUv.x);

        float colorMix = smoothstep(1.0, 2.0, vUv.x);

    gl_FragColor = vec4(mix(color1, color2, colorMix), alpha);
    gl_FragColor = vec4(gl_FragColor * tColor);
}
`;
}