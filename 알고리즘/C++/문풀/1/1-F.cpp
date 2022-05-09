#include<bits/stdc++.h>
using namespace std;   
string s; 
int main(){
    getline(cin, s); 
    for(int i = 0; i < s.size(); i++){
      if(s[i] >= 65 && s[i] < 97) {
        if(s[i] + 13 > 90) s[i] = s[i] + 13 - 25;
        else s[i] = s[i] + 13;
      } else if(s[i] >= 97 && s[i] <= 122) {
        if(s[i] + 13 > 122)s[i] = s[i] + 13 - 26; 
        else s[i] = s[i] + 13;  
      }
    } 
    return 0; 
}
/**
 * @brief 
 * 알파벳 좌표 이동
 * 13칸 / 대문자, 소문자 구별, 알파벳만 변환
 * 아스키코드로 변환한 값을 배열에 저장
 */

/**
 * @brief 
#include<bits/stdc++.h>
using namespace std;   
string s; 
int main(){
    getline(cin, s); 
    for(int i = 0; i < s.size(); i++){
        // 대문자인경우
        if(s[i] >= 65 && s[i] < 97){
            if(s[i] + 13 > 90) s[i] = s[i] + 13 - 26; 
            else s[i] = s[i] + 13;  
        }else if(s[i] >= 97 && s[i] <= 122){
            if(s[i] + 13 > 122)s[i] = s[i] + 13 - 26; 
            else s[i] = s[i] + 13;  
        }
        cout << s[i];  
    } 
    return 0; 
}
 * 
 */