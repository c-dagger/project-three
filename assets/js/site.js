(function() {
if (!('querySelector' in document)) {
  return; //exits the function if browser does not understand querySelector
}
//Add a JavaScript utility class to the <html> ('class="js"')
document.querySelector('html').className = 'js';

var figures = document.querySelectorAll('figure');

for (var i = 0; i < figures.length; i++) {
  figures[i].addEventListener('click', function(event){
    var parent_node = event.target.parentNode;
    var figcaption = parent_node.querySelector('figcaption');
    if (figcaption.className === '' || figcaption.className === 'active'){
    figcaption.className = 'inactive';
  } else {
    figcaption.className = 'active';
  }
    console.log('Hey! You clicked a figure element!', parent_node, figcaption.className);
  });
}

//end of IIFE
})();
