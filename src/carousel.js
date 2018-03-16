"use strict";

//Distance between each element in x and y axis(based on the initial translate values of X, y)
let xTrans = 220,
  yTrans = 0;

/*
	Move images to right on clicking right arrow.
	transform x,y and z-index values to achieve the effect.  
*/

function moveRight() {
  let child = document.getElementsByClassName("carousel-content")[0].getElementsByTagName("a");
  let activeSlide = document.getElementsByClassName("active")[0];
  let previousElement, activeElement, translate;
  let i = 0,
    j = 0;
  let index = Array.prototype.indexOf.call(child, activeSlide);
  let left = Math.floor(child.length / 2) - 1;
  let right = Math.floor(child.length / 2) + 1;
  j = index;

  /*Select previous element of the active element*/
  if (index === 0) {
    index = child.length - 1;
    previousElement = child[index];
  } else {
    previousElement = child[--index];
  }

  //Transalte new active element to center
  translate = "translateX(" + (0) + "px) translateY(" + ((left + 1) * yTrans) + "px);z-index:" + (1);
  previousElement.setAttribute("style", "transform:" + translate);

  if (index === 0) {
    index = child.length - 1;
    activeElement = child[index];
  } else {
    activeElement = child[--index];
  }
  setLeftPartWhenRight(activeElement, child, left, index);
  setRightPartWhenRight(child[j], child, right, j);
  previousElement.setAttribute("class", "active carousel-item");
}


//Translate proper elements to the left when right arrow is clicked
function setLeftPartWhenRight(element, child, left, index) {
  let translate, i = 0;
  while (left >= 0 && element != null) {
    translate = "translateX(" + ((i - 1) * xTrans) + "px) translateY(" + (left-- * yTrans) + "px);z-index:" + (--i);
    element.setAttribute("style", "transform:" + translate);
    element.setAttribute("class", "carousel-item");
    if (index === 0) {
      element = child[child.length - 1];
      index = child.length - 1;
    } else {
      element = child[--index];
    }
  }
}

//Translate proper elements to the right when right arrow is clicked 
function setRightPartWhenRight(element, child, right, index) {
  let translate, j = 0,
    i = 0;
  let left = right - 2;
  while (right < child.length && element !== null) {
    translate = "translateX(" + ((++j) * xTrans) + "px) translateY(" + (left-- * yTrans) + "px);z-index:" + (--i);
    right++;
    element.setAttribute("style", "transform:" + translate);
    element.setAttribute("class", "carousel-item");
    if (index === (child.length - 1)) {
      element = child[0];
      index = 0;
    } else {
      element = child[++index];
    }
  }
}


/*
	Move images to left on clicking left arrow.
	transform x,y and z-index values to achieve the effect.  
*/
function moveLeft() {
  let child = document.getElementsByClassName("carousel-content")[0].getElementsByTagName("a");
  let activeSlide = document.getElementsByClassName("active")[0];
  let previousElement, activeElement, translate;
  let i = 0,
    j = 0;
  let index = Array.prototype.indexOf.call(child, activeSlide);
  let left = Math.floor(child.length / 2) - 1;
  let right = Math.floor(child.length / 2) + 1;
  j = index;

  /*Select previous element of the active element*/
  if (index === child.length - 1) {
    index = 0;
    previousElement = child[index];
  } else {
    previousElement = child[++index]
  };

  //Transalte new active element to center
  translate = "translateX(" + (0) + "px) translateY(" + ((left + 1) * yTrans) + "px);z-index:" + (1);
  previousElement.setAttribute("style", "transform:" + translate);

  if (index === child.length - 1) {
    index = 0;
    activeElement = child[index];
  } else {
    activeElement = child[++index];
  }
  setRightPartWhenLeft(activeElement, child, right, index);
  setLeftPartWhenLeft(child[j], child, left, j);
  previousElement.setAttribute("class", "active carousel-item");
}

//Translate proper elements to the left when left arrow is clicked
function setLeftPartWhenLeft(element, child, left, index) {
  let translate, i = 0;
  while (left >= 0 && element != null) {
    translate = "translateX(" + ((i - 1) * xTrans) + "px) translateY(" + (left-- * yTrans) + "px);z-index:" + (--i);
    element.setAttribute("style", "transform:" + translate);
    element.setAttribute("class", "carousel-item");
    if (index === 0) {
      z = child[child.length - 1];
      index = child.length - 1;
    } else {
      element = child[--index];
    }
  }
}

//Translate proper elements to the right when left arrow is clicked
function setRightPartWhenLeft(element, child, right, index) {
  let translate, i = 0,
    j = 0,
    left = right - 2;
  while (right < child.length && element !== null) {
    translate = "translateX(" + ((++j) * xTrans) + "px) translateY(" + (left-- * yTrans) + "px);z-index:" + (--i);
    right++;
    element.setAttribute("style", "transform:" + translate);
    element.setAttribute("class", "carousel-item");

    if (index === (child.length - 1)) {
      element = child[0];
      index = 0;
    } else {
      element = child[++index];
    }
  }
}