// declaring variable for books counter
let bookCount = 0;
// get order
function addBook() {
  var title = document.getElementById("titleInput").value;
  var product = document.getElementById("productInput").value;
  var quantity = Number(document.getElementById("quantityInput").value);

  var orderInfo = product + " : " + title + " x " + quantity;

  // update number of books
  bookCount += quantity;
  // create a new list item holding the order info
  var li = document.createElement("li");
  var orderText = document.createTextNode(orderInfo);
  li.appendChild(orderText);
  // add the new list item element to the unorder list
  var orderUL = document.getElementById("bookList");
  orderUL.appendChild(li);
  // display number of books order
  document.getElementById("bookCounterHolder").innerHTML =
    "total number of books ordered: " + bookCount;
}
