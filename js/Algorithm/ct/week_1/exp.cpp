#include <bits/stdc++.h>

using namespace std;

// int gcd(int a, int b) {
//   if(a == 0) return b;
//   return gcd(b % a, a);
// }

// int main() {
//   int a = 12;
//   int b = 20;
//   cout << gcd(a, b) << "\n";
//   return 0;
// }

vector<string> split(string input, string delimiter) {
  vector<string> ret;
  long long pos = 0;
  string token = "";
  while ((pos = input.find(delimiter)) != string::npos)
  {
    token = input.substr(0, pos);
    ret.push_back(token);
    input.erase(0, pos + delimiter.length());
  }
  ret.push_back(input);
  return ret;
}

int main() {
  string s = "안녕하세요 저는 박준서입니다 글로벌미디어학과 18학번이죠";
  string d = " ";
  vector<string> a = split(s, d);
  // for(string b : a) cout << b << "\n";
  return 0;
}
