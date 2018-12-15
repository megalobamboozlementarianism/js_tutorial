// Make strings URL friendly

let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function urlify(string) {
  return string.toLowerCase().split(/\s+/).join('-');
}

// urls: imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));


//urls Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

//full url functiona
function fullUrls(elements) {
  return elements.map(state => "https://example.com/" + urlify(state));
}
console.log(fullUrls(states));


//singles imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

//singles functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length===1);
}
console.log(functionalSingles(states));

//dakota filter string includes
function functionalDakotas (elements) {
  return elements.filter(element => element.includes("Dakota"));
}
console.log(functionalDakotas(states));

//dakota filter regex split array length tester
function regexDakotas (elements) {
  return elements.filter(element => element.split(/\s+/).length===2);
}
console.log(regexDakotas(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: imperative solution
 function imperativeSum(elements) {
   let total = 0;
   elements.forEach(function(n) {
     total += n;
   });
   return total;
 }
 console.log(imperativeSum(numbers));

 // sum: functional solution
 function functionalSum(elements) {
   return elements.reduce((total, n) => { return total +=n; });
 }
 console.log(functionalSum(numbers));

// lengths: imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// Lengths: functonal solution
function functionalLengths(elements) {return elements.reduce((lengths, element) => {lengths[element] = element.length; return lengths;}, {});}
console.log(functionalLengths(states));

// multiply functional solution

function functionalMultiply(elements) {
  return elements.reduce((total, n) => { return total *= n; });
}
console.log(functionalMultiply(numbers));
