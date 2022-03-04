#include <bits/stdc++.h>
using namespace std;
int t, n;
string a, b;
int main(){
    cin >> t;
    while(t--){
        map<string, int> _map;
        cin >> n;
         for(int i = 0; i < n; i++){
            cin >> a >> b;
            _map[b]++;
        }
        long long ret = 1;
        for(auto c : _map){
            ret *= ((long long)c.second + 1);
        }
        ret--;
        cout << ret << "\n";
    }
    return 0;
}

// #include <bits/stdc++.h>
// using namespace std;
// map<string, string> omap;
// string ct, cl;
// int n;
// int main() {
//   ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
//   cin >> n;
//   for(int i = 0; i < n; i++) {
//     cin >> cl >> ct;
//     auto search = omap.find(ct);
//     if(search != omap.end()) {

//     }
//   }
  
//   return 0;
// }

/**
 * @brief 
 * n
 * for <= n
 * cloth input
 * 중복검사 -> 맵
 * 조합
 */

