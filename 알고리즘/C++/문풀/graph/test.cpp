#include <bits/stdc++.h>
using namespace std;
int arr[30][30];
int main() {
  for (int i = 0; i < 7; i++) {
    for (int j = 0; j < 7; j++) {
      int input;
      cin >> arr[i][j];
      cout << "check : " << arr[i][j] << "\n";
    }
  }
  return 0;
}