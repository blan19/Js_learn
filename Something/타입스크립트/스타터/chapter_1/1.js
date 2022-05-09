var area = function (material) {
    switch (material.kind) {
        case "rectangle":
            return material.width * material.height;
        case "circle":
            return Math.PI * Math.pow(material.radius, 2);
    }
};
