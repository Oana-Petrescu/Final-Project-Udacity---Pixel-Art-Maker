// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

//Global variable declarations
const table = $('#pixelCanvas');
var mouseDown = false;

// creates the elements of the table - rows and cells
function makeGrid(rows,cols) {
	for (var i = 0; i < rows; i++) {
		var tablerow = table.append('<tr></tr>');
		 for (var j = 0; j < cols; j++) {
			tablerow.children().last().append('<td></td>');
		}
	}
}

// Display table/Erase current content when Create button is clicked
$('#createBtn').on('click', function (e) {
				e.preventDefault();
				table.children().remove();
				var inputRows = $('#rows').val();
				var inputCols = $('#columns').val();
				makeGrid(inputRows,inputCols);
});

// Reset table to original size when the Reset button is clicked
$('#resetBtn').on('click', function (e) {
				e.preventDefault();
				table.children().remove();
				var inputRows = $('#rows')[0].defaultValue;
				var inputCols = $('#columns')[0].defaultValue;
				$('#rows').val(inputRows);
				$('#columns').val(inputCols);
				makeGrid(inputRows, inputCols);
});

//Add color to cell with one click
table.on('click','td',function() {
		var color = $('#colorPicker').val();
		$(this).css('background', color)
});


//Remove color from cell with dblclick
table.on('dblclick','td', function () {
    $(this).css('background', 'white');
});

// Color multiple cells when the mouse is moved and click is hold (mousedown)
table.on('mousedown','td', function() {
	mouseDown = true;
});

table.on('mouseup','td', function() {
	mouseDown = false;
});

table.on('mousemove','td', function() {
	if(mouseDown === true) {
		var color = $('#colorPicker').val();
	  $(this).css('background', color)
	}

});
