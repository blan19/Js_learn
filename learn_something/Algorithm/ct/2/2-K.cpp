#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
int t, n;
int factorial(ll n) {
  if(n <= 1) {
    return 1;
  }
  return n * factorial(n-1);
}
int main () {
  // while(t--) {
  //   cin >> n;
  // }
  cout << factorial(10) << "\n";
  return 0;
}