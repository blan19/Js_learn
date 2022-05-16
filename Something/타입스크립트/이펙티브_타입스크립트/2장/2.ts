interface Person {
  name: string;
}

interface Lifespan {
  birth: Date;
  death?: Date;
}

type PersonSapn = Person & Lifespan;

type PersonSapn_2 = Person | Lifespan;

const ps: PersonSapn = {
  name: "Park Junseo",
  birth: new Date("1996-10-05"),
  death: new Date("2200-01-01"),
};

const ps_2: PersonSapn_2 = {
  name: "asd",
  birth: new Date("1996-10-05"),
  death: new Date("2200-01-01"),
};

type K = keyof (Person | Lifespan);

type K_2 = keyof (Person & Lifespan);

type K_3 = keyof Person & keyof Lifespan;

type K_4 = keyof Person | keyof Lifespan;

type T_1 = keyof Person;

type T_2 = keyof Lifespan;
