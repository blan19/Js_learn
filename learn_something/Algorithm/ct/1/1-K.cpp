#include <bits/stdc++.h>
using namespace std;
string input, ret;
char mid;
int flag;
map<char, int> omap;
int main() {
  ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
  cin >> input;
  for(int i = 0; i < input.length(); i++) {
    omap[input[i]]++;
  }
  for(auto iter = omap.rbegin(); iter != omap.rend(); ++iter) {
    if(iter -> second & 1) {
      flag++;
      mid = iter -> first;
      iter -> second--;
    }
    if(flag == 2) {
      cout << "I'm Sorry Hansoo" << "\n";
      return 0;
    }
    for(int i = 0; i < iter -> second / 2; i++) {
      ret = iter -> first + ret;
      ret += iter -> first;
    }
  }
  if(mid) ret.insert(ret.begin() + ret.size() / 2, mid);
  cout << ret << "\n";
  return 0;
}


/**
 * @brief 
 * 반례를 찾자!
 * 문자열 팰린드롬 변환
 * map
 * key : 알파벳
 * value : count
 * 
 * condition 
 * count 1은 무조건 1개 혹은 그 이하
 * 카운트가 홀수 2개 이상 x
 * 출력은 알파벳 순으로
 * 
 * 첫 인덱스와 마지막 인덱스 저장,
 * 짝수면 모두 바꿔주고 홀수면 마지막 
 */
