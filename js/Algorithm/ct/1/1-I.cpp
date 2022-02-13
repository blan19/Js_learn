#include <bits/stdc++.h>
using namespace std;
int n, m;
string s; 
map<string, int> _map;
map<int, string> _map2;
int main(){  
	ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
	cin >> n >> m; 
	for(int i = 0; i < n; i++){
		cin >> s; 
		_map[s] = i + 1;  
		_map2[i + 1] = s; 
	}
	for(int i = 0; i < m; i++){
		cin >> s; 
		if(stoi(s) == 0){
			cout << _map[s] << "\n";
		} else {
			cout << _map2[atoi(s.c_str())] << "\n"; 
		}
	} 
}

// atoi : chat * -> int; (int 부분만 빼서 형변환)
// c.str : string -> char *
//