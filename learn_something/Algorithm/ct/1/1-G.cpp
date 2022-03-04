#include<bits/stdc++.h> 
using namespace std;   
int n; 
string s, ori_s, pre, suf; 
int main(){
    cin >> n;
    cin >> ori_s;  
    int pos = ori_s.find('*');  
    pre = ori_s.substr(0, pos); 
    suf = ori_s.substr(pos + 1); 
    cout << pre.size() << " " << suf.size() << "\n";
    for(int i = 0; i < n; i++){
        cin >> s; 
        if(pre.size() + suf.size() > s.size()){
            cout << "NE\n";
        }else{
            if(pre == s.substr(0, pre.size()) && suf == s.substr(s.size() - suf.size())) cout << "DA\n";
            else cout <<"NE\n";  
        } 
    } 
    return 0;
} 

// #include <bits/stdc++.h>
// using namespace std;
// int n;
// string pattern, input, ret[100];
// int main() {
//   ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
//   cin >> n;
//   cin >> pattern;
//   for(int i = 0; i < n; i++) {
//     cin >> input;
//     if(pattern[0] == input[0] && pattern[n - 1] == input[input.size() - 1]) {
//       ret[i] = "DA";
//     } else {
//       ret[i] = "NE";
//     }
//   }
//   for(int i = 0; i < n; i++) cout << ret[i] << "\n";
//   return 0;
// }

/**
 * @brief 
 * 
#include<bits/stdc++.h> 
using namespace std;   
int n; 
string s, ori_s, pre, suf; 
int main(){
    cin >> n;
    cin >> ori_s;  
    int pos = ori_s.find('*');  
    pre = ori_s.substr(0, pos); 
    suf = ori_s.substr(pos + 1); 
    for(int i = 0; i < n; i++){
        cin >> s; 
        if(pre.size() + suf.size() > s.size()){
            cout << "NE\n";
        }else{
            if(pre == s.substr(0, pre.size()) && suf == s.substr(s.size() - suf.size())) cout << "DA\n";
            else cout <<"NE\n";  
        } 
    } 
    return 0;
} 
 */