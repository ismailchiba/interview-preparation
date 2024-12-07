import unittest
from Leetcode.python.twoSum.twosumv1 import Solution

class TestTwoSum(unittest.TestCase):
    def setUp(self):
        self.solution = Solution()

    def test_two_sum(self):
        self.assertEqual(self.solution.twoSum([2, 7, 11, 15], 9), [0, 1])
        self.assertEqual(self.solution.twoSum([3, 2, 4], 6), [1, 2])
        self.assertEqual(self.solution.twoSum([3, 3], 6), [0, 1])
        self.assertEqual(self.solution.twoSum([1, 2, 3, 4, 5], 9), [3, 4])
        self.assertEqual(self.solution.twoSum([1, 2, 3, 4, 5], 10), None)

if __name__ == '__main__':
    unittest.main()