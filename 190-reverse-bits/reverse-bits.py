class Solution:
    def reverseBits(self, n: int) -> int:
        rev = 0
        for i in range(32):
            rev = (rev << 1) | (n & 1)
            n >>= 1
        return rev
        

# Synced seamlessly with LeetHub Pro
# Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
# Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna