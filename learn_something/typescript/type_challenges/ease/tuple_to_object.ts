/*
  11 - Tuple to Object
  -------
  by sinoon (@sinoon) #쉬움 
  
  ### 질문
  
  배열(튜플)을 받아, 각 원소의 값을 key/value로 갖는 오브젝트 타입을 반환하는 타입을 구현하세요.
  
  예시:
  
  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
  
  type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```
  
  > GitHub에서 보기: https://tsch.js.org/11/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type TupleToObject<T extends readonly string[]> = { [K in T[number]]: K };
