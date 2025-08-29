
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---

### Answer:


1. Difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll

(a). getElementById("id") -> A single element with the given id , id must be unique.

(b). getElementsByClassName("class") -> Live HTMLCollection of elements with the given class. automatically updates if elements are added.

(c). querySelector("selector") -> Can select by id, class, tag, attributes.

(d). querySelectorAll("selector") -> Static list does not automatically update if DOM changes.




2. Create and insert a new element into the DOM:
   
(a). Create a new element
var new = document.createElement("div");

(b). Set content or attributes
new.innerText = "Hello World";
new.className = "my-class";

(c). Insert into the DOM
var parent = document.getElementById("parent-container");
parent.appendChild(new);  

(d). OR insert before a specific element
var referenceNode = document.getElementById("reference");
parent.insertBefore(new, referenceNode);




3. Event Bubbling:
   
When an event occurs on an element (like a click), it first triggers on that element, then bubbles up to its parent, then the parent’s parent, and so on up to the document.



4. Event Delegation:

Instead of adding event listeners to multiple child elements, you add one listener to their parent. Then, inside the listener, you check which child triggered the event.

Useful:
(1) There are many child elements.


(2) Child elements are added dynamically.



5. Difference between preventDefault() and stopPropagation() are:


(1). preventDefault() -> Prevents the default browser behavior of an element.

(2). stopPropagation() -> Prevents parent elements from receiving the event.
