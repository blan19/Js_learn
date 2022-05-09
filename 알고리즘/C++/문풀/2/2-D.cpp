#include <bits/stdc++.h>
using namespace std;
const int max_l = 101;
int m, n, k, visited[max_l][max_l], e[max_l][max_l];
vector<int> _ret;
int dy[4] = {-1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1};
int dfs(int y, int x) {
  int temp = 1;
  visited[y][x] = 1;
  for (int i = 0; i < 4; i++) {
    int ny = y + dy[i];
    int nx = x + dx[i];
    if (ny < 0 || ny >= m || nx < 0 || nx >= n || e[ny][nx])
      continue;
    if (visited[ny][nx] == 1)
      continue;
    temp += dfs(ny, nx);
  }
  return temp;
}
int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  cin >> m >> n >> k;
  while (k--) {
    int bx, by, tx, ty;
    cin >> bx >> by >> tx >> ty;
    for (int i = bx; i < tx; i++) {
      for (int j = by; j < ty; j++) {
        e[j][i] = 1;
      }
    }
  }
  for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
      if (e[i][j] == 0 && !visited[i][j]) {
        _ret.push_back(dfs(i, j));
      }
    }
  }
  cout << _ret.size() << "\n";
  sort(_ret.begin(), _ret.end());
  for (int iter : _ret)
    cout << iter << "\n";
  return 0;
}