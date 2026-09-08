class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        cleaned = s.strip()
        arr = cleaned.split(' ')

        return len(arr[len(arr) - 1])

        