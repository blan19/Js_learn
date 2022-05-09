#include <bits/stdc++.h>
using namespace std;
const int max_l = 104;
int n, m, ret, x, y, nx, ny, a[max_l][max_l], visited[max_l][max_l];
int dx[4] = {0, 1, 0, -1};
int dy[4] = {-1, 0, 1, 0};
queue<pair<int,int>> q;
void bfs() {
  visited[0][0] = 1;
  q.push({0, 0});
  while(q.size()) {
    tie(y, x) = q.front(); q.pop();
    for(int i = 0; i < 4; i++) {
      ny = y + dy[i];
      nx = x + dx[i];
      if(ny < 0 || ny >= n || nx < 0 || nx >= m || a[ny][nx] == 0) continue;
      if(visited[ny][nx]) continue;
      visited[ny][nx] = visited[y][x] + 1;
      q.push({ny, nx});
    }
  }
}
int main () {
  scanf("%d %d", &n, &m);
  for(int i = 0; i < n; i++) {
    for(int j = 0; j < m; j++) {
      scanf("%1d", &a[i][j]);
    }
  }
  bfs();
  printf("%d\n", visited[n-1][m-1]);
  return 0;
}