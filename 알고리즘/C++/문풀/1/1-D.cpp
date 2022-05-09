#include <bits/stdc++.h>
using namespace std;
string input, temp;
int main() {
  cin >> input;
  temp = input;
  reverse(input.begin(), input.end());
  if(temp == input) {
    cout << 1 << "\n";
  } else {
    cout << 0 << "\n";
  }
  return 0;
}


// #include <bits/stdc++.h>
// using namespace std;
// string input;
// string a[104], b[104];
// int pivot;

// bool checkStr(char a, char b) {
//   if(a == b) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// int main() {
//   cin >> input;
//   pivot = input.length() / 2;
//   for(int i = 0; i < pivot; i++) {
//     bool ret = checkStr(input[i], input[input.length() - i - 1]);
//     if(ret == false) {
//       cout << 0 << "\n";
//       return 0;
//     }
//   }
//   cout << 1 << "\n";
//   return 0;
// }