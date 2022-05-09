function getText<T>(text: T): T {
  return text;
}

getText<string>("hi");
getText<boolean>(true);

const getEcho = <T>(text: T): T => {
  return text;
};

interface GenericLogText<T> {
  (text: T): T;
}

const myString: GenericLogText<string> = getEcho;
myString("asd");

const getProperty = <T, O extends keyof T>(obj: T, key: O) => {
  return obj[key];
};

const obj = { a: 1, b: 2 };
getProperty(obj, "a");
