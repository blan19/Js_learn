interface Vector {
  x: number;
  y: number;
  z: number;
}

interface VectorUpdate {
  x?: number;
  y?: number;
  z?: number;
}

class UIWidget {
  constructor(init: Vector) {
    /* ... */
  }
  update(vector: VectorUpdate) {
    /* ... */
  }
}
