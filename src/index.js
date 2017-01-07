function isEmptyRectangle(width, height) {
	if ((width === 0) && (height === 0)) {
		return true;
	}
}

function isNotRectangle(width, height) {
	if ((width === 0) || (height === 0)) {
		return true;
	}
}

function filterVisible(rectangle1, arrayOfRectangles) {
	var positiveArrayOfRectangles;

	positiveArrayOfRectangles = arrayOfRectangles.filter(function (rectangle2) {
		if (isNotRectangle(rectangle2.width, rectangle2.height)) {
			return false;
		}
		if (areIntersected(rectangle1, rectangle2)) {
			return true;
		}
		if (isEmptyRectangle(rectangle1.width, rectangle1.height)) {
			return false;
		}
	});

	return positiveArrayOfRectangles;
}

function areIntersected(rectangle1, rectangle2) {

	var rectangle1Right, rectangle1Bottom, rectangle2Right, rectangle2Bottom;
	var horisontalIntersection, verticalIntersection;

	if (isEmptyRectangle(rectangle1.width, rectangle1.height) || isEmptyRectangle(rectangle2.width, rectangle2.height))  {
		return false;
	}

	rectangle1Right = rectangle1.left + rectangle1.width;
	rectangle1Bottom = rectangle1.top + rectangle1.height;
	rectangle2Right = rectangle2.left + rectangle2.width;
	rectangle2Bottom = rectangle2.top + rectangle2.height;

	horisontalIntersection = (rectangle1.left >= rectangle2.left) && (rectangle1.left < rectangle2Right) || (rectangle1Right > rectangle2.left) && (rectangle1Right <= rectangle2Right) || (rectangle2.left >=rectangle1.left) && (rectangle2.left < rectangle1Right);
	verticalIntersection = (rectangle1.top >= rectangle2.top) && (rectangle1.top < rectangle2Bottom) || (rectangle1Bottom > rectangle2.top) && (rectangle1Bottom <= rectangle2Bottom) || (rectangle2.top >= rectangle1.top) && (rectangle2.top < rectangle1Bottom);

	if (horisontalIntersection && verticalIntersection) {
		return true;
	}
	else {
		return false;
	}
}
