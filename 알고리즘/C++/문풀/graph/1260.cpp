#include <bits/stdc++.h>
using namespace std;
int n, m, start;
vector<int> adj[10005];
queue<int> q;
bool visited[10005];
void dfs(int v) {
  visited[v] = true;
  cout << v << " ";
  for (int i = 0; i < adj[v].size(); i++) {
    if (!visited[adj[v][i]]) {
      dfs(adj[v][i]);
    }
  }
}
void bfs(int v) {
  visited[v] = true;
  q.push(v);
  while (q.size()) {
    int current = q.front();
    q.pop();
    cout << current << " ";
    for (int i = 0; i < adj[current].size(); i++) {
      if (!visited[adj[current][i]]) {
        visited[adj[current][i]] = true;
        q.push(adj[current][i]);
      }
    }
  }
}
int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  cin >> n >> m >> start;
  for (int i = 0; i < m; i++) {
    int v1, v2;
    cin >> v1 >> v2;
    adj[v1].push_back(v2);
    adj[v2].push_back(v1);
  }
  for (int i = 0; i < m; i++) {
    sort(adj[i].begin(), adj[i].end());
  }
  dfs(start);
  cout << "\n";
  memset(visited, false, sizeof(visited));
  bfs(start);
  return 0;
}