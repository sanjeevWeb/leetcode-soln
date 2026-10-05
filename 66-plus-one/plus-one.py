class Solution:
    def plusOne(self, digits: list[int]) -> list[int]:
        num = 0
        for i in range(len(digits)):
            num = digits[i] + num * 10
            
        num += 1
        return [int(ele) for ele in list(str(num))]
        