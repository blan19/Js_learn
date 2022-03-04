#include <bits/stdc++.h>
using namespace std;
#define sz(x) ((int)(x).size())    
#define f first
#define s second
typedef unsigned long long ll; 
const int INF = 987654321;  
string s; 
int cnt[30], lcnt, vcnt;
bool isVowel(int idx){
	return (idx == 0 || idx == 4 || idx == 8 || idx == 14 || idx == 20);
}
int main () { 
  while(true) {
    cin >> s;
    if(s == "end") break;
    memset(cnt, 0, sizeof(cnt));
    vcnt = lcnt = 0;
    bool flag = 0;
    for(int i = 0; i < s.size(); i++) {
      int idx = s[i] - 'a';
      if(isVowel(idx)) {
        vcnt++;
        lcnt = 0;
      } else {
        vcnt = 0;
        lcnt++;
      }
      if(lcnt == 3 || vcnt == 3) flag = 1;
      if(i >= 1 && (s[i - 1] == s[i]) && (idx != 4 && idx != 14)){
				flag  = 1;
			} 
    }
    if(!cnt[0] && !cnt[4] && !cnt[8] && !cnt[14] && !cnt[20]) flag = 1;
    if(flag) cout << "<" << s << ">" << " is not acceptable.\n";
		else cout << "<" << s << ">" << " is acceptable.\n";
  }
	return 0;
}