#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
int n;
int main() {
  while(scanf("%d", &n) != EOF) {
    int ret = 1;
    ll temp = 0;
    while(true) {
      temp = (temp * 10) + 1;
      if(temp % n == 0) {
        printf("%d\n", ret);
        break;
      }
      ret++;
    }
  }
  return 0;
}