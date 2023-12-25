#include <vector>

using namespace std;

class Solution {
public:
  long long subArrayRanges_bruteForce(vector<int> &nums) {
    int n = nums.size();
    int sum = 0;
    for (int i = 0; i < n; i++) {
      int mini = nums[i];
      int maxi = nums[i];
      for (int j = i + 1; j < n; j++) {
        mini = min(mini, nums[j]);
        maxi = max(maxi, nums[j]);
        sum += (maxi - mini);
      }
    }
    return sum;
  }

public:
  long long subArrayRanges(vector<int> &nums) {
    int n = nums.size();
    long long answer = 0;
    stack<int> stk;
  }
};
