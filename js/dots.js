/**
*
* hello! 
* after setup, this code begins its work toward the bottom
* look for app.init(), a few lines above </body>
*
*/


/**
* setup app
*
*/

var app = {
    count : 400, // number of dots
    template : document.querySelector('#dotTemplate'), // without jquery
    dots : [], // emtpry array to hold all the dots
    canvas : document.querySelector('#dotCanvas')
};



/**
* initialize the app
*
*/

app.init = function () {
    app.makeDots();
    app.template.remove(); // remove template
    app.canvas.addEventListener('mouseover', app.dotAction, false);
};


/**
* make random dots
*
*/
app.makeDots = function () {

    // loop to make dots
    var i = 0;
    var x, y, clone;

    for (i; i < app.count; i++) {

        // clone dot template
        clone = app.template.cloneNode(true);

        // grab random percents
        x = app.randomPercent();
        y = app.randomPercent();

        // give new dot an id & position
        clone.id = 'dot' + i;
        clone.style.left = x;
        clone.style.top = y;

        // display dot
        app.canvas.appendChild(clone);

    } // end for loop

};


/**
* move dot 
*
*/
app.dotAction = function (event) {

    if (event.target.className === "dot") {
        event.target.style.left = '50%';
        event.target.style.top = '50%';
        // where's the animation? it's in the CSS!
        // console.log('dot: ',event.target.id);
    }
};



/**
* utility to get random percent for position
*
*/
app.randomPercent = function () {
    var p = Math.random() * 100;
    return p + '%';
};



/**
* browser support tests
*
*/

var feature = {
    addEventListener : !!window.addEventListener,
    querySelectorAll : !!document.querySelectorAll
};



/**
* test browser and begin!
*
*/

app.init(); // run the app. or, test for moder browsers first...

// if (feature.addEventListener && feature.querySelectorAll) {
//     app.init();
// } else {
//     alert('requires a modern browser');
// }

