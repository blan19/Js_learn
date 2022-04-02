// 2852 - NBA 농구

// 농구 경기는 48분 진행 각 팀이 몇분 동안 이기고 있는지 기록
// 1. N = 골이 들어간 횟수 (1<=N<=100)
// 2. N개의 줄에 득점 정보

// 1번팀이 이기고 있던 시간
// 2번팀이 이기고 있던 시간

// 득점 시간이 겹치는 경우는 없다

// 동점일 경우 시간 카운트 x
// 점수가 앞설 경우 누적
// 자료구조는 맵

#include <bits/stdc++.h>
using namespace std;
map<int, int> _map;
int n,goal,a,b,asum,bsum;
string s,prevValue;
string print (int sum) {
  string m = "00" + to_string(sum/60);
  string s = "00" + to_string(sum%60);
  return m.substr(m.size() - 2, 2) + ":" + s.substr(s.size() - 2, 2);
}
int changeToInt(string input) {
  return atoi(input.substr(0, 2).c_str()) * 60 + atoi(input.substr(3, 2).c_str());
}
void calc (int &sum, string input) {
  sum += changeToInt(input) - changeToInt(prevValue);
}
int main () {
  ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
  cin >> n;
  while(n--) {
    cin >> goal >> s;
    if(a > b) {
      calc(asum, s);
    } 
    else if (b > a)
    {
      calc(bsum, s);
    }
    goal == 1 ? a++ : b++;
    prevValue = s;
  }
  if(a > b) calc(asum, "48:00");
  else if(b > a) calc(bsum, "48:00"); 
  cout << print(asum) << "\n"; 
  cout << print(bsum) << "\n";
  return 0;
}

// Time이 나올 경우 무조건 작은 단위로 변환
// 플래그를 기반으로 차근차근 

// 01:10
// 43:10
// 01:10