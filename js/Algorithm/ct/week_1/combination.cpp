#include <bits/stdc++.h>

using namespace std;

int n = 5;
int k = 3;
int a[5] = {1, 2, 3, 4, 5};
vector<int> v;

void printV(vector<int> &v) {
  for(int i = 0; i < v.size(); i++) {
    cout << v[i] << " ";
  }
  cout << endl;
}

void combination(int start, vector<int> v) {
  if(v.size() == k) {
    printV(v);
    return;
  }
  for(int i = start + 1; i < n; i++) {
    v.push_back(i);
    combination(i, v);
    v.pop_back();
  }
  return ;
}

int main() {
  combination(-1, v);
  return 0;
}


// 조합은 순서에 상관없이 오로지 그냥 다양하게 뽑는 것