
/* add your functions here */
function outputCard() {
    // loop to add book cards && their classes
    for(i = 0; i < books.length; i++){
        document.write('<div class="mdl-cell mdl-card mdl-shadow--2dp">'); // start card
        document.write('<div class="mdl-card__media">'); // start book photo
        document.write('<img src="images/'
            + books[i].isbn + '.jpg" title="' + books[i].title + '">');
        document.write('</div>'); // end book photo
        document.write('<div class="mdl-card__supporting-text">'); // start book info
        document.write('<p>' + books[i].description + '</p>'); // book descriptions
        document.write('<h6>Adopters</h6>');
        document.write('<ul>'); // universities list start

        // loop for universities adopter array list
        for(j = 0; j < books[i].universities.length; j++){
            document.write('<li>' + books[i].universities[j] + '</li>');
        }

        document.write('</ul>'); // universities list end
        document.write('</div>'); // end book info
        document.write('<div class="mdl-card__actions mdl-card--border">'); // read more
        document.write('<a class="mdl-button">READ MORE</a>');
        document.write('</div>'); // read more
        document.write('</div>'); // end card
    }
 }