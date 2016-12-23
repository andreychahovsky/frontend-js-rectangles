function coordinatesLineToArray(coordinate, size) {
	var i;
	var array = [];
	for (i = 0; i < (size + 1); i++) {
		array[i] = coordinate + i;
	}
	return array;
}

function make2DimensionalArray(arrayX, arrayY) {
	var i, j;
	var array = [];
  for(i = 0; i < arrayX.lenght; i++) {
		array[i] = arrayX[i];
    for(j = 0; j < arrayY.lenght; j++) {
			array[i][j] = array[array[i],arrayY[j]];
    }
  }
  return array;
}

function arrays2DimensionalIntersection(array1, array2) {
	var i, j;
	for (i = 0; i < array1.lenght; i++) {
		for (j = 0; j < array2.lenght; j++) {
			if (array1[i][j] === array2[i][j]) {
				return true;
			}
		}
	}
}

function areIntersected(rectangle1, rectangle2) {

	var array1X, array1Y, array2X, array2Y;
	var array1, array2;

	array1X = coordinatesLineToArray(rectangle1.left, rectangle1.width);
	array1Y = coordinatesLineToArray(rectangle1.top, rectangle1.height);
	array2X = coordinatesLineToArray(rectangle2.left, rectangle2.width);
	array2Y = coordinatesLineToArray(rectangle2.top, rectangle2.height);

	array1 = make2DimensionalArray(array1X, array1Y);
	array2 = make2DimensionalArray(array2X, array2Y);

	if (arrays2DimensionalIntersection(array1, array2)) {
		return true;
	};
}	




// function areIntersected(rectangle1, rectangle2) {

	// var rectangle1Right, rectangle1Bottom, rectangle2Right, rectangle2Bottom;
	// var horisontalIntersection, verticalIntersection;

	// rectangle1Right = rectangle1.left + rectangle1.width;
	// rectangle1Bottom = rectangle1.top + rectangle1.height;
	// rectangle2Right = rectangle2.left + rectangle2.width;
	// rectangle2Bottom = rectangle2.top + rectangle2.height;

	// horisontalIntersection = (rectangle1Right > rectangle2.left && rectangle1Right < rectangle2Right) || (rectangle1.left > rectangle2.left && rectangle1.left < rectangle2Right) || (rectangle1.left === rectangle2.left && (rectangle1Bottom + rectangle1.width) === (rectangle2Bottom + rectangle2.width)) || (rectangle1Bottom > rectangle2Bottom && rectangle1.height < rectangle2.height) || (rectangle2Bottom > rectangle1Bottom && rectangle2.height < rectangle1.height);
	// verticalIntersection = (rectangle1Bottom > rectangle2.top && rectangle1Bottom < rectangle2Bottom) || (rectangle1.top > rectangle2.top && rectangle1.top < rectangle2Bottom) || (rectangle1.top === rectangle2.top && (rectangle1Right + rectangle1.height) === (rectangle2Right + rectangle2.height))||  (rectangle1.left > rectangle2.left && rectangle1Right < rectangle2Right) ||  (rectangle2.left > rectangle1.left && rectangle2Right < rectangle1Right);

	// if (horisontalIntersection && verticalIntersection) {
	// 	return true;
	// }
	// else {
	// 	return false;
	// }
// }