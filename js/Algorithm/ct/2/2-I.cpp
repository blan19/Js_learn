#include <bits/stdc++.h>
using namespace std;
const int max_l = 10001;
int n, ret[max_l];
vector<string> v;
string s;
bool cmp(string a, string b){
	if(a.size() == b.size()) return a < b;
	return a.size() < b.size();
}
int main () {
  cin >> n;
  while(n--) {
    cin >> s;
    string temp = "";
    for(int i = 0; i < s.size(); i++) {
      int idx = s[i] - 48;
      if(idx >= 0 && idx <= 9) {
        temp += s[i];
      } else {
        if(temp.size()) {
          while(true) {
            if(temp.size() && temp.front() == '0') temp.erase(temp.begin());
            else break;
          }
          if(temp.size() == 0) temp = '0';
          v.push_back(temp);
          temp = "";
        }
      }
    }
    if(temp.size()) {
      while(true) {
        if(temp.size() && temp.front() == '0') temp.erase(temp.begin());
        else break;
      }
      if(temp.size() == 0) temp = '0';
      v.push_back(temp);
      temp = "";
    }
  }
  sort(v.begin(), v.end(), cmp);
  for(auto iter : v) cout << iter << "\n";
  return 0;
}