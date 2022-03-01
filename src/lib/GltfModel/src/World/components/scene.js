import { Color, Scene } from 'three';

function createScene() {
  const scene = new Scene();

  scene.background = new Color('#F8F8F8');

  return scene;
}

export { createScene };
