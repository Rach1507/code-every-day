![Alt text](image-6.png)


min-content
max-content
fit-content()

The min-content keyword 
-will make a track as small as it can be without the track content overflowing.
-Changing the example grid layout to have three column tracks all at min-content size will mean they become as narrow as the longest word in the track.

The max-content keyword 
-has the opposite effect. 
-The track will become as wide enough for all of the content to display in one long unbroken string. 
-This might cause overflows as the string will not wrap.

The fit-content(size) function 
-acts like max-content at first. 
-once the track reaches the size that you pass into the function, the content starts to wrap
-So fit-content(10em) will create a track that is less than 10em, if the max-content size is less than 10em, but never larger than 10em.



The fr unit 

-just like % , em , rem , there is fr - it works only in grid
-similar to flex:auto
-can be combined with a fixed size gap or fixed size tracks ex: grid-template-columns: 200px 1fr.


The minmax() function #


-To force a track to take an equal share of the space in the grid container minus gaps use minmax. 
-Replace 1fr as a track size with minmax(0, 1fr).
-This makes the minimum size of the track 0 and not the min-content size
-Grid will then take all of the available size in the container, deduct the size needed for any gaps, and share the rest out according to your fr units.




 create a 4 column track grid with equal columns,

grid-template-columns: minmax(0,1fr), minmax(0,1fr),  minmax(0,1fr), minmax(0,1fr) ; 

                    or use 

grid-template-columns: repeat(12, minmax(0,1fr));

other ex: can be used to repeat any section of your track listing

    grid-template-columns: 200px repeat(2, 1fr 2fr) 200px; /*creates 6 tracks*/


Auto fit vs Auto fill

 create as many 200 pixel tracks as will fit in the container.

 Auto Responsive Grid : 
 there will be as many tracks as will fit into the container with a minimum size of 200px.

grid-template-columns: repeat(auto-fill, minmax(200px,1fr));

     
