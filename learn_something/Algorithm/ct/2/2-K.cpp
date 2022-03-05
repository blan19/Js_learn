#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
int t, n, retA, retB;
int main () {
  cin >> t;
  while(t--) {
    cin >> n;
    retA = 0; 
    retB = 0;
    for(int i = 2; i <= n; i*=2) {
      retA += n / i;
    }
    for(int i = 5; i <= n; i*=5) {
      retB += n / i;
    }
    cout << min(retA, retB) << "\n";
  }
  return 0;
}