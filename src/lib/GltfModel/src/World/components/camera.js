import { PerspectiveCamera } from 'three';

function createCamera() {
  const camera = new PerspectiveCamera(60, 10, 0.1, 160);

  camera.position.set(-2, 2, 6.5);

  return camera;
}

export { createCamera };
