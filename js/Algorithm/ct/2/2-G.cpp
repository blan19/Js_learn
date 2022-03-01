#include <bits/stdc++.h>
using namespace std;
const int max_l = 10001;
vector<pair<int, int>> v;
unordered_map<int, int> umap;
unordered_map<int, int> umap_first;
int n,c, temp;
bool cmp (pair<int, int> a, pair<int, int> b) {
  if(a.first == b.first){
		return umap_first[a.second] < umap_first[b.second];
	}
  return a.first > b.first;
}
int main() {
  ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
  cin >> n >> c;
  for(int i = 0; i < n; i++) {
    int t;
    cin >> t;
    umap[t]++;
    if(umap_first[t] == 0) umap_first[t] = i + 1;
  }
  for(auto iter : umap) v.push_back({iter.second, iter.first});
  sort(v.begin(), v.end(), cmp);
  for(auto i : v){
		for(int j = 0; j < i.first; j++){
			cout << i.second << " ";
		}
	}
  cout << "\n";
  return 0;
}