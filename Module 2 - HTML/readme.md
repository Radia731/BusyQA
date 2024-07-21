### **HTML: Content & Layout**

HTML is a language that determines how documents and web pages are displayed in a web browser, the language for the building blocks of any website.

### **CSS: Styling and “Look & Feel”**

CSS (Cascading Style Sheets) is a popular style sheet language that determines how a document created in HTML is styled (colors, font styles, layout and responsive features).

### **JavaScript: Interactive Elements**

JavaScript allows you to change CSS and HTML elements on your website after the site has been loaded, which gives you the ability to make your site more interactive and engaging for users with animations, embedded [video media](https://brandefy.com/austin-texas-video-production/), and more.

terms to get familiar with

- tags
- meta information - the charset and stuff
- link- to display the css file more like connect it to the html page
- attributes - they contain additional information about the element.
usually written in a key-value pair
- self closing elements - they are called empty elements

cmd + / - to make a comment for html

### html elements

- [`head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)Contains machine-readable information (metadata) about the document, like its [title](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title), [scripts](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script), and [style sheets](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style).
- <body></body> is whats displayed on the browser

- <a></a>- anchor tag - will create link
- <em></em> emphasis- will make the words look like

### [Anatomy of an HTML element](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#anatomy_of_an_html_element)

Let's explore this paragraph element a bit further.

!https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics/grumpy-cat-small.png

## HTML elements (inline and block level)

inline - horizontal

block - vertical (will always force a new line)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/e7577842-9d9b-40c4-9c23-995ddd633259/137b3402-ddca-43f2-8652-f12584a7e9b2/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/e7577842-9d9b-40c4-9c23-995ddd633259/34600534-953a-48c6-944b-86d745c766ec/Untitled.png)

### the <div> element

the div element is used as a generic container and we can use it to group elements 

### text related elements

the easiest way to wrap stuff with text element is to use the following short cut.

command>shit>P and hit wrap with emmett and type the element you want your paragraph to be wrapped under.

<strong> - to kinda make a certain text bold

<q> is the inline element for qoutation

<blockquote cite=” URL”> is the block element for quotation

### separators / break element

<br> to break or to put a peice of text to a new line

<hr> - thematic break- to semantically break two contents or paragraphs or add a line 

### lists

- <ol> order list like 12345 list
- <ul> unorderd list - creates bullet list
- <dl>
- <li> is how we list the actual list item
- **to duplicate a piece of code you can just use option>shift<down arrow**
- **to move line of code up and down we can use option>down or up arrow**
- **to edit similar things at a time we can use command>d**
- buy clicking option on to another line of code will let you type 2 thing at a time like 2 cursors

### image embed element

../ - review the envatio tuts video at 1:52:31

we use the <img src=”” alt=””> element to generate an image

src is like a patch for the image file 

alt is the description of the image for text script reader user

### forms

<form action=”” method=””></form>

<div>

<label> for=”login-email”>Email address</label>

<input type=”email” name=”login-email” id=”put whatever you put on the label attribute for FOR”>

action - is the path for file that is collecting the info that are being submitted by the user 

method - represent how the form information is sent. let get and post 

if we use get- the form info will be sent or attached to the URL

post -  is most secured way that we should always use.

select and then option element will create you a drop down form option

the autofocus attributes will locate the cursor inside the form field every time we refresh

Master label and input - name, id,  value - so important to group shit together
placeholder

value

autofocus

select - for drop down option and comes with additional element called option where we put varaity of dropdown options for the form

text area for large text boxes

### table or layout in HTML

we can use the <table> element

<thead> for the header

<tr> table row

<th> table heading.  

<tbody> - for the main body

<td > table data cell

<tfoot> for the fotter

<colspan> to adjust the row span accoeding to the column

### HTML5 sematic elements - ????

### CSS -(casdaing style sheet )

SAAS AND LESS -pre-processers 

there are 3 ways to add css 

inline- when we add the css direclty to the html elements - should be avoided at all cost.  is alwasy dominat. will always override 

internal - is when we add the css element above the header  html section 

external - creating a dedicated file and connetiong it with our HTML

### CSS selectors

classes -  is a selector we use to target elements that have similar properties, we can use any class name we want

IDs- they are unique identifier. they are mainly used to differentiate items. will allows are to target a single element.

Universal selector (*)- will allow us to select everything in the sheet.

```css
* {
    box-sizing: border-box;
}
anatomy of universal selector goes as follows-
```

```css
class selector
.classname {
  background-color: blue;
  border-radius: 8px:
}
```

```css
id selector

#idname {
    background-color: black
}
```

3:23:47- abt form button - check it out