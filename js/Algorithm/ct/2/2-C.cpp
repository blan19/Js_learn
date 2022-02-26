#include <bits/stdc++.h>
using namespace std;
int temp, ret = 1, n, a[101][101], visited[101][101], e[101][101];
int dy[4] = {-1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1};
void dfs (int y, int x) {
  visited[y][x] = 1;
  for(int i = 0; i < 4; i++) {
    int ny = y + dy[i];
    int nx = x + dx[i];
    if(visited[ny][nx] == 1) continue;
    if(ny < 0 || ny >= n || nx < 0 || nx >= n || e[ny][nx] == 1) continue;
    dfs(ny, nx);
  }
  return;
}
int main () {
  ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
  cin >> n;
  for(int i = 0; i < n; i++) {
    for(int j = 0; j < n; j++) {
      cin >> a[i][j];
    }
  }

  for(int d = 1; d < 101; d++) {
    fill(&visited[0][0], &visited[0][0] + 101*101, 0);
    temp = 0;
    for(int i = 0; i < n; i++) {
      for(int j = 0; j < n; j++) {
        if(e[i][j] == 1) continue;
        if(a[i][j] <= d) e[i][j] = 1;
      }
    }
    for(int i = 0; i < n; i++) {
      for(int j = 0; j < n; j++) {
        if(e[i][j] == 0 && !visited[i][j]) {
          temp++;
          dfs(i, j);
        }
      }
    }
    ret = max(ret, temp);
  }
  cout << ret << "\n";
  return 0;
}
