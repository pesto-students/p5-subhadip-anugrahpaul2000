# Exercise 7.4:
### Parenthesis Checker

Given an expression string x. Examine whether the pairs and the orders of“{“,”}”,”(“,”)”,”[“,”]” are correct in exp. For example, the function should return 'true' for exp = “[()]{}{()()}” and 'false' for exp = “[(])”.

> Time Complexity: O(|x|)  
> Expected Auxiliary Space: O(|x|) 

> Constraints:  
1 <= |x| <= 32000

### For example:  
    Example 1:  
        Input:  
            {([])}  
          
        Output: True
        Explanation:  
            { ( [ ] ) }. Same colored brackets can form balaced pairs, with 0 number of unbalanced bracket.
    
    Example 2:  
        Input:  
            ()  
          
        Output: True
        Explanation:  
            (). Same bracket can form balanced pairs, and here only 1 type of bracket is present and in balanced way.

    Example 3:  
        Input:  
            ([]  
          
        Output: False
        Explanation:  
            ([]. Here square bracket is balanced but the small bracket is not balanced and Hence , the output will be unbalanced.