interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

const emails: DropdownItem<string>[] = [
  { value: "naver.com", selected: true },
  { value: "gmail.com", selected: false },
  { value: "hanmail.net", selected: false },
];

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

const createDropdownItem = <T>(item: DropdownItem<T>): HTMLElement => {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
};

emails.forEach(function (email): void {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector("#email-dropdown");
  selectTag.appendChild(item);
});

// 유연하게 타입을 가지고 와 사용할때 제네릭!

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj2: Dropdown<string> = { value: "hi", selected: false };
