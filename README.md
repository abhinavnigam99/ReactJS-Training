# ReactJS-Training
ReactJS Training

React aims to allow developers to create Fast User Interfaces easily

In React, for every DOM object, there is a corresponding "virtual DOM object."
By comparing the new virtual DOM with a pre-update version, React figures out exactly which virtual DOM objects have changed. 
Once React knows which virtual DOM objects have changed, then React updates those objects, and only those objects, on the real DOM

Simple : react automatically manage UI updates

Declarative : When data changes react conceptually hits refresh and changes only updated data

Build composable component easily : reusable components that are encapsulated.

https://cdnjs.com/libraries/react/

//Start of App//

include scipts : react.js , react-dom.js, browser.js

//USING PROPS//

props : static property immutable

states : mutable


By surrounding a JS expression in braces inside JSX as children orattribute.

this.props - main attribute
this.props.children - nested element