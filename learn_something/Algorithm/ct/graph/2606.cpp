// 바이러스
#include <algorithm>
#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;
int com, n;
bool visited[105];
vector<int> v[105];
int dfs(int start) {
  int count = 1;
  visited[start] = true;
  for (int i = 0; i < v[start].size(); i++) {
    if (!visited[v[start][i]]) {
      count += dfs(v[start][i]);
    }
  }
  return count;
}
int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  cin >> com;
  cin >> n;
  for (int i = 0; i < n; i++) {
    int from, to;
    cin >> from >> to;
    v[from].push_back(to);
    v[to].push_back(from);
  }
  cout << dfs(1) - 1 << "\n";
  return 0;
}