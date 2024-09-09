let questions = [

    {
      category: 'CSS',
      difficulty: 'easy',
      numb: 1,
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheets",
      options: [
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Colorful Style Sheets"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'easy',
      numb: 2,
      question: "Which CSS property is used to change the text color?",
      answer: "color",
      options: [
        "text-color",
        "color",
        "font-color",
        "text-style"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'easy',
      numb: 3,
      question: "How do you include comments in CSS?",
      answer: "/* Comment */",
      options: [
        "// Comment",
        "/* Comment */",
        "<!-- Comment -->",
        "' Comment '"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'easy',
      numb:4,
      question: "What does the 'margin' property in CSS control?",
      answer: "Space outside an element",
      options: [
        "Padding inside an element",
        "Space outside an element",
        "Border around an element",
        "Text inside an element"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'easy',
      numb: 5,
      question: "Which CSS property is used to set the background color of an element?",
      answer: "background-color",
      options: [
        "background",
        "bgcolor",
        "color",
        "background-color"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'easy',
      numb: 6,
      question: "Which CSS selector is used to select elements with a specific class?",
      answer: ".class",
      options: [
        ".class",
        "#class",
        "class()",
        "classSelector"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'easy',
      numb: 7,
      question: "How can you make a text bold in CSS?",
      answer: "font-weight: bold;",
      options: [
        "bold: true;",
        "style: bold;",
        "font-weight: bold;",
        "text-style: bold;"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'easy',
      numb: 8,
      question: "Which CSS property is used to specify the font size of text?",
      answer: "font-size",
      options: [
        "font-size",
        "size",
        "text-size",
        "font-style"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'easy',
      numb: 9,
      question: "What does the CSS property 'display: none;' do?",
      answer: "Makes the element invisible",
      options: [
        "Makes the element visible",
        "Centers the element",
        "Makes the element invisible",
        "Changes the font style"
      ]
    },
    
    {
      category: 'CSS',
      difficulty: 'easy',
      numb: 10,
      question: "How can you apply styles to every second row in a table using CSS?",
      answer: "tr:nth-child(2n)",
      options: [
        "tr:even",
        "tr:nth-child(2n)",
        "tr:second",
        "tr:nth-row(2)"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'intermediate',
      numb: 1,
      question: "What is the purpose of the CSS box-sizing property?",
      answer: "Includes padding and border in the total width/height of an element.",
      options: [
        "Adjusts the size of the box based on its content.",
        "Specifies the shape of the box.",
        "Sets the background color of the box",
        "Includes padding and border in the total width/height of an element."
      ]
    },
    {
      category: 'CSS',
      difficulty: 'intermediate',
      numb: 2,
      question: "How can you make a CSS animation repeat indefinitely?",
      answer: "animation-iteration-count: infinite;",
      options: [
        "animation-loop: infinite;",
        "animation-repeat: forever;",
        "animation-iteration-count: infinite;",
        "animation-play: repeat;"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'intermediate',
      numb: 3,
      question: "Which CSS property is used to control the order of flexible items in a flex container?",
      answer: "order",
      options: [
        "order",
        "flex-direction",
        "align-items",
        "justify-content"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'intermediate',
      numb: 4,
      question: "How can you create a CSS class that is applied only when the mouse hovers over an element?",
      answer: ".hover",
      options: [
        ":mouse-over",
        ":hover",
        ".hover",
        ".mouse-over"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'intermediate',
      numb: 5,
      question: "What property is used for creating space around elements, outside of any defined borders?",
      answer: "margin",
      options: [
        "border-spacing",
        "padding",
        "spacing",
        "margin"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'intermediate',
      numb: 6,
      question: "How can you make a text italic in CSS?",
      answer: "font-style: italic;",
      options: [
        "font-style: italic;",
        "text-decoration: italic;",
        "style: italic;",
        "italic: true;"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'intermediate',
      numb: 7,
      question: "What is the purpose of the CSS z-index property?",
      answer: "Specifies the stacking order of positioned elements",
      options: [
        "Sets the opacity of an element.",
        "Specifies the stacking order of positioned elements",
        "Adjusts the size of the element.",
        "Defines the width of the border."
      ]
    },
    {
      category: 'CSS',
      difficulty: 'intermediate',
      numb: 8,
      question: "How can you center an element horizontally in CSS?",
      answer: "margin: auto;",
      options: [
        "justify-content: center;",
        "align-items: center;",
        "text-align: center;",
        "margin: auto;"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'intermediate',
      numb: 9,
      question: "Which CSS pseudo-class is used to select and style the first child element of a parent?",
      answer: ":first-child",
      options: [
        ":first-child",
        ":nth-child(1)",
        ":first-element",
        ":child(1)"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'intermediate',
      numb: 10,
      question: "What are pseudo-classes in CSS?",
      answer: "Are used to define a special state of an element.",
      options: [
        "Match a specified element",
        "Select the active links",
        "Are used to select all the virtual links.",
        "Are used to define a special state of an element."
      ]
    },
    {
      category: 'CSS',
      difficulty: 'advanced',
      numb: 1,
      question: "What is the CSS property used to create animations?",
      answer: "animation",
      options: [
        "transition",
        "transform",
        "animation",
        "keyframes"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'advanced',
      numb: 2,
      question: "In CSS, what is the purpose of the counter-increment property?",
      answer: "Increments the value of a counter",
      options: [
        "Increases the size of the font",
        "Sets the opacity of an element",
        "Adjusts the spacing between lines",
        "Increments the value of a counter"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'advanced',
      numb: 3,
      question: "Which CSS property is used to create a 3D effect on elements?",
      answer: "perspective",
      options: [
        "transform",
        "perspective",
        "rotate",
        "scale"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'advanced',
      numb: 4,
      question: "What is the purpose of the CSS property mix-blend-mode?",
      answer: "Controls the blending of overlapping elements",
      options: [
        "Adjusts the opacity of an element",
        "Controls the blending of overlapping elements",
        "Sets the background color",
        "Adds a box shadow to an element"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'advanced',
      numb: 5,
      question: "Which CSS property is used to select and style elements based on their position in the document?",
      answer: ":nth-child",
      options: [
        ":nth-child",
        ":first-of-type",
        ":last-child",
        ":only-child"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'advanced',
      numb: 6,
      question: "In CSS, what is the purpose of the clip-path property?",
      answer: "Defines the shape of an element for clipping",
      options: [
        "Sets the background color",
        "Creates rounded corners",
        "Defines the shape of an element for clipping",
        "Adjusts the opacity of an element"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'advanced',
      numb: 7,
      question: "Which CSS property is used to create a flexible box layout?",
      answer: "flexbox",
      options: [
        "flexbox",
        "grid",
        "position",
        "float"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'advanced',
      numb: 8,
      question: "Which CSS property is used for responsive text sizing?",
      answer: "vw",
      options: [
        "font-size-adjust",
        "text-size",
        "font-size-responsive",
        "vw"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'advanced',
      numb: 9,
      question: "What is the purpose of the CSS pseudo-element ::before?",
      answer: "Inserts content before the content of the selected element",
      options: [
        "Selects the first child element",
        "Inserts content before the content of the selected element",
        "Selects the last child element",
        "Changes the font style of an element"
      ]
    },
    {
      category: 'CSS',
      difficulty: 'advanced',
      numb: 10,
      question: "What does the CSS property z-index control?",
      answer: "Element stacking order",
      options: [
        "Background color",
        "Box shadow",
        "Element stacking order",
        "Font size"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'easy',
      numb: 1,
      question: "What does HTML stand for?",
      answer: "Hyper Text Markup Language",
      options: [
        "Hyper Text Markup Language",
        "High-level Text Management Language",
        "Hyperlink and Text Markup Language",
        "Hyper Transfer Markup Language"
      ]
    },
      {
      category: 'HTML',
      difficulty: 'easy',
      numb: 2,
      question: "Which HTML tag is used to define an unordered list?",
      answer: "<ul>",
      options: [
        "&lt;ul&gt;",
        "&lt;ol&gt;",
        "&lt;li&gt;",
        "&lt;dl&gt;",
      ]
    },
      {
      category: 'HTML',
      difficulty: 'easy',
      numb: 3,
      question: "In HTML, which attribute is used to provide additional information about an element?",
      answer: "title",
      options: [
        "data-info",
        "extra-info",
        "additional-info",
        "title"
      ]
    },
      {
      category: 'HTML',
      difficulty: 'easy',
      numb: 4,
      question: "What is the correct HTML tag for inserting a line break?",
      answer: "<br>",
      options: [
        "&lt;lb&gt;",
        "&lt;br&gt;",
        "&lt;linebreak&gt;",
        "&lt;break&gt;"
      ]
    },
      {
      category: 'HTML',
      difficulty: 'easy',
      numb: 5,
      question: "Which HTML element is used to define the structure of an HTML document, including the head and body sections?",
      answer: "<html>",
      options: [
        "&lt;structure&gt;",
        "&lt;document&gt;",
        "&lt;html&gt;",
        "&lt;head&gt;"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'easy',
      numb: 6,
      question: "What is the purpose of the HTML '&lt;a&gt;' element?",
      answer: "Create a hyperlink",
      options: [
        "Add an image",
        "Create a hyperlink",
        "Define a paragraph",
        "Insert a form"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'easy',
      numb: 7,
      question: "Which HTML tag is used to define the main heading in a document?",
      answer: "<h1>",
      options: [
        "&lt;h1&gt;",
        "&lt;header&gt;",
        "&lt;head&gt;",
        "&lt;main&gt;"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'easy',
      numb: 8,
      question: "What is the correct HTML tag for creating a hyperlink?",
      answer: "<a>",
      options: [
        "&lt;link&gt;",
        "&lt;hyperlink&gt;",
        "&lt;a&gt;",
        "&lt;url&gt;"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'easy',
      numb: 9,
      question: "What is the correct HTML tag for creating an ordered list?",
      answer: "<ol>",
      options: [
        "&lt;ol&gt;",
        "&lt;ul&gt;",
        "&lt;li&gt;",
        "&lt;list&gt;"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'easy',
      numb: 10,
      question: "Which HTML tag is used to define a table row?",
      answer: "<tr>",
      options: [
        "&lt;row&gt;",
        "&lt;tr&gt;",
        "&lt;td&gt;",
        "&lt;table-row&gt;"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'intermediate',
      numb: 1,
      question: "What is the purpose of the HTML '&lt;meta&gt;' tag?",
      answer: "Specify metadata about the document",
      options: [
        "Define a hyperlink",
        "Specify metadata about the document",
        "Create a form",
        "Embed media content"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'intermediate',
      numb: 2,
      question: "In HTML, which attribute is used to provide a short hint or description for an input field?",
      answer: "placeholder",
      options: [
        "description",
        "placeholder",
        "hint",
        "tooltip"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'intermediate',
      numb: 3,
      question: "What does the HTML &lt;iframe&gt; tag allow you to do?",
      answer: "Include external web pages",
      options: [
        "Embed video content",
        "Create a flexible container",
        "Include external web pages",
        "Style text content"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'intermediate',
      numb: 4,
      question: "Which HTML tag is used to create a navigation menu?",
      answer: "<nav>",
      options: [
        "&lt;nav&gt;",
        "&lt;menu&gt;",
        "&lt;navigation&gt;",
        "&lt;navbar&gt;"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'intermediate',
      numb: 5,
      question: "What is the purpose of the HTML &lt;article&gt; element?",
      answer: "Represent a standalone piece of content",
      options: [
        "Define a section in a document",
        "Embed external content",
        "Represent a standalone piece of content",
        "Specify a header for a document"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'intermediate',
      numb: 6,
      question: "In HTML, which attribute is used to specify the character encoding of a document?",
      answer: "charset",
      options: [
        "charset",
        "encoding",
        "type",
        "lang"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'intermediate',
      numb: 7,
      question: "In HTML, which attribute is used to specify an alternate text for an image, if the image cannot be displayed?",
      answer: "alt",
      options: [
        "alt",
        "title",
        "caption",
        "description"
      
      ]
    },
    {
      category: 'HTML',
      difficulty: 'intermediate',
      numb: 8,
      question: "Which HTML tag is used to embed audio content?",
      answer: "<audio>",
      options: [
        "&lt;audio&gt;",
        "&lt;sound&gt;",
        "&lt;media&gt;",
        "&lt;music&gt;"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'intermediate',
      numb: 9,
      question: "What is the purpose of the HTML &lt;figcaption&gt; element?",
      answer: "Specify the caption for a figure",
      options: [
        "Specify the caption for a figure",
        "Define a figure in a document",
        "Add a footer to a page",
        "Create a table caption"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'intermediate',
      numb: 10,
      question: "In HTML, which tag is used to create a dropdown list?",
      answer: "<select>",
      options: [
        "&lt;select&gt;",
        `&lt;input type="dropdown"&gt;`,
        "&lt;dropdown&gt;",
        "&lt;listbox&gt;"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'advanced',
      numb: 1,
      question: "What is the purpose of the HTML &lt;canvas&gt; element?",
      answer: "Create interactive graphics and animations",
      options: [
        "Embed video content",
        "Create interactive graphics and animations",
        "Define a header for a document",
        "Style text content"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'advanced',
      numb: 2,
      question: "In HTML, what is the purpose of the &lt;datalist&gt; element?",
      answer: "Define a list of predefined options for an input field",
      options: [
        "Create a list of options for a dropdown",
        "Define a list of predefined options for an input field",
        "Embed external data sources",
        "Create a data table"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'advanced',
      numb: 3,
      question: "What is the role of the HTML &lt;progress&gt; element?",
      answer: "Display a progress bar",
      options: [
        "Display a progress bar",
        "Create a countdown timer",
        "Embed external content",
        "Define a header for a document"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'advanced',
      numb: 4,
      question: "In HTML, what is the purpose of the &lt;details&gt; and &lt;summary&gt; elements?",
      answer: "Create an accordion-style dropdown",
      options: [
        "Define a section in a document",
        "Create an accordion-style dropdown",
        "Specify metadata about the document",
        "Embed video content"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'advanced',
      numb: 5,
      question: "What is the HTML &lt;map&gt; element used for?",
      answer: "Define an image map",
      options: [
        "Embed external content",
        "Create a navigation menu",
        "Define an image map",
        "Add a footer to a page"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'advanced',
      numb: 6,
      question: "In HTML, which attribute is used to associate a label with a form control for accessibility?",
      answer: "for",
      options: [
        "description",
        "for",
        "label",
        "alt"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'advanced',
      numb: 7,
      question: "What is the purpose of the HTML &lt;blockquote&gt; element?",
      answer: "Specify the citation for a block of text",
      options: [
        "Specify the citation for a block of text",
        "Create a block-level quote",
        "Define a section in a document",
        "Embed external content"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'advanced',
      numb: 8,
      question: "What does the HTML &lt;time&gt; element represent?",
      answer: "Define a specific point in time",
      options: [
        "Represent a time duration",
        "Define a specific point in time",
        "Create a countdown timer",
        "Embed external content"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'advanced',
      numb: 9,
      question: "What is the HTML &lt;figure&gt; element used for?",
      answer: "Define a standalone piece of content",
      options: [
        "Create a flexible container",
        "Define a standalone piece of content",
        "Add a footer to a page",
        "Embed audio content"
      ]
    },
    {
      category: 'HTML',
      difficulty: 'advanced',
      numb: 10,
      question: "In HTML, what is the purpose of the &lt;mark&gt; element?",
      answer: "Define a highlighted text",
      options: [
        "Define a highlighted text",
        "Create interactive graphics and animations",
        "Specify metadata about the document",
        "Embed video content"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'easy',
      numb: 1,
      question: "What is the purpose of the JavaScript var keyword?",
      answer: "Declare a variable with global scope",
      options: [
        "Declare a variable with block scope",
        "Declare a variable with function scope",
        "Declare a variable with global scope",
        "Declare a constant variable with block scope"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'easy',
      numb: 2,
      question: "What is the purpose of the JavaScript typeof operator?",
      answer: "Determine the type of a variable",
      options: [
        "Concatenate two strings",
        "Determine the type of a variable",
        "Create a new variable",
        "Execute a loop"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'easy',
      numb: 3,
      question: "What is the purpose of the console.log() function in JavaScript?",
      answer: "Print output to the console",
      options: [
        "Display a message box",
        "Print output to the console",
        "Create an alert",
        "Display a prompt"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'easy',
      numb: 4,
      question: "How do you comment a single line of code in JavaScript?",
      answer: "// Comment",
      options: [
        "/* Comment */",
        "// Comment",
        "-- Comment --",
        "&lt;!-- Comment --&gt;"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'easy',
      numb: 5,
      question: `What is the result of the expression 5 + "5" in JavaScript?`,
      answer: `"55"`,
      options: [
        "10",
        "55",
        `"55"`,
        "Error"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'easy',
      numb: 6,
      question: "Which operator is used for equality in both value and type in JavaScript?",
      answer: "===",
      options: [
        "==",
        "===",
        "=",
        "!=="
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'easy',
      numb: 7,
      question: "What is the purpose of the if statement in JavaScript?",
      answer: "Execute code conditionally",
      options: [
        "Loop through code",
        "Declare a variable",
        "Execute code conditionally",
        "Create a function"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'easy',
      numb: 8,
      question: "What is an array in JavaScript?",
      answer: "A collection of elements",
      options: [
        "A type of loop",
        "A collection of elements",
        "A conditional statement",
        "A data type for text"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'easy',
      numb: 9,
      question: "How do you define a string variable in JavaScript?",
      answer: `var string = "Hello";`,
      options: [
        `var string = "Hello";`,
        `string var = "Hello";`,
        `string("Hello");`,
        `"Hello" = var string;`
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'easy',
      numb: 10,
      question: "What is the purpose of the JavaScript alert() function?",
      answer: "Show an alert box with a message",
      options: [
        "Display a message in the console",
        "Create an input prompt",
        "Show an alert box with a message",
        "Print to the screen"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'intermediate',
      numb: 1,
      question: "What does the let keyword do in JavaScript?",
      answer: "Declares a variable with block scope",
      options: [
        "Declares a variable with block scope",
        "Declares a variable with function scope",
        "Declares a variable with global scope",
        "Declares a constant variable with block scope"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'intermediate',
      numb: 2,
      question: "What does DOM stand for?",
      answer: "Document Object Model",
      options: [
        "Document Object Model",
        "Data Object Model",
        "Document Order Model",
        "Dynamic Object Model"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'intermediate',
      numb: 3,
      question: "What is the purpose of the `this` keyword in JavaScript?",
      answer: "Refers to the current object",
      options: [
        "Refers to the current function",
        "Refers to the global object",
        "Refers to the current object",
        "Refers to the parent object"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'intermediate',
      numb: 4,
      question: "What is a closure in JavaScript?",
      answer: "A combination of a function and the lexical environment within which that function was declared",
      options: [
        "A function that takes no arguments",
        "A variable that cannot be reassigned",
        "A combination of a function and the lexical environment within which that function was declared",
        "A loop that continues indefinitely"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'intermediate',
      numb: 5,
      question: "What is the purpose of the JavaScript map() function?",
      answer: "Create a new array from an existing array",
      options: [
        "Modify each element of an array",
        "Remove elements from an array",
        "Create a new array from an existing array",
        "Sort the elements of an array"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'intermediate',
      numb: 6,
      question: "How does the filter() function work in JavaScript?",
      answer: "Removes elements from an array based on a condition",
      options: [
        "Modifies each element of an array",
        "Removes elements from an array based on a condition",
        "Sorts the elements of an array",
        "Concatenates two arrays"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'intermediate',
      numb: 7,
      question: "What is the purpose of the reduce() function in JavaScript?",
      answer: "Adds up the elements of an array",
      options: [
        "Adds up the elements of an array",
        "Modifies each element of an array",
        "Sorts the elements of an array",
        "Removes elements from an array"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'intermediate',
      numb: 8,
      question: "How does the setTimeout() function work in JavaScript?",
      answer: "Delays the execution of a function by a specified time",
      options: [
        "Delays the execution of a function by a specified time",
        "Repeats the execution of a function at regular intervals",
        "Ends the execution of a function immediately",
        "Measures the time it takes to execute a function"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'intermediate',
      numb: 9,
      question: "What is the purpose of the bind() method in JavaScript?",
      answer: "Creates a new function that, when called, has its `this` keyword set to a specific value",
      options: [
        "Attaches an event handler to an element",
        "Creates a new function that, when called, has its `this` keyword set to a specific value",
        "Removes an event handler from an element",
        "Modifies the elements of an array"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'intermediate',
      numb: 10,
      question: "What is the purpose of the try...catch statement in JavaScript?",
      answer: "Handles exceptions and errors",
      options: [
        "Declares a variable",
        "Defines a loop",
        "Handles exceptions and errors",
        "Creates a switch statement"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'advanced',
      numb: 1,
      question: "What is the concept of hoisting in JavaScript?",
      answer: "A feature that allows variables and functions to be used before they are declared",
      options: [
        "A feature that allows variables and functions to be used before they are declared",
        "A security feature that prevents certain actions in JavaScript",
        "A method of organizing code for better readability",
        "A technique for optimizing code execution speed"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'advanced',
      numb: 2,
      question: "What is event delegation in JavaScript?",
      answer: "Delegating event handling to a common ancestor element",
      options: [
        "Capturing and handling events on nested elements",
        "Attaching multiple events to a single element",
        "Delegating event handling to a common ancestor element",
        "Preventing the default behavior of events"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'advanced',
      numb: 3,
      question: "What is the purpose of the JavaScript Promise object?",
      answer: "To handle asynchronous operations and events",
      options: [
        "To handle asynchronous operations and events",
        "To declare and define a constant variable",
        "To create and manage arrays",
        "To perform regular expression operations"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'advanced',
      numb: 4,
      question: "What is prototypal inheritance in JavaScript?",
      answer: "The process of creating new objects directly from existing objects",
      options: [
        "The process of creating new objects directly from existing objects",
        "The method for adding elements to the end of an array",
        "A way to concatenate two arrays",
        "The technique for creating private methods in objects"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'advanced',
      numb: 5,
      question: "How does the `async` and `await` keywords work in JavaScript?",
      answer: "They define functions with asynchronous behavior",
      options: [
        "They define functions with asynchronous behavior",
        "They create a loop that continues indefinitely",
        "They define constants with asynchronous behavior",
        "They handle errors and exceptions"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'advanced',
      numb: 6,
      question: "What is the purpose of the `fetch()` function in JavaScript?",
      answer: "To make asynchronous HTTP requests and handle responses",
      options: [
        "To create a new array from an existing array",
        "To make asynchronous HTTP requests and handle responses",
        "To declare and define a constant variable",
        "To sort the elements of an array"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'advanced',
      numb: 7,
      question: "What is prototypal inheritance in JavaScript?",
      answer: "The process of creating new objects directly from existing objects",
      options: [
        "The process of creating new objects directly from existing objects",
        "The method for adding elements to the end of an array",
        "A way to concatenate two arrays",
        "The technique for creating private methods in objects"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'advanced',
      numb: 8,
      question: "What is the purpose of the JavaScript `Symbol` data type?",
      answer: "To create unique values that can be used as object keys",
      options: [
        "To create unique values that can be used as object keys",
        "To perform mathematical operations",
        "To create and manage arrays",
        "To handle exceptions and errors"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'advanced',
      numb: 9,
      question: "What is the concept of the Event Loop in JavaScript?",
      answer: "A mechanism for handling asynchronous operations",
      options: [
        "A mechanism for handling asynchronous operations",
        "A loop that continues indefinitely",
        "A way to concatenate two arrays",
        "A technique for organizing code into modules"
      ]
    },
    {
      category: 'JAVASCRIPT',
      difficulty: 'advanced',
      numb: 10,
      question: "How can you prevent the default behavior of an event in JavaScript?",
      answer: "Using the preventDefault() method",
      options: [
        "Using the stopPropagation() method",
        "Using the preventDefault() method",
        "By setting the defaultPrevented property to true",
        "By using the stopImmediatePropagation() method"
      ]
    },
    {
      category: 'C',
      difficulty: 'easy',
      numb:1,
      question: "What is the correct syntax to declare an integer variable in C?",
      answer: "int x",
      options: [
        "int x",
        "x int",
        "variable x is integer",
        "integer x"
      ]
    },
    
    {
      category: 'C',
      difficulty: 'easy',
      numb:2,
      question: "In C, how do you access the value stored in a pointer variable ptr?",
      answer: "*ptr",
      options: [
        "*ptr",
        "ptr*",
        "&ptr",
        "ptr@"
      ]
    },
    
    {
      category: 'C',
      difficulty: 'easy',
      numb:3,
      question: "Which of the following is a valid way to comment a single line in C?",
      answer: "/*comment*/",
      options: [
        "/*comment*/",
        "#comment",
        "//comment",
        "comment"
      ]
    },
    
    {
      category: 'C',
      difficulty: 'easy',
      numb:4,
      question: "What does the strcmp function in C do?",
      answer: "Compares two strings",
      options: [
        "Compares two strings",
        "Copies a string",
        "Concatenated two strings",
        "Searches for a character in a string"
      ]
    },
    
    {
      category: 'C',
      difficulty: 'easy',
      numb:5,
      question: "What is the purpose of the break statement in a switch statement?",
      answer: "To exit the switch statement",
      options: [
        "To exit the loop",
        "To skip the current iteration",
        "To exit the switch statement",
        "To continue to the next case"
      ]
    },
    {
      category: 'C',
      difficulty: 'easy',
      numb:6,
      question: " Which function is used to dynamically allocate memory in C?",
      answer: "malloc()",
      options: [
        "malloc()",
        "free()",
        "allocate()",
        "new()"
      ]
    },
    
    {
      category: 'C',
      difficulty: 'easy',
      numb:7,
      question: "What is the purpose of the break statement in a switch statement?",
      answer: "To exit the switch statement",
      options: [
        "To exit the loop",
        "To skip the current iteration",
        "To exit the switch statement",
        "To continue to the next case"
      ]
    },
    
    {
      category: 'C',
      difficulty: 'easy',
      numb:8,
      question: "In C, what is the purpose of the sizeof operator?",
      answer: "Returns the size of a variable in bytes",
      options: [
        "Returns the size of a variable in bytes",
        "Returns the value of a variable",
        "Returns the address of a variable",
        "Returns the type of a variable"
      ]
    },
    
    
    {
      category: 'C',
      difficulty: 'easy',
      numb:9,
      question: "How do you declare a constant in C?",
      answer: "const int x;",
      options: [
        "const x;",
        "constant x;",
        "#define x;",
        "const int x;"
      ]
    },
    {
      category: 'C',
      difficulty: 'easy',
      numb:10,
      question: "What does the strcmp function in C do?",
      answer: "Compares two strings",
      options: [
        "Compares two strings",
        "Copies a string",
        "Concatenated two strings",
        "Searches for a character in a string"
      ]
    },
    {
      category: 'C',
      difficulty:'intermediate',
      numb:1,
      question: "What does the strcmp function in C do?",
      answer: "Compares two strings",
      options: [
        "Compares two strings",
        "Copies a string",
        "Concatenated two strings",
        "Searches for a character in a string"
      ]
    },
     {
      category: 'C',
      difficulty: 'intermediate',
      numb:2,
      question: "How do you declare a pointer to a function in C?",
      answer: "int (*ptr)();",
      options: [
        "int (*ptr)();",
        "pointer *function();",
        "int *function_ptr;",
        "func_ptr function();"
      ]
    },
    
    {
      category: 'C',
      difficulty: 'intermediate',
      numb:3,
      question: "What is the role of the register keyword in C?",
      answer: "It indicates a variable that should be stored in a register",
      options: [
        "It indicates a variable that should be stored in a register",
        "It specifies a variable as a constant",
        "It is used to declare a function",
        "It declares a variable in the register section of memory"
      ]
    },
    
    {
      category: 'C',
      difficulty: 'intermediate',
      numb:4,
      question: "How do you declare a pointer to a function in C?",
      answer: "int (*ptr)();",
      options: [
        "int (*ptr)();",
        "pointer *function();",
        "int *function_ptr;",
        "func_ptr function();"
      ]
    },
    
    {
      category: 'C',
      difficulty: 'intermediate',
      numb:5,
      question: "What is the purpose of the typedef keyword in C?",
      answer: "It declares a new type name for an existing data type",
      options: [
        "It declares a new type name for an existing data type",
        "It is used to define a new function",
        "It is a modifier for loop control variables",
        "It specifies the type of a variable"
      ]
    },
    
    {
      category: 'C',
      difficulty: 'intermediate',
      numb:6,
      question: "What does the static keyword mean in the context of a global variable in C?",
      answer: "The variable can only be accessed within the current file",
      options: [
        "The variable can only be accessed within the current file",
        "The variable is dynamically allocated",
        "The variable can be accessed from any file",
        "The variable is initialized to zero"
      ]
    },
    
    {
      category: 'C',
      difficulty: 'intermediate',
      numb:7,
      question: "In C, what does the #ifndef directive stand for?",
      answer: "If Not Defined",
      options: [
        "Not Here",
        "Not Found",
        "Not Function",
        "If Not Defined"
      ]
    },
    
      {
      category: 'C',
      difficulty: 'intermediate',
      numb:8,
      question: "What does the #pragma directive do in C?",
      answer: "It specifies compiler-specific instructions",
      options: [
        "It includes a header file",
        "It specifies compiler-specific instructions",
        "It defines a macro",
        "It declares a constant"
      ]
    },
    
    
    
    {
      category: 'C',
      difficulty: 'intermediate',
      numb:9,
      question: "How do you dynamically allocate a 2D array in C using pointers?",
      answer: "int **arr = malloc(rows * sizeof(int *));",
      options: [
        "int **arr = malloc(rows * cols * sizeof(int));",
        "int *arr = malloc(rows * cols * sizeof(int));",
        "int **arr = malloc(rows * sizeof(int *));",
        "int *arr = malloc(rows * sizeof(int));"
      ]
    },
    
    {
      category: 'C',
      difficulty: 'intermediate',
      numb:10,
      question: "What does the #pragma directive do in C?",
      answer: "It specifies compiler-specific instructions",
      options: [
        "It includes a header file",
        "It specifies compiler-specific instructions",
        "It defines a macro",
        "It declares a constant"
      ]
    },
    
    {
      category: 'C',
      difficulty: 'advanced',
      numb:1,
      question: " What is the purpose of the func predefined identifier in C?",
      answer: "It returns the name of the current function",
      options: [
        "It returns the name of the current function",
        "It is used to define a new function",
        "It returns the address of the current function",
        "It is a keyword for function pointers"
      ]
    },
    {
      category: 'C',
      difficulty: 'advanced',
      numb:2,
      question: "How does the inline keyword affect a function in C?",
      answer: "It indicates that the function should be inlined by the compiler",
      options: [
        "It indicates that the function should be inlined by the compiler",
        "It declares a function as static",
        "It specifies that a function is a member of a class",
        "It allows a function to be called from other files"
      ]
    },
    
    {
      category: 'C',
      difficulty: 'advanced',
      numb:3,
      question: "What is the purpose of the restrict keyword in C?",
      answer: "It hints to the compiler that a pointer is not aliased",
      options: [
        "It restricts access to a variable within a function",
        "It declares a variable as constant",
        "It hints to the compiler that a pointer is not aliased",
        "It specifies the scope of a variable"
      ]
    },
    
    {
      category: 'C',
      difficulty: 'advanced',
      numb:4,
      question: "In C, what does the volatile qualifier do when applied to a variable?",
      answer: "It indicates that the variable may be changed at any time",
      options: [
        "It indicates that the variable may be changed at any time",
        "It declares a variable constant",
        "It specifies the scope of a variable",
        "It is used for dynamic memory allocation"
      ]
    },
    
    {
      category: 'C',
      difficulty: 'advanced',
      numb:5,
      question: "What does the attribute syntax in C allow you to do?",
      answer: "Specify alignment and packing of variables",
      options: [
        "Specify alignment and packing of variables",
        "Declare global constants",
        "Define macro functions",
        "Specify the return type of a function"
      ]
    },
    
    {
      category: 'C',
      difficulty: 'advanced',
      numb:6,
      question: "What is the purpose of the builtin_expect function in C?",
      answer: "It hints to the compiler about the likely branch direction",
      options: [
        "It hints to the compiler about the likely branch direction",
        "It defines a new exception",
        "It calculates the factorial of a number",
        "It specifies the order of evaluation of expressions"
      ]
    },
    
    {
      category: 'C',
      difficulty: 'advanced',
      numb:7,
      question: "What is the purpose of the alloca function in C?",
      answer: "Allocate memory on the stack",
      options: [
        "Allocate memory on the heap",
        "Allocate memory on the stack",
        "Allocate global memory",
        "Allocate memory for a specific data type"
      ]
    },
    
    {
      category: 'C',
      difficulty: 'advanced',
      numb:8,
      question: "What is the purpose of the builtin_expect function in C?",
      answer: "It hints to the compiler about the likely branch direction",
      options: [
        "It hints to the compiler about the likely branch direction",
        "It defines a new exception",
        "It calculates the factorial of a number",
        "It specifies the order of evaluation of expressions"
      ]
    },
    
    {
      category: 'C',
      difficulty: 'advanced',
      numb:9,
      question: "In C, what is the role of the FILE predefined identifier?",
      answer: "It returns the name of the current source file",
      options: [
        "It returns the name of the current source file",
        "It specifies the type of file being used",
        "It is used to include a file in the program",
        "It returns the address of the current file"
      ]
    },
    
    {
      category: 'C',
      difficulty: 'advanced',
      numb:10,
      question: "What does the asm keyword in C do?",
      answer: "It introduces inline assembly code",
      options: [
        "It is used for type casting",
        "It introduces inline assembly code",
        "It is a macro for arithmetic operations",
        "It is used to declare a constant"
      ]
    },
    
    {
      category: 'PYTHON',
      difficulty: 'easy',
      numb:1,
      question: "What is the correct way to declare a variable in Python?",
      answer: "x=10",
      options: [
       "var x = 10",
       "int x = 10",
        "x=10",
        "declare x = 10",
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'easy',
      numb:2,
      question: "How do you get user input in Python?",
      answer: "input()",
      options: [
       "input()",
       "get_input()",
       "user_input()",
       "read()",
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'easy',
      numb:3,
      question: "Which of the following is a valid way to create a function in Python?",
      answer: "def my_function():",
      options: [
       "def my_function():",
       "create my_function():",
       "function my_function():",
       "my_function = function():",
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'easy',
      numb:4,
      question: "How do you round the number 5.678 to two decimal places in Python?",
      answer: "Checks if a value is present in a list, tuple, or string",
      options: [
       "Performs integer division",
       "Declares a variable",
       "Defines a loop",
       "Checks if a value is present in a list, tuple, or string",
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'easy',
      numb:5,
      question: "How do you round the number 5.678 to two decimal places in Python?",
      answer: "round(5.678, 2)",
      options: [
       "math.round(5.678, 2)",
       "round(5.678, 2)",
       "round_to(5.678, 2)",
       "5.678.round(2)",
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'easy',
      numb:6,
      question: "How do you round the number 5.678 to two decimal places in Python?",
      answer: "Checks if a value is present in a list, tuple, or string",
      options: [
       "Performs integer division",
       "Declares a variable",
       "Defines a loop",
       "Checks if a value is present in a list, tuple, or string",
      ]
    },
    
    {
      category: 'PYTHON',
      difficulty: 'easy',
      numb:7,
      question: "Which method is used to remove the last element from a list in Python?",
      answer: "list.pop()",
      options: [
        "list.remove_last()",
        "list.delete_last()",
        "list.pop()",
        "list.end()",
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'easy',
      numb:8,
      question: "How do you check if a variable is of a specific type in Python?",
      answer: "type(variable)",
      options: [
        "variable.type();",
        "typeof(variable)",
        "type(variable)",
        "checkType(variable)",
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'easy',
      numb:9,
      question: "Which of the following is a valid way to create an empty list in Python?",
      answer: "list = []",
      options: [
        "list = new List()",
        "list = [None]",
        "list = {}",
        "list = []",
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'easy',
      numb:10,
      question: "Which method is used to remove the last element from a list in Python?",
      answer: "list.pop()",
      options: [
        "list.remove_last()",
        "list.delete_last()",
        "list.pop()",
        "list.end()",
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'intermediate',
      numb: 1,
      question: "What is the purpose of the with statement in Python?",
      answer: "To manage resources and automatically close files",
      options: [
        "To create a loop",
        "To define a function",
        "To manage resources and automatically close files",
        "To concatenate strings"
      ]
    },
    
    {
      category: 'PYTHON',
      difficulty: 'intermediate',
      numb: 2,
      question: "Explain the difference between a list and a tuple in Python.",
      answer: "Lists are mutable, and tuples are immutable",
      options: [
        "Lists are mutable, and tuples are immutable",
        "Lists are immutable, and tuples are mutable",
        "Both lists and tuples are mutable",
        "Both lists and tuples are immutable"
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'intermediate',
      numb: 3,
      question: "Which of the following statements is true regarding Python's asyncio module?",
      answer: "The asyncio event loop is a single-threaded event loop.",
      options: [
        "asyncio is a deprecated module in Python 3.7 and later.",
        "asyncio is primarily used for parallel execution of CPU-bound tasks.",
        "asyncio is not suitable for handling asynchronous I/O operations.",
        "The asyncio event loop is a single-threaded event loop."
      ]
    },
    // {
    //   category: 'PYTHON',
    //   difficulty: 'INTERMEDIATE',
    //   numb: 5,
    //   question: "def outer_function(x): def inner_function(y): return x * y return inner_function result = outer_function(3)(4) print(result) ",
    //   answer: "24",
    //   options: [
    //     "24",
    //     "12",
    //     "7",
    //     "4"
    //   ]
    // },
    {
      category: 'PYTHON',
      difficulty: 'intermediate',
      numb: 4,
      question: "What is the difference between append() and extend() methods in Python lists?",
      answer: "append() adds an element, and extend() adds another list",
      options: [
        "Both append() and extend() add elements",
        "append() adds another list, and extend() adds an element",
        "Both append() and extend() add lists",
        "append() adds an element, and extend() adds another list"
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'intermediate',
      numb: 5,
      question: "How do you handle exceptions in Python?",
      answer: "Using the try, except, finally block",
      options: [
        "Using the try, catch, finally block",
        "Using the try, except, finally block",
        "Using the try, catch block",
        "Using the exception block"
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'intermediate',
      numb: 6,
      question: "What does the following Python code do? for i in range(3): print(i) ",
      answer: "Prints 0, 1, 2",
      options: [
        "Prints 3, 2, 1",
        "Prints 1, 2, 3",
        "Prints 0, 1, 2",
        "Causes an error"
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'intermediate',
      numb: 7,
      question: "def my_function(x, y=10, z=20): return x + y + z result = my_function(5, z=5) print(result) ",
      answer: "20",
      options: [
        "25",
        "20",
        "35",
        "40"
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'intermediate',
      numb: 8,
      question: "def outer_function(x): def inner_function(y): return x + y return inner_function closure = outer_function(10) result = closure(5)",
      answer: "15",
      options: [
        "Type Error",
        "5",
        "10",
        "15"
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'intermediate',
      numb: 9,
      question: "def power(x, y=2):  return x ** y result = power(3) print(result)",
      answer: "9",
      options: [
        "6",
        "9",
        "8",
        "27"
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'intermediate',
      numb: 10,
      question: "def mystery_function(lst): return [i for i in lst if lst.count(i) > 1] numbers = [1, 2, 2, 3, 4, 4, 5] result = mystery_function(numbers) ",
      answer: "[2, 2, 4, 4]",
      options: [
        "[2, 4]",
        "[1, 2, 3, 4, 5]",
        "[2, 2, 4, 4]",
        "[1, 3, 5]"
      ]
    },
  
    {
      category: 'PYTHON',
      difficulty: 'advanced',
      numb: 1,
      question: "How do you create a virtual environment in Python?",
      answer: "python -m venv myenv",
      options: [
        "create venv",
        "python -m venv myenv",
        "virtualenv create myenv",
        "venv myenv"
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'advanced',
      numb: 2,
      question: "How do you iterate over both the index and value of a list in a for loop?",
      answer: "for i, val in enumerate(my_list):",
      options: [
        "for i in range(len(my_list)):",
        "for i, val in enumerate(my_list):",
        "for i, val in range(my_list):",
        "for i, val in my_list:"
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'advanced',
      numb: 3,
      question: "How do you iterate over both the index and value of a list in a for loop?",
      answer: "To create an anonymous function",
      options: [
        "To declare a variable",
        "To create an anonymous function",
        "To define a class",
        "To perform arithmetic operations"
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'advanced',
      numb: 4,
      question: "def mysterious_function(n): if n == 0: return 0 elif n == 1: return 1 else: return mysterious_function(n-1) + mysterious_function(n-2) result = mysterious_function(5) print(result)",
      answer: "5",
      options: [
        "3",
        "5",
        "8",
        "13"
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'advanced',
      numb: 5,
      question: "def foo(x): return x + 1 def bar(y): return foo(y * 2) result = bar(3) print(result)",
      answer: "7",
      options: [
        "7",
        "8",
        "9",
        "10"
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'advanced',
      numb: 6,
      question: "How do you iterate over both the index and value of a list in a for loop?",
      answer: "for i, val in enumerate(my_list):",
      options: [
        "for i in range(len(my_list)):",
        "for i, val in enumerate(my_list):",
        "for i, val in range(my_list):",
        "for i, val in my_list:"
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'advanced',
      numb: 7,
      question: "Which of the following statements best describes the difference between concurrency and parallelism in Python?",
      answer: "Concurrency is the ability of a program to make progress on multiple tasks at the same time, while parallelism is the simultaneous execution of multiple tasks.",
      options: [
        "Concurrency and parallelism are interchangeable terms with no distinction in Python.",
        "Concurrency is the ability of a program to make progress on multiple tasks at the same time, while parallelism is the simultaneous execution of multiple tasks.",
        "Concurrency is achieved using threads, while parallelism is achieved using processes.",
        "Concurrency is the execution of multiple processes simultaneously, while parallelism is the execution of multiple tasks within a single process."
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'advanced',
      numb: 8,
      question: "def mysterious_function(n): if n == 0: return 0 elif n == 1: return 1 else: return mysterious_function(n-1) + mysterious_function(n-2) result = mysterious_function(5) print(result)",
      answer: "5",
      options: [
        "3",
        "5",
        "8",
        "13"
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'advanced',
      numb: 9,
      question: "What is the purpose of a metaclass in Python?",
      answer: "To modify the behavior of class creation.",
      options: [
        "To define abstract classes.",
        "To instantiate objects of a class.",
        "To modify the behavior of class creation.",
        " To enforce encapsulation in classes."
      ]
    },
    {
      category: 'PYTHON',
      difficulty: 'advanced',
      numb: 10,
      question: "Which of the following statements about decorators in Python is true?",
      answer: "Decorators can only be applied to functions.",
      options: [
        "Decorators can only be applied to functions.",
        "Decorators are executed after the decorated function.",
        "A function can have only one decorator.",
        "Decorators can modify the arguments passed to the decorated function."
      ]
    },
    {
      category: 'JAVA',
      difficulty: 'easy',
      numb:1,
      question: "What is the correct syntax to declare a variable in Java?",
      answer: "int x;",
      options: [
        "int x;",
        "x int;",
        "variable x is int;",
        "int = x;"
      ]
    },
    
    {
      category: 'JAVA',
      difficulty: 'easy',
      numb:2,
      question: "Which keyword is used to define a constant in Java?",
      answer: "final",
      options: [
        " const",
        "final",
        "static",
        "let"
      ]
    },
    
    
    {
      category: 'JAVA',
      difficulty: 'easy',
      numb:3,
      question: "How do you print output to the console in Java?",
      answer: "System.out.println();",
      options: [
        "System.out.println();",
        "print();",
        "console.log()",
        "echo()"
      ]
    },
    
    {
      category: 'JAVA',
      difficulty: 'easy',
      numb:4,
      question: "What is the purpose of the new keyword in Java?",
      answer: "To create a new instance of a class",
      options: [
        "To define a new variable",
        "To declare a constant",
        "To create a new instance of a class",
        "To delete an object"
      ]
    },
    
    {
      category: 'JAVA',
      difficulty: 'easy',
      numb:5,
      question: "Which of the following is the correct way to declare a method in Java?",
      answer: "void myMethod() {}",
      options: [
        "method void myMethod() {}",
        "void myMethod() {}",
        "myMethod() {}",
        "function myMethod() {}"
      ]
    },
    
    // {
    //   category: 'JAVA',
    //   difficulty: 'easy',
    //   numb:6,
    //   question: "What is the output of" ```System.out.println(5 + "Java") in Java?```,
    //   answer: " void myMethod() {}",
    //   options: [
    //     "5",
    //     "Java",
    //     "5Java",
    //     "Error",
    //   ]
    // },
    
    {
      category: 'JAVA',
      difficulty: 'easy',
      numb:7,
      question:  "How do you declare a multi-line comment in Java?",
      answer: "/* This is a comment */",
      options: [
        "// This is a comment",
        "/* This is a comment */",
        "# This is a comment",
        "This is a comment"
      ]
    },
    
    
    {
      category: 'JAVA',
      difficulty: 'easy',
      numb:8,
      question:  "What is the data type of the variable true in Java?",
      answer: "boolean",
      options: [
        "int",
        "boolean",
        "string",
        "char"
      ]
    },
    
    {
      category: 'JAVA',
      difficulty: 'easy',
      numb:9,
      question:  "Which keyword is used to define a subclass in Java?",
      answer: "boolean",
      options: [
        "superclass",
        "extends",
        "subclass",
        "inherits"
      ]
    },
    
    
    {
      category: 'JAVA',
      difficulty: 'easy',
      numb:10,
      question: "What is the purpose of the this keyword in Java? ",
      answer: "It refers to the current class instance",
      options: [
        "It is used for loop control",
        "It initializes variables",
        "It defines a new method",
        "It refers to the current class instance"
      ]
    },
    
    {
      category: 'JAVA',
      difficulty: 'intermediate',
      numb:1,
      question: "What is the purpose of the super keyword in Java?",
      answer: "Invoke a superclass method",
      options: [
        "Invoke a superclass method",
        "Create a new object",
        "Define a superclass",
        "Indicate a constant"
      ]
    },
    
    {
      category: 'JAVA',
      difficulty: 'intermediate',
      numb:2,
      question: "What is the purpose of the super keyword in Java?",
      answer: "Invoke a superclass method",
      options: [
        "Invoke a superclass method",
        "Create a new object",
        "Define a superclass",
        "Indicate a constant"
      ]
    },
    {
      category: 'JAVA',
      difficulty: 'intermediate',
      numb:3,
      question: "What is the correct syntax to create an array in Java?",
      answer: "int[] myArray = new int[10];",
      options: [
        "int[] myArray = new int[];",
        "int myArray[] = new int[];",
        "int[] myArray = new int[10];",
        "int myArray[10];"
      ]
    },
    
    {
      category: 'JAVA',
      difficulty: 'intermediate',
      numb:4,
      question: "What is the difference between == and .equals() in Java when comparing strings?",
      answer: "== is used for reference comparison, .equals() for content comparison ",
      options: [
        "Both are used for reference comparison",
        "== is used for content comparison, .equals() for reference comparison",
        "== is used for reference comparison, .equals() for content comparison",
        "Both are used for content comparison"
      ]
    },
    
    {
      category: 'JAVA',
      difficulty: 'intermediate',
      numb:5,
      question: "What is the purpose of the static keyword in Java?",
      answer: "It is used to define a class-level variable or method",
      options: [
        "It makes a variable constant",
        "It is used for dynamic memory allocation",
        "It allows a variable to retain its value between function calls",
        "It is used to define a class-level variable or method"
      ]
    },
    
    {
      category: 'JAVA',
      difficulty: 'intermediate',
      numb:6,
      question: "How do you declare an abstract method in Java?",
      answer: "abstract void myMethod();",
      options: [
        "abstract void myMethod();",
        "void abstract myMethod();",
        "void myMethod() abstract;",
        "abstract myMethod() void;"
      ]
    },
    
    {
      category: 'JAVA',
      difficulty: 'intermediate',
      numb:7,
      question: "What is the purpose of the throws clause in a Java method signature?",
      answer: "It indicates the exceptions that a method might throw",
      options: [
        "It specifies the return type of the method",
        "It indicates the exceptions that a method might throw",
        "It is used for defining generic types",
        "It specifies the access modifier of the method"
      ]
    },
    
    {
      category: 'JAVA',
      difficulty: 'intermediate',
      numb:8,
      question: "Which of the following is a valid way to create an instance of a Java class?",
      answer: "new MyClass();",
      options: [
        "IMyClass.create();",
        "new MyClass();",
        "create MyClass();",
        "instantiate MyClass;",
      ]
    },
    
    {
      category: 'JAVA',
      difficulty: 'intermediate',
      numb:9,
      question: "How do you prevent a method from being overridden in Java?",
      answer: "Use the final keyword",
      options: [
        "Make it private",
        "Use the final keyword",
        "Declare it as static",
        "Use the protected keyword",
      ]
    },
    
    {
      category: 'JAVA',
      difficulty: 'intermediate',
      numb:10,
      question: "What is the purpose of the transient keyword in Java?",
      answer: "It specifies that a variable cannot be serialized",
      options: [
        "It specifies that a variable cannot be serialized",
        "It indicates that a variable is thread-safe",
        "It defines a variable as constant",
        "It indicates that a variable should be skipped during serialization",
      ]
    },
    {
      category: 'JAVA',
      difficulty: 'advanced',
      numb:1,
      question: "What is the purpose of the enum keyword in Java?",
      answer: "To define a constant",
      options: [
        " To declare a new class",
        " To define a constant",
        " To implement multiple inheritance",
        "  To create an array"
      ]
    },
    
    {
      category: 'JAVA',
      difficulty: 'advanced',
      numb:2,
      question: " What is the difference between == and .equals() when comparing objects in Java?",
      answer: "== is used for reference comparison, .equals() for content comparison",
      options: [
        "Both are used for reference comparison",
        "== is used for content comparison, .equals() for reference comparison",
        "== is used for reference comparison, .equals() for content comparison",
        "Both are used for content comparison"
      ]
    },
    {
      category: 'JAVA',
      difficulty: 'advanced',
      numb:3,
      question: "How does the StringBuilder class differ from String in Java?",
      answer: "StringBuilder is faster for concatenation operations",
      options: [
        "StringBuilder is immutable, while String is mutable",
        "StringBuilder is thread-safe, while String is not",
        "StringBuilder is faster for concatenation operations",
        "StringBuilder cannot be used for string manipulation"
      ]
    },
    
    
    {
      category: 'JAVA',
      difficulty: 'advanced',
      numb:4,
      question: "In Java, what is the purpose of the try, catch, and finally blocks in exception handling?",
      answer: "try: Execute the code, catch: Handle the exception, finally: Always execute",
      options: [
        "try: Execute the code, catch: Handle the exception, finally: Always execute",
        "try: Handle the exception, catch: Execute the code, finally: Always execute",
        "try: Always execute, catch: Execute the code, finally: Handle the exception",
        "try: Execute the code, catch: Always execute, finally: Handle the exception"
      ]
    },
    
    {
      category: 'JAVA',
      difficulty: 'advanced',
      numb:5,
      question: "Which of the following is true about the super keyword in Java?",
      answer: "It can be used to access the superclass methods and variables",
      options: [
        "It can be used to call the superclass constructor",
        "It can be used to access the superclass methods and variables",
        "  It is used to implement multiple inheritance",
        " It can only be used in static methods"
      ]
    },
    
    
    
    {
      category: 'JAVA',
      difficulty: 'advanced',
      numb:6,
      question: "How do you declare a lambda expression in Java?",
      answer: "(int x, int y) -> x + y",
      options: [
        "(x, y) => x + y",
        "(int x, int y) => {return x + y;}",
        "(int x, int y) -> x + y",
        "(x + y) -> int"
      ]
    },
    
    
    {
      category: 'JAVA',
      difficulty: 'advanced',
      numb:7,
      question: "What is the purpose of the default keyword in a Java switch statement?",
      answer: "To indicate the default case",
      options: [
        "To indicate the default case",
        "To set a default value for a variable",
        "To declare a default method in an interface",
        "To specify default parameters for a method"
      ]
    },
    
    {
      category: 'JAVA',
      difficulty: 'advanced',
      numb:8,
      question: "Which Java keyword is used to implement the concept of polymorphism?",
      answer: "extends",
      options: [
        "polymorphic",
        "override",
        "polymorphism",
        "extends"
      ]
    },
    
    {
      category: 'JAVA',
      difficulty: 'advanced',
      numb:9,
      question: "What is the purpose of the volatile keyword in Java?",
      answer: "It indicates that a variable may be changed at any time",
      options: [
        "It indicates that a variable may be changed at any time",
        "It declares a variable constant",
        "It specifies the scope of a variable",
        "It is used for dynamic memory allocation",
      ]
    },
    
    {
      category: 'JAVA',
      difficulty: 'advanced',
      numb:10,
      question: "Which of the following is true about the super keyword in Java?",
      answer: "It can be used to access the superclass methods and variables",
      options: [
        "It can be used to call the superclass constructor",
        "It can be used to access the superclass methods and variables",
        "  It is used to implement multiple inheritance",
        " It can only be used in static methods"
      ]
    },
  ]
  