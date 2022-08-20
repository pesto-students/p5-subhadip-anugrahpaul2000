<h1>Exercise 1.1 :</h1>

<b>
When a user enters an URL in the browser, how does the browser fetch the desired result? Explain this with the below in mind and Demonstrate this by drawing a diagram for the same. (2 - 3 hours)</b><br><br>
<ol>
    <b><li>What is the main functionality of the browser?</li></b>
    <p>
        To take information from the Web and display it on the user's device.
    </p>
    <b><li>High Level Components of a browser.</li></b>
    <p>
        <ul>
            <li>
                User Interface : 
                    <p>
                        Environment which allow users to use features  such as Bookmarks, Search, Refresh Page, etc
                    </p>
            </li>
            <li>
                Browser Engine : 
                    <p>
                        It Monitors the Rendering Engine with all the inputs coming from different User Interfaces.
                    </p>
            </li>
            <li>
                Rendering Engine : 
                    <p>
                        Renders the Requested WebPage. It Interprets HTML, XML, Images, CSS.
                    </p>
            </li>
            <li>
                Networking : 
                    <p>
                        Provides URL and manges Safety, Privacy, Communication, etc.
                    </p>
            </li>
            <li>
                JavaScript Interpreter: 
                    <p>
                        Interprets and executes the Javascript code. It sends the results to the rendering Engine to display.
                    </p>
            </li>
            <li>
                Data Storage: 
                    <p>
                        Provides URL and manges Safety, Privacy, Communication, etc.
                    </p>
            </li>
        </ul>
    </p>
    <b><li>Rendering engine and its use.</li></b>
    <p>
        It is a software that draws structured text, formats it based on the style declarations.
    </p>
    <b><li>Parsers (HTML, CSS, etc)</li></b>
    <p>
        It is a Compiler or Interpreter that breaks data into smaller elements. It Converts into another Language.
        <br>
        HTML Parser Travers & Clean: offers an interface for programmers to access and modify Also fixes invalid HTML to improve the layout and indent style.
        <br>
        CSS Parser inputs Cascading Style Sheets and outputs a Document Object Model.
    </p>
    <b><li>Script Processors</li></b>
    <p>
        It Parses each incoming Document's JSON source fields, allows to specify own processor logic.
    </p>
    <b><li>Tree constructing.</li></b>
    <p>
        Each HTML Document is can be referred as a document tree. It represents a hierarchical view of information, where each item has a number of subitems.
    </p>
    <b><li>Order of script processing</li></b>
    <p>
        Scripts are executed in the order they are in the document. 
    </p>
    <b><li>Layout and Painting</li></b>
    <p>
        Layout is Resposible to calculate Position and dimension of every element on the screen.<br>
        Paint converts each node to actual pixels on the screen.
    </p>
</ol>

<b>Guidelines:</b>
<ol>
    <li>Submit this assignment on GIT - Answer should be in readme File (with images) on GIT.</li>
    <li>Candidates should be able to explain how a browser works.</li>
    <li>What are the high level components of a browser?</li>
    <li>How each component works with each other. (For example: Networking component isthe one which makes HTTP calls, Data storage component is a browser’s persistencelayer which saves data locally such as Cookies and Local Storage.</li>
    <li>How Parsing works and its importance.</li>
    <li>The order of execution of scripts.</li>
</ol>

<b>Outcome:</b>
<ol>
    <li>Under the hood understanding of how a browser works.</li>
    <li>What are the features a browser provides?</li>
    <li>What a browser is capable of doing.</li>
    <li>How a web page is translated from a string in a URL to a webpage.</li>
</ol>