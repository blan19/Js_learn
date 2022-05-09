#include <bits/stdc++.h>
using namespace std;
int x,y;
int main () {
  queue<pair<int, int> > q;
  q.push({1, 2});
  tie(y, x) = q.front();
  cout << y << "\n";
  return 0;
}