...::: nSuns linear progression app :::...

This was built whit create react app:
CRA.md is default create react app readme

Big things to do:
-implement some kind of historic lifts graph

How will this work?
after inputting 1RM value a button is enabled which will allow you to fetch that data to database, it will be fetched to db alongside with some part of date object for a reference

Maybe it will work like so that you will be able to fetch(post) data once a week, and a graph will be divided into weeks idk yet.

as for data display i will use D3 library, and that component will first fetch(get) data from db, map the entries in db, date object will determine in which place on x axis results are placed and 1rm will be offset on y axis

-port whole project to typescript

This one is my nemesis right now

Small things to do:

-add some variation to background in main component, solid whitesmoke color is too boring, maybe use some svg that will split the page in half on y axis,

-change navigation items hover color