var listButton = document.getElementById('activate-list');
var gridButton = document.getElementById('activate-grid');
var wrapDiv = document.getElementById('item-container');
var standAloneHalves = document.getElementsByClassName('alone-half');
var standAlone = document.getElementById('16')
var groupPoemHalves = document.getElementsByClassName('group-half');
var groupPoem = document.getElementById('9');
var listLabel = document.getElementById('list-label');
var gridLabel = document.getElementById('grid-label');

/*
15.25 15.75 == 16
8.25 8.75 == 9

halves visible in grid, single visible in list
*/

function activateGrid() {
	if ( wrapDiv.classList.contains('list') ) {
		wrapDiv.classList.remove('list');
		console.log(wrapDiv);
	}
	classesCallback(standAloneHalves,2,"remove");
	classesCallback(standAlone,1,"add");
	classesCallback(groupPoem,1,"add");
	classesCallback(groupPoemHalves,2,"remove");
	wrapDiv.classList.add('grid');
	console.log('complete grid');
}

function activateList() {
	if ( wrapDiv.classList.contains('grid') ) {
		wrapDiv.classList.remove('grid');
		console.log(wrapDiv);
	}
	classesCallback(standAloneHalves,2,"add");
	classesCallback(standAlone,1,"remove");
	classesCallback(groupPoem,1,"remove");
	classesCallback(groupPoemHalves,2,"add");
	wrapDiv.classList.add('list');
	console.log('complete list');
}

// function classChangeCallback(elements,element) {
//
// 		for ( var i = 0; i <= elements.length - 1; i ++ ) {
// 			if ( elements[i].classList.contains('hidden-from-view') ) {
// 				elements[i].classList.remove('hidden-from-view');
// 			}
// 		}
// 		for ( var j = 0; j <= element.length - 1; j ++ ) {
// 			if ( !element[j].classList.contains('hidden-from-view') ) {
// 				element[j].classList.add('hidden-from-view');
// 			}
// 		}
// }

function classesCallback(elements,num,qual) {
	if ( qual == "remove" ) {
		if ( num == 1 ) {
			if ( elements.classList.contains('hidden-from-view')) {
				elements.classList.remove('hidden-from-view')
			}
		}
		if ( num == 2 ) {
			for ( var i = 0; i <= elements.length - 1; i++ ) {
				if ( elements[i].classList.contains('hidden-from-view') ) {
						elements[i].classList.remove('hidden-from-view');
				}
			}
		}
	}
	else if ( qual == "add" ) {
		if ( num == 1 ) {
			if ( !elements.classList.contains('hidden-from-view')) {
				elements.classList.add('hidden-from-view')
			}
		}
		if ( num == 2 ) {
			for ( var i = 0; i <= elements.length - 1; i++ ) {
				if ( !elements[i].classList.contains('hidden-from-view') ) {
						elements[i].classList.add('hidden-from-view');
				}
			}
		}
	}
}

gridButton.addEventListener('click', activateGrid);
listButton.addEventListener('click', activateList);
gridLabel.addEventListener('keydown', function (enter) { var key = enter.which || enter.keycode; if ( key == 13 ) { return activateGrid();} });
listLabel.addEventListener('keydown', function (enter) { var key = enter.which || enter.keycode; if ( key == 13 ) { return activateList();} });
