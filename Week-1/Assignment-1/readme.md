# Exercise 1.1 :

## When a user enters an URL in the browser, how does the browser fetch the desired result? Explain this with the below in mind and Demonstrate this by drawing a diagram for the same. (2 - 3 hours).
---

1. What is the main functionality of the browser?  
    
    >To take information from the Web and display it on the user's device.  

2. High Level Components of a browser.
    
    >* User Interface : Environment which allow users to use features  such as Bookmarks, Search, Refresh Page, etc
    >* Browser Engine : It Monitors the Rendering Engine with all the inputs coming from different User Interfaces.
    >* Rendering Engine : Renders the Requested WebPage. It Interprets HTML, XML, Images, CSS.
    >* Networking : Provides URL and manges Safety, Privacy, Communication, etc.
    >* JavaScript Interpreter: Interprets and executes the Javascript code. It sends the results to the rendering Engine to display.
    >* Data Storage: Provides URL and manges Safety, Privacy, Communication, etc.

3. Rendering engine and its use.
    
    >It is a software that draws structured text, formats it based on the style declarations.  

4. Parsers (HTML, CSS, etc)
    
    >It is a Compiler or Interpreter that breaks data into smaller elements. It Converts into another Language.  
    HTML Parser Travers & Clean: offers an interface for programmers to access and modify Also fixes invalid HTML to improve the layout and indent style.  
    CSS Parser inputs Cascading Style Sheets and outputs a Document Object Model.

5. Script Processors
    
    >It Parses each incoming Document's JSON source fields, allows to specify own processor logic.

6. Tree constructing.
    
    >Each HTML Document is can be referred as a document tree. It represents a hierarchical view of information, where each item has a number of subitems.

7. Order of script processing
    
    >Scripts are executed in the order they are in the document.

8. Layout and Painting
    >Layout is Resposible to calculate Position and dimension of every element on the screen.  
    Paint converts each node to actual pixels on the screen.

## Guidelines:
---
   1. Submit this assignment on GIT - Answer should be in readme File (with images) on GIT.
   2. Candidates should be able to explain how a browser works.
   3. What are the high level components of a browser?
   4. How each component works with each other. (For example: Networking component isthe one which makes HTTP calls, Data storage component is a browser’s persistencelayer which saves data locally such as Cookies and Local Storage.
   5. How Parsing works and its importance.
   6. The order of execution of scripts.

## Outcome:
---
1. Under the hood understanding of how a browser works.
2. What are the features a browser provides?
3. What a browser is capable of doing.
4. How a web page is translated from a string in a URL to a webpage.