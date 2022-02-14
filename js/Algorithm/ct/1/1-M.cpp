#include <bits/stdc++.h>
using namespace std;
int n, cnt;
string s;
int main () {
  ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
  cin >> n;
  for(int i = 0; i < n; i++) {
    cin >> s;
    for(int j = 0; j < s.size() - 1; j++) {
      if(s[j] == s[j+1]) {
        cnt++;
        break;
      }
    }
  }
  cout << cnt << "\n";
  return 0;
}