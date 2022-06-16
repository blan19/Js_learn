class AVL {
  constructor(value) {
    this.left = null;
    this.rigth = null;
    this.value = value;
    this.depth = 1;
  }

  setDepthBasedOnChildren() {
    if (this.node == null) this.depth = 1;
    if (this.left !== null) this.depth = this.left.depth + 1;
    if (this.rigth !== null && this.depth <= this.rigth.depth)
      this.depth = this.rigth.depth + 1;
  }

  // * 단일 회전
  // * 왼쪽 회전
}
