

Custom Hooks let you share logic between components.
Custom Hooks must be named starting with use followed by a capital letter.


**Custom Hooks let you share stateful logic, not state itself**
Custom Hooks let you share stateful logic but not state itself. Each call to a Hook is completely independent from every other call to the same Hook. 
When you need to share the state itself between multiple components, lift it up and pass it down instead.


**reason for why wrapping Effects in custom Hooks is often beneficial:**

Custom Hooks help you migrate to better patterns 

-Effects are an “escape hatch”: you use them when you need to “step outside React” and when there is no better built-in solution for your use case. With time, the React team’s goal is to reduce the number of the Effects in your app to the minimum by providing more specific solutions to more specific problems. Wrapping your Effects in custom Hooks makes it easier to upgrade your code when these solutions become available.
-You make the data flow to and from your Effects very explicit.
-You let your components focus on the intent rather than on the exact implementation of your Effects.
-When React adds new features, you can remove those Effects without changing any of your components.