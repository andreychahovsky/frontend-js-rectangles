function areIntersected(rectangle1, rectangle2) {

	var rectangle1Right, rectangle1Bottom, rectangle2Right, rectangle2Bottom;
	var horisontalIntersection, verticalIntersection;

	if (((rectangle1.width === 0) && (rectangle1.height === 0)) || ((rectangle2.width === 0) && (rectangle2.height === 0))) {
		return false;
	}

	rectangle1Right = rectangle1.left + rectangle1.width;
	rectangle1Bottom = rectangle1.top + rectangle1.height;
	rectangle2Right = rectangle2.left + rectangle2.width;
	rectangle2Bottom = rectangle2.top + rectangle2.height;

	horisontalIntersection = (rectangle1.left >= rectangle2.left) && (rectangle1.left < rectangle2Right) || (rectangle1Right > rectangle2.left) && (rectangle1Right <= rectangle2Right) || (rectangle2.left >=rectangle1.left) && (rectangle2.left < rectangle1Right);
	verticalIntersection = (rectangle1.top >= rectangle2.top) && (rectangle1.top < rectangle2Bottom) || (rectangle1Bottom > rectangle2.top) && (rectangle1Bottom <= rectangle2Bottom) || (rectangle2.top >= rectangle1.top) && (rectangle2.top < rectangle1Bottom);

	

	// horisontalIntersection = (rectangle1Right > rectangle2.left && rectangle1Right < rectangle2Right) || (rectangle1.left > rectangle2.left && rectangle1.left < rectangle2Right) || (rectangle1.left === rectangle2.left && (rectangle1Bottom + rectangle1.width) === (rectangle2Bottom + rectangle2.width)) || (rectangle1Bottom > rectangle2Bottom && rectangle1.height < rectangle2.height) || (rectangle2Bottom > rectangle1Bottom && rectangle2.height < rectangle1.height);
	// verticalIntersection = (rectangle1Bottom > rectangle2.top && rectangle1Bottom < rectangle2Bottom) || (rectangle1.top > rectangle2.top && rectangle1.top < rectangle2Bottom) || (rectangle1.top === rectangle2.top && (rectangle1Right + rectangle1.height) === (rectangle2Right + rectangle2.height))||  (rectangle1.left > rectangle2.left && rectangle1Right < rectangle2Right) ||  (rectangle2.left > rectangle1.left && rectangle2Right < rectangle1Right);

	if (horisontalIntersection && verticalIntersection) {
		return true;
	}
	else {
		return false;
	}
}