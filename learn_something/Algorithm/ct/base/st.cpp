#include <bits/stdc++.h>

using namespace std;

int main() {
  ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
  string str = "life is limited";
  cout << str.substr(0, 3) << "\n";
  reverse(str.begin(), str.end());
  cout << str << "\n";
  str += "dopa!!";
  cout << str << "\n";
  return 0;
}