#include <bits/stdc++.h>
using namespace std;
int N,M,cnt;
string input;
int main () {
  ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
  cin >> N;
  cin >> M;
  int arr[N];
  for(int i = 0; i < N; i++) {
    cin >> arr[i];
  }
  for(int i = 0; i < N - 1; i++) {
    int sum;
    for(int j = i + 1; j <  N; j++) {
      sum = arr[i] + arr[j];
      if(sum == M) cnt++;
    }
  }
  cout << cnt << "\n";
  return 0;
}
