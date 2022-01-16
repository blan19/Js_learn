#include <bits/stdc++.h>

using namespace std;

struct Point
{
  int x, y;
  Point(int x, int y) : x(x), y(y) {}
  Point() {x = -1; y = -1;}

  bool operator < (const Point & a) const{
    if(x == a.x) return y < a.y;
    return x < a.x;
  }
};

struct percent
{
  int x, y;
  double w, d, l;
} a[6];
