import math

class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        max_sum = 0
        nums = []

        while head:
            nums.append(head.val)
            head = head.next

        for i in range(math.floor(len(nums)/ 2)):
            twin = nums[len(nums) - 1 - i]
            if twin:
                max_sum = max(max_sum, nums[i] + twin)
            else:
                break

        return max_sum