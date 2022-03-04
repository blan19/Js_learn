#include <bits/stdc++.h>
using namespace std;
int n, input, temp;
int main() {
  ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
  cin >> n >> input;
  int a[n];
  for(int i = 0; i < n; i++) cin >> a[i];

  for(int i = 0; i < n - (input - 1); i++) {
    int sum = 0;
    for(int j = 0; j < input; j++) {
      sum += a[i + j];
    }
    if(temp < sum) {
      temp = sum;
    }
  }
  cout << temp << "\n";
  return 0;
}

// #include<bits/stdc++.h> 
// using namespace std;  
// typedef long long ll;  
// int n, k, temp, psum[100001], ret = -1000000; 
// int main(){
// 	ios_base::sync_with_stdio(false);
// 	cin.tie(NULL);cout.tie(NULL);
// 	cin >> n >> k; 
// 	for(int i = 1; i <= n; i++){
// 		cin >> temp; psum[i] = psum[i - 1] + temp; 
// 	} 
// 	for(int i = k; i <= n; i++){
// 		ret = max(ret, psum[i] - psum[i - k]);
// 	}
// 	cout << ret << "\n";
//     return 0;
// }