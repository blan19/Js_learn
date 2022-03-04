#include <bits/stdc++.h>
using namespace std;
map<int, int> omap;
int A, B, C;
int a[3], d[3], sum;

int main() {
  for(int i = 1; i <= 100; i++) { 
    omap.insert({i, 0});
  }
  cin >> A >> B >> C;
  for(int i = 0; i < 3; i++) {
    cin >> a[i] >> d[i];
    for(int j = a[i]; j < d[i]; j++) {
      auto search = omap.find(j);
      if(search != omap.end()) {
        search -> second++;
      }
    }
  }
  for(auto iter : omap) {
    if(iter.second == 1) {
      sum += A * (iter.second);
    } else if(iter.second == 2) {
      sum += B * (iter.second);
    } else if(iter.second == 3) {
      sum += C * (iter.second);
    }
  }
  cout << sum << "\n";
  return 0;
}
/**
 * @brief 
 * 개선할 점 
 * 1. 자료구조 할당을 신중히 하자
 * -> 내 코드의 경우 a[3], d[3]의 배열 대신 인트형으로 할당이 가능했다
 * 
#include <bits/stdc++.h>
using namespace std;   
int A, B, C, a, b, cnt[104], ret;
int main(){
	cin >> A >> B >> C; 
	for(int i = 0; i < 3; i++){
		cin >> a >> b; 
		for(int j = a; j < b; j++)cnt[j]++;
	}
	for(int j = 1; j < 100; j++){
		if(cnt[j]){
			if(cnt[j] == 1) ret += A;
			else if(cnt[j] == 2)ret += B * 2;
			else if(cnt[j] == 3)ret += C * 3;
		}
	}
	cout << ret << "\n"; 
    return 0;
}
 * 
 */