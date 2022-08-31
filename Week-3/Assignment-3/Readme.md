# Exercise 3.3:

### What is the output of the below problem and why: **(30 Min)**

![](Problem.png)

## Guidelines:

1. The candidate should be able to explain the code with the desired output.

## Outcomes:

1. The candidates will understand how **'_closure_'** works in JS.
2. The candidates will understand how **'_encapsulation_'** works in JS.

---

# Explanation :

> ## Logged: "Count is 0".
>
> Count is 0 because createIncrement is executed and it only returns the definition of function **_`increment`_**, **_`log`_** alongwith 2 variables **_`count`_** & **_`message`_** with their value **_`0`_** & **_'`Count is 0`'_** respectivly.

> When increment is called **_`3`_** times, count is actually incremented to 3 but the message has been set prior to updation and not updated. Hence, Logged is 0.
> If the **_`message`_** is moved inside the **_`log`_** or **_`increment`_** function definition it will be updated and changes will be reflected when **_`log`_** is called.
