#include <bits/stdc++.h>
using namespace std;
int n;
string input;
int main () {
  ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
  cin >> n;
  while(n--) {
    cin >> input;
    if(input.size() < 2) break;
    stack<char> s;
    for(int i = 0; i < input.size(); i++){
      if(!s.empty() && s.top() == '(' && s.top() != input[i]) {
        s.pop();
      } else {
        s.push(input[i]);
      }
    }
    if(s.empty()) cout << "YES" << "\n";
    else cout << "NO" << "\n";
  }
  return 0;
}