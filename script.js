var inputValue = +prompt('enter num');
var tree = '';
var star = '*';
for (var i = 1; i <= inputValue; i++) {
  tree += '\n'; 
  for (var j = 1; j <= i; j++) {
    tree = tree + star;
    
  }
}
alert(tree);