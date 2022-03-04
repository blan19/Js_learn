#include <bits/stdc++.h>

using namespace std;

vector<int> v;
// int main() {
//   for(int i = 1; i<10; i++) v.push_back(i);
//   rotate(v.begin(), v.begin() + 1, v.end());
//   for(std::vector<int>::iterator iter = v.begin(); iter != v.end(); ++iter) std::cout << " " << *iter;
//   std::cout << "\n";
//   return 0;
// }

int main() {
  for(int i = 1; i<10; i++) v.push_back(i);
  int max = *max_element(v.begin(), v.end());
  // for(std::vector<int>::iterator iter = v.begin(); iter != v.end(); ++iter) std::cout << " " << *iter;
  cout << max << "\n";
  return 0;
}