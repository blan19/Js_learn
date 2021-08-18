const closure = (static) => {
  let staticCount = static || 0;
  return (local) => {
    let localCount = local || 0;
    return {
      increase: () => {
        return {
          static: ++staticCount,
          local: ++localCount,
        };
      },
      decrease: () => {
        return {
          static: --staticCount,
          local: --localCount,
        };
      },
    };
  };
};

const count1 = closure(5);
const count2 = closure(10);
const inner = count2();
console.log(count1().increase());
console.log(count2().increase());
console.log(inner.increase());
console.log(inner.increase());

// const closure = (static) => {
//   let staticCount = static || 0;
//   return (local) => {
//     let localCount = local || 0;
//     const increase = () => {
//       return {
//         static: ++staticCount,
//         local: ++localCount,
//       };
//     };
//     const decrease = () => {
//       return {
//         static: --staticCount,
//         local: --localCount,
//       };
//     };
//     return { increase, decrease };
//   };
// };

// const count1 = closure(5);
// const count2 = closure(10);
