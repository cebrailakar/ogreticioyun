<script lang="ts">
  import { T, useTask } from '@threlte/core';
  import { interactivity } from '@threlte/extras';
  import { Spring } from 'svelte/motion';

  interactivity();

  const scale = new Spring(1);

  // rotation için basit number
  let rotationY = 0;

  // useTask ile sürekli döndür
  useTask((delta) => {
    rotationY += delta; // Y ekseni
  });
</script>

<T.PerspectiveCamera
  makeDefault
  position={[10, 10, 10]}
  oncreate={(ref) => {
    ref.lookAt(0, 1, 0);
  }}
/>

<T.Mesh
  rotation={[0, rotationY, 0]}
  position-y={1}
  scale={scale.current}
  onpointerenter={() => { scale.target = 15 }}
  onpointerleave={() => { scale.target = 5 }}
>
  <T.BoxGeometry />
  <T.MeshBasicMaterial color="hotpink" />
</T.Mesh>
