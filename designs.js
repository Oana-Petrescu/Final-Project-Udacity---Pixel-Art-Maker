// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const table = $('#pixelCanvas');
	
function makeGrid(rows,cols) {
	for (var i = 0; i < rows; i++) {
		var tablerow = table.append('<tr></tr>');
		for (var j = 0; j < cols; j++) {
			tablerow.children().last().append('<td></td>');
		}
	}
}
// display table when Create button is clicked

$('#createBtn').on('click', function (e) {
				e.preventDefault();
				table.children().remove();
				var inputRows = $('#rows').val();
				var inputCols = $('#columns').val();
				makeGrid(inputRows,inputCols);
});

// Reset table to original size 
$('#resetBtn').on('click', function (e) {
				e.preventDefault();
				table.children().remove();
				var inputRows = $('#rows')[0].defaultValue;
				var inputCols = $('#columns')[0].defaultValue;
				$('#rows').val(inputRows);
				$('#columns').val(inputCols);
				makeGrid(inputRows, inputCols);
});

//Add color to the cell
table.on('click','td',function() {
		var color = $('#colorPicker').val();
		$(this).css('background', color)
});


//Remove color from cell
table.on('dblclick','td', function () {
    $(this).css('background', 'white');
});


// Your code goes here!
