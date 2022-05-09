#include<bits/stdc++.h>
using namespace std;  
typedef long long ll;  
string str; 
int cnt[26];
int main(){
    ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
    cin >> str; 
    for(char a : str){
    	cnt[a - 'a']++;
	}
	for(int i = 0; i < 26; i++) cout << cnt[i] << " ";
	 
	return 0; 
}
// #include <bits/stdc++.h>
// using namespace std;
// string str;
// string a[26];
// int main() {
//   map<string, int> omap;
//   cin >> str;
//   for(int i = 0; i < 26; i++) {
//     a[i] = (char)97+i;
//     omap.insert({a[i], 0});
//   }
//   for(auto iter : str) {
//     auto search = omap.find(iter);
//     if(search != omap.end()) {
//       search -> second++;
//     }
//     // if(omap.count(iter)) {
//     //   omap[iter].second++;
//     // }
//   }
//   for(auto iter = omap.begin(); iter != omap.end(); ++iter) cout << (*iter).second << "\n";
//   // for(auto iter : omap) cout << (*iter).second << "\n";
//   return 0;
// }
