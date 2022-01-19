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

// vector<string> split(string input, string delimiter) {
//   vector<string> ret;
//   long long pos = 0;
//   string token = "";
//   while((pos = input.find(delimiter)) != string::npos) {
//     token = input.substr(0, pos);
//     ret.push_back(token);
//     input.erase(0, pos + delimiter.length());
//   }
//   ret.push_back(input);
//   return ret;
// }

// int main() {
//   string t = "도커,쿠버네티스 aws nest.js next.js react,vue";
//   string d = " ";
//   vector<string> result = split(t, d);
//   for(string iter : result) cout << iter << endl;
//   return 0;
// }

int main() {
  int a[16] = {0, 1, 2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10};
  vector<int> v;
  for(int i = 0; i < 11; i++) v.push_back(a[i]);
  int goal = 0;
  cout << lower_bound(v.begin(), v.end(), goal) - v.begin() << "\n";
  return 0;
}