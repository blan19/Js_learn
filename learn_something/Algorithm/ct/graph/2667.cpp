// 단지번호붙이기
#include <algorithm>
#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;
int n, ny, nx, count, arr[30][30], visited[30][30];
int dy[4] = {-1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1};
vector<int> v;

int dfs(int y, int x) {
  int count = 1;
  visited[y][x] = 1;
  for (int i = 0; i < 4; i++) {
    ny = dy[i] + y;
    nx = dx[i] + x;
    if (ny < 0 || ny >= n || nx < 0 || nx >= n || arr[ny][nx] == 0)
      continue;
    if (visited[ny][nx] == 1)
      continue;
    count += dfs(ny, nx);
  }
  return count;
}

int main() {
  cin >> n;
  for (int i = 0; i < n; i++) {
    string a;
    cin >> a;
    for (int j = 0; j < n; j++) {
      arr[i][j] = a[j] - '0';
    }
  }

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      if (arr[i][j] == 1 && !visited[i][j]) {
        v.push_back(dfs(i, j));
      }
    }
  }
  sort(v.begin(), v.end());
  cout << v.size() << "\n";
  for (int iter : v)
    cout << iter << "\n";
  return 0;
}