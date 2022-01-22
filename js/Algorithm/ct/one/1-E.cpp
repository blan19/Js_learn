#include <bits/stdc++.h>
using namespace std;
map<char, int> omap;
int N;
string input, ret;
int main() {
  ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
  cin >> N;
  for(int i = 0; i < N; i++) {
    cin >> input;
    const char * temp = input.c_str();
    auto search = omap.find(*temp);
    if(search != omap.end()) {
      search -> second++;
    } else {
      omap.insert({(*temp), 1});
    }
    // if(search != omap.end())
  }
  for(auto iter : omap) {
    if(iter.second >= 5) {
      ret += iter.first; 
    }
  };
  sort(ret.begin(), ret.end());
  if(ret == "") {
    cout << "PREDAJA" << "\n";
  } else {
    cout << ret << "\n";
  }
  return 0;
}

/**
 * @brief 
 * 
 * 입력 값을 받은 후
 * 받은 입력 값 만큼 반복문을 돌며 선수 이름을 받는다
 * 받은 즉시 맵에 저장한 후 카운트한다, 중복 키 값이면 카운트를 증가시킨다
 * 카운트가 5이상인 벨류 값이 있다면, 스트링에 키값을 저장한다
 * 없다면 기권을 출력
 */

/**
 * @brief 
 * answer
 * 
#include<bits/stdc++.h>
using namespace std; 
int n, cnt[26]; 
string s, ret; 
int main(){
    cin >> n; 
    for(int i = 0; i < n; i++){
        cin >> s; 
        cnt[s[0] - 'a']++;
    }
    for(int i = 0; i < 26; i++)if(cnt[i] >= 5) ret+=  i + 'a'; 
    if(ret.size()) cout << ret << "\n"; 
    else cout << "PREDAJA" << "\n";
}
 * 
 */