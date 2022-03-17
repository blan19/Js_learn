#include <stdio.h>

int main () {
  int a,b,menunum;
  printf("Select Number 1,2\n");
  scanf("%d %d", &a, &b);
  printf("Select Operation\n");
  printf("(1) add (2) sub (3) division\n");
  scanf("%d", &menunum);
  switch (menunum)
  {
  case 1:
    printf("a + b = %d\n", a+b);
    break;

  case 2:
    printf("a + b = %d\n", a-b);
    break;

  case 3:
    printf("a + b = %d\n", a/b);
    break;
  
  default:
    break;
  }
}