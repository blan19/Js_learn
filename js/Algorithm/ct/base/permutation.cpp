#include <bits/stdc++.h>

using namespace std;

int a[3] = {1, 2, 3};
vector<int> v;

void printV(vector<int> &v) {
  for(int i = 0; i < v.size(); i++) {
    cout << v[i] << " ";
  }
  cout << "\n";
}

// int main() {
//   int a[3] = {1, 2, 3};
//   vector<int> v;

//   for(int i = 0; i < 3; i++) v.push_back(a[i]);
//   do {
//       printV(v);
//   } while (next_permutation(v.begin(), v.end()));

//   cout << "------------------------" << "\n";

//   v.clear();

//   for(int i = 2; i >= 0; i--) v.push_back(a[i]);
//   do {
//     printV(v);
//   } while (prev_permutation(v.begin(), v.end()));
//   return 0;
// }

void makePermutation(int n, int r, int depth) {
  if( r== depth) {
    printV(v);
    return ;
  }
  for (int i= depth; i < n; i++) {
    swap(v[i], v[depth]);
    makePermutation(n, r, depth + 1);
    swap(v[i], v[depth]);
  }
  return ;
}

int main() {
  for(int i = 0; i < 3; i++) v.push_back(a[i]);
  makePermutation(3, 3, 0);
  return 0;
}