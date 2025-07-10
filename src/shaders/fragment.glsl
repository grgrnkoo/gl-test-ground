precision mediump float;
varying vec2 vUv;

void main() {
  gl_FragColor = vec4(vUv, 0.5 + 0.5 * sin(vUv.x * 10.0), 1.0);
}
