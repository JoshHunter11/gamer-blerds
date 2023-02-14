(function (window, _) {
  window.gamerBlerds = window.gamerBlerds || {
    numz: {},
    phyz: {

      /**
      * 
      * @param {object} pointA a point on a grid/screen
      * @param {object} pointB another point on a grid/screen
      * 
      * @param {number} pointB.x x value of point b
      * @param {number} pointB.y y value of point b 
      * 
      * @param {number} pointA.x x value of point a 
      * @param {number} pointA.y y value of point b
      * 
      * @returns {number} the square of both distances adde 
      */

      getDistance(pointA, pointB) {
        const
          distanceX = pointB.x - pointA.x,
          distanceY = pointB.y - pointA.y,
          distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        return distance;
      }

    },
  };
}(window, window._));



