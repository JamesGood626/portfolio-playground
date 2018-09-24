import bowser from "bowser";

const getTarget = target => {
  const browser = bowser
    .getParser(navigator.userAgent)
    .getBrowserName()
    .toLowerCase();
  if (target === document) {
    if (browser === "chrome" || browser === "firefox") {
      target = document.documentElement || document.body.parentNode;
    } else if (browser === "safari") {
      target = document.body;
    } else {
      // Have yet to test this on IE....
      target =
        document.documentElement || document.body.parentNode || document.body; // cross browser support for document scrolling
    }
  }
  return target;
};

export const SmoothScroll = (target, speed, smooth) => {
  target = getTarget(target);
  var moving = false;
  var pos = target.scrollTop;
  target.addEventListener("wheel", scrolled, false);

  function scrolled(e) {
    e.preventDefault(); // disable default scrolling
    var delta = e.delta || e.wheelDelta; // e.delta undefined in safari and chrome... maybe IE uses it?
    if (delta === undefined) {
      //we are on firefox
      delta = -e.deltaY;
    }
    delta = Math.max(-1, Math.min(1, delta));
    console.log("Delta: ", delta);
    pos += -delta * speed;
    const totalAmountOfVerticalScrollability =
      target.scrollHeight - target.clientHeight;
    pos = Math.max(0, Math.min(pos, totalAmountOfVerticalScrollability)); // limit scrolling
    if (!moving) update();
  }

  function update() {
    moving = true;
    // The faster the user scrolls the greater the difference between pos - target.scrollTop.
    // As delta is added to target.scrollTop it closes the distance between the two.
    // really delta is the inertia, and the scrollTop value slowly creeps up to the dela value with each
    // iteration of requestFrame. so long as a value greater than 1 in this line -> target.scrollTop += delta
    // then the scroll inertia will continue.
    // Note: I was getting values of upwards of 33 delta after the calculation. The difference between pos
    // and target.scrollTop can be upwards of a couple hundred.
    var delta = (pos - target.scrollTop) / smooth;

    //console.log("The pos: ", pos);
    //console.log("The target.scrollTop: ", target.scrollTop);
    //console.log("Absolute Value of delta", Math.abs(delta));

    target.scrollTop += delta;
    // 0.9166666666666666 -> using the check of delta > 0.92 instead
    // because the original check was against 0.5, and I seem to be consistently getting
    // the 0.916 repeating across safari, chrome, and mozilla to prevent requestFrame from continually running
    // even when the user isn't scrolling.
    if (Math.abs(delta) > 0.92) requestFrame(update);
    else moving = false;
  }

  var requestFrame = (function() {
    return window.requestAnimationFrame;
  })();
  return { target, scrolled };
};

// old
// var requestFrame = (function() {
//   // requestAnimationFrame cross browser
//   return (
//     window.requestAnimationFrame ||
//     window.webkitRequestAnimationFrame ||
//     window.mozRequestAnimationFrame ||
//     window.oRequestAnimationFrame ||
//     window.msRequestAnimationFrame ||
//     function(func) {
//       window.setTimeout(func, 1000 / 60);
//     }
//   );
// })();
