type Heroes = "Hulk" | "Capt" | "Thor";
type HeroAges = { [p in Heroes]: number };

const ages: HeroAges = {
  Hulk: 1,
  Capt: 2,
  Thor: 3,
};
