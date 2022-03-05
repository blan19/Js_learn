#include <bits/stdc++.h>
using namespace std;
const int max_l = 104;
int h, w, cnt, ret[max_l][max_l];
bool check;
string s;
int main () {
  ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
  cin >> h >> w;
  fill(&ret[0][0], &ret[0][0] + max_l*max_l, -1);
  for(int i = 0; i < h; i++) {
    cin >> s;
    check = 0;
    cnt = -1;
    for(int j = 0; j < w; j++) {
      ret[i][j] = cnt;
      if(s[j] == 'c') {
        ret[i][j] = 0;
        cnt = 0;
        check = 1;
      }
      if(check) cnt++;
    }
  }
  for(int i = 0; i < h; i++) {
    for(int j = 0; j < w; j++) {
      cout << ret[i][j] << " ";
    }
    cout << "\n";
  }
  return 0;
}