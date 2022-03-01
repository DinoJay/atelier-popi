import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { setupModel } from './setupModel.js';

async function loadBirds() {
  const loader = new GLTFLoader();

  const [parrotData, flamingoData, storkData] = await Promise.all([
    loader.loadAsync('table2.glb'),
    // loader.loadAsync('Flamingo.glb'),
    // loader.loadAsync('Stork.glb'),
  ]);

  console.log('Squaaawk!', parrotData);

  const parrot = setupModel(parrotData);
  parrot.traverse(function (node) {

    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true
    }

  });
  parrot.position.set(1, 0, 2.5);

  // const flamingo = setupModel(flamingoData);
  // flamingo.position.set(7.5, 0, -10);

  // const stork = setupModel(storkData);
  // stork.position.set(0, -2.5, -10);

  return {
    parrot,
    // flamingo,
    // stork,
  };
}

export { loadBirds };
