

everything in css is a box

intrinsic sizing vs extrinsic 

extrinsic - specify the width / height 

intrinsic 
        - default 
        - dont specify any size 
        - width : min-content


box model - 

content box 

![Alt text](image.png)

padding box : If our box has overflow rules set, such as overflow: auto or overflow: scroll, the scrollbars will occupy this space too.


border box ; 

margin box: Properties such as outline and box-shadow occupy this space too because they are painted on top, so they don't affect the size of our box



user agent stylesheet  - Every browser applies a user agent stylesheet to HTML documents. They define how elements should look and behave if there's no CSS defined.

block
inline
inline-block




 if we are in a normal flow, a <div> element's default display value is block, a <li> has a default display value of list-item, and a <span> has a default display value of inline.

An inline element has block margin, but other elements won't respect it. Use inline-block, and those elements will respect the block margin, while the element maintains most of the same behaviors it had as an inline element. A block item will, by default, fill the available inline space, whereas a inline and inline-block elements will only be as large as their content.



box-sizing, which tells our box how to calculate its box size. By default, all elements have the following user agent style: box-sizing: content-box;.

Having content-box as the value of box-sizing means that when you set dimensions, such as a width and height, they will be applied to the content box. 