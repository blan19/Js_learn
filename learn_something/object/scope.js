let x = "global";
function ex() {
  let x = "local";
  x = "change";
}
ex(); // x를 바꿔본다.
alert(x); // 여전히 'global'
