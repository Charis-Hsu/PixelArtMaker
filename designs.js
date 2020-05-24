function makeGrid() {


    canvas = $('#pixel_canvas');
    gridHeight = $('#input_height').val();
    gridWidth = $('#input_width').val();

    canvas.children().remove()

    for (x = 0; x < gridHeight; x++) {
    canvas.append('<tr></tr>');
    }

    rows = $('tr');

    for (y = 0; y < gridWidth; y++) {
    rows.append('<td></td>');
    }

    cell = canvas.find('td');

    cell.click(function() {
        var color;
        color = $("#colorPicker").val();
        $(this).attr('bgcolor', color);
        $(this).css("border","1px solid " + color);
//        console.log("2px solid " + color);
    });

    button = $('#bgcolorChange');
    button.click(function(){
//        alert( "Color all" );
        var newBgColor;
        color = $("#colorPicker").val();
        newBgColor = $('#pixel_canvas').find('*');
        $(newBgColor).attr('bgcolor', color);
    });
}


submitQuery = $('input[type="submit"]')

submitQuery.click(function(event) {
  event.preventDefault();
  makeGrid();
});