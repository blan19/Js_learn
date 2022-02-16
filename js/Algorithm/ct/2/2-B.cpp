#include <bits/stdc++.h>
using namespace std;
const int max_l = 50;
int y, x, ny, nx, n, m, c, target, ret;
int a[max_l][max_l];
bool visited[max_l][max_l];
int dy[4] = {-1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1};
void dfs(int y, int x) {
  visited[y][x] = 1;
  for(int i = 0; i < 4; i++) {
    ny = y + dy[i];
    nx = x + dx[i];
    if(ny < 0 || ny >= n || nx < 0 || nx >= m || a[ny][nx] == 0) continue;
    if(a[ny][nx] == 1 && !visited[ny][nx]) {
      dfs(ny, nx);
    }
  }
  return;
}
int main () {
  scanf("%d", &c);
  while(c--) {
    scanf("%d %d %d", &m, &n, &target);
    ret = 0;
    fill(&a[0][0], &a[0][0] + 51 * 51, 0);
    fill(&visited[0][0], &visited[0][0] + 51 * 51, 0);
    for(int i = 0; i < target; i++) {
      scanf("%d %d", &x, &y);
      a[y][x] = 1;
    }
    for(int i = 0; i < n; i++) {
      for(int j = 0; j < m; j++) {
        if(a[i][j] == 1 && !visited[i][j]) {
          dfs(i, j);
    			ret++; 
			  } 
      }
    }
    cout << ret << "\n";
  }
  return 0;
}

/**
 * @brief 
 * 
 * dfs
 * 오버플로우 방지
 * 0으로 초기화
 * 입력 받고 1
 */