const Worker = class {
  run() {
    console.log("working");
  }
  print() {
    this.run();
  }
};

const HardWorking = class extends Worker {
  run() {
    console.log("hard working");
  }
};

const worker = new HardWorking();

console.log(worker instanceof Worker); // true

worker.print();

const EssentialObject = class {
  #name = "";
  #screen = null;
  constructor(name) {
    this.#name = name;
  }

  camouflage() {
    this.#screen = (Math.random() * 10).toString(16).replace(".", "");
  }

  get name() {
    return this.#screen || this.#name;
  }
};
