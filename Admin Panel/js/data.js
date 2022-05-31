/* define your array of object literals here */
var books = [];
// Book1
var isbn1 = "0132145375";
var description1 = "Appropriate for all contemporary undergraduate database management courses. Database Processing reflects a new teaching method that gets students straight to the point with its thorough and modern presentation of all the key database processing fundamentals.";
var title1 = "Database Processing";
var universities1 = ["Piedmont College","Dallas Baptist University","Saint Cloud State University"];
// Book2
var isbn2 = "0133970744";
var description2 = "The Basics of Web Design: HTML5 and CSS3, Third Edition takes a unique approach to prepare students to design web pages that work today in addition to being ready to take advantage of HTML5 coding techniques of the future.";
var title2 = "The Basics of Web Design: HTML5 & CSS3";
var universities2 = ["University of West Georgia","Wake Forest University","Towson University","Edge Hill University"];
// Book3
var isbn3 = "0132991292";
var description3 = "The Economic Way of Thinking goes beyond explaining the basic principles of micro- and macroeconomic analysis by showing students a method of reasoning that teaches them how to apply these principles as tools.";
var title3 = "The Economic Way of Thinking";
var universities3 = ["Rhode Island College","Jackson State University","Eastern Michigan University","Mount Royl University","University of Saskatchewan"];
// Book4
var isbn4 = "0133485080";
var description4 = "The goal of this text is to introduce a general problem-solving approach for the beginning engineering student. Thus, Introduction to Engineering Analysis focuses on how to solve (any) kind of engineering analytical problem in a logical and systematic way.";
var title4 = "Intro to Engineering Analysis";
var universities4 = ["Hillsdale College","University of Alabama in Huntsville","Georgia Southern University","Edge Hill University"];
// Book5
var isbn5 = "013336092X";
var description5 = "Tony Gaddis’s accessible, step-by-step presentation helps beginning students understand the important details necessary to become skilled programmers. His approach is gradual and highly accessible, ensuring that students understand the logic behind developing high-quality programs.";
var title5 = "Starting Out with C++: Early Objects";
var universities5 = ["Coastal Carolina University","University of Dayton","Bowling Green State University"];
// Book Object Constructor
function Book(isbn,title,description,universities) {
   this.isbn = isbn;
   this.title = title;
   this.description = description;
   this.universities = universities;
}
// Adds each book object (b) to the books array
function addBook(isbn,title,description,universities){
    var b = new Book(isbn,title,description,universities); // new Book object
    books.push(b); // Adds to books array
}
// addBook(book data) pushes each book to the books array
addBook(isbn1,title1,description1,universities1);
addBook(isbn2,title2,description2,universities2);
addBook(isbn3,title3,description3,universities3);
addBook(isbn4,title4,description4,universities4);
addBook(isbn5,title5,description5,universities5);