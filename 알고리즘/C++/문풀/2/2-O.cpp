// * 4949 균형잡힌 세상
#include <bits/stdc++.h>
using namespace std;
string input;
int main () {
  ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
  while(true) {
    getline(cin, input);
    if(input == ".") break;
    stack<char> a;
    bool check = false;
    for(int i = 0; i < input.size(); i++) {
      if(input[i] == ')') {
        if(a.empty() || a.top() == '[') {
          check = true;
          break;
        } else {
          a.pop();
        }
      }
      if(input[i] == ']') {
        if(a.empty() || a.top() == '(') {
          check = true;
          break;
        } else {
          a.pop();
        }
      }

      if(input[i] == '(') a.push(input[i]);
      if(input[i] == '[') a.push(input[i]);
    }
    if(!check && a.empty()) cout << "yes\n";
    else cout << "no\n";
  }
  return 0;
}