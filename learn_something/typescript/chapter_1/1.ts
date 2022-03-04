interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Area = Rectangle | Circle;

const area = (material: Area): number => {
  switch (material.kind) {
    case "rectangle":
      return material.width * material.height;
    case "circle":
      return Math.PI * material.radius ** 2;
  }
};
