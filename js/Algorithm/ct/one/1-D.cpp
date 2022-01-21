#include <bits/stdc++.h>
using namespace std;
string input;
string a[104], b[104];
int pivot;

bool checkStr(char a, char b) {
  if(a == b) {
    return 1;
  } else {
    return 0;
  }
}

int main() {
  cin >> input;
  pivot = input.length() / 2;
  for(int i = 0; i < pivot; i++) {
    bool ret = checkStr(input[i], input[input.length() - i - 1]);
    if(ret == false) {
      cout << 0 << "\n";
      return 0;
    }
  }
  cout << 1 << "\n";
  return 0;
}

/**
 * @file 1-D.cpp
 * @author your name (you@domain.com)
 * @brief 
 * @version 0.1
 * @date 2022-01-21
 * 
 * @copyright Copyright (c) 2022
 * 
 * 앞뒤로 똑같은 단어인지 확인
 * 1.가운데 글자는 제외
 * 2. 앞뒤로 하나씩 비교
 * 인풋의 길이가 짝홀인지 구분
 * 
 * bool func
 */