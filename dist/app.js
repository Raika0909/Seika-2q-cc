/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
function executeA() {

	var basicTimeline = anime.timeline({
		autoplay: false
	    });
	    
	    var pathEls = $(".check");
	    for (var i = 0; i < pathEls.length; i++) {
		var pathEl = pathEls[i];
		var offset = anime.setDashoffset(pathEl);
		pathEl.setAttribute("stroke-dashoffset", offset);
	    }
	    
	    basicTimeline
		.add({
		  targets: ".text",
		  duration: 1,
		  opacity: "0"
		})
		.add({
		  targets: ".button",
		  duration: 1300,
		  height: 10,
		  width: 300,
		  backgroundColor: "#2B2D2F",
		  border: "0",
		  borderRadius: 100
		})
		.add({
		  targets: ".progress-bar",
		  duration: 2000,
		  width: 300,
		  easing: "linear"
		})
		.add({
		  targets: ".button",
		  width: 0,
		  duration: 1
		})
		.add({
		  targets: ".progress-bar",
		  width: 80,
		  height: 80,
		  delay: 500,
		  duration: 750,
		  borderRadius: 80,
		  backgroundColor: "#71DFBE"
		})
		.add({
		  targets: pathEl,
		  strokeDashoffset: [offset, 0],
		  duration: 200,
		  easing: "easeInOutSine"
		});
	    
	    $(".button").click(function() {
		basicTimeline.play();
	    });
	    
	    $(".text").click(function() {
		basicTimeline.play();
	    });
	
	var basicTimeline = anime.timeline({
	  autoplay: false
	});
    
	var pathEls = $(".check");
	for (var i = 0; i < pathEls.length; i++) {
	  var pathEl = pathEls[i];
	  var offset = anime.setDashoffset(pathEl);
	  pathEl.setAttribute("stroke-dashoffset", offset);
	}
    
	basicTimeline
	  .add({
	    targets: ".text",
	    duration: 1,
	    opacity: "0"
	  })
	  .add({
	    targets: ".button",
	    duration: 1300,
	    height: 10,
	    width: 300,
	    backgroundColor: "#2B2D2F",
	    border: "0",
	    borderRadius: 100
	  })
	  .add({
	    targets: ".progress-bar",
	    duration: 2000,
	    width: 300,
	    easing: "linear"
	  })
	  .add({
	    targets: ".button",
	    width: 0,
	    duration: 1
	  })
	  .add({
	    targets: ".progress-bar",
	    width: 80,
	    height: 80,
	    delay: 500,
	    duration: 750,
	    borderRadius: 80,
	    backgroundColor: "#71DFBE"
	  })
	  .add({
	    targets: pathEl,
	    strokeDashoffset: [offset, 0],
	    duration: 200,
	    easing: "easeInOutSine"
	  });
    
	basicTimeline.play();
    }
    
  
  
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EscUJBQXFCLG9CQUFvQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZXhlY3V0ZUEoKSB7XG5cblx0dmFyIGJhc2ljVGltZWxpbmUgPSBhbmltZS50aW1lbGluZSh7XG5cdFx0YXV0b3BsYXk6IGZhbHNlXG5cdCAgICB9KTtcblx0ICAgIFxuXHQgICAgdmFyIHBhdGhFbHMgPSAkKFwiLmNoZWNrXCIpO1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoRWxzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHBhdGhFbCA9IHBhdGhFbHNbaV07XG5cdFx0dmFyIG9mZnNldCA9IGFuaW1lLnNldERhc2hvZmZzZXQocGF0aEVsKTtcblx0XHRwYXRoRWwuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgb2Zmc2V0KTtcblx0ICAgIH1cblx0ICAgIFxuXHQgICAgYmFzaWNUaW1lbGluZVxuXHRcdC5hZGQoe1xuXHRcdCAgdGFyZ2V0czogXCIudGV4dFwiLFxuXHRcdCAgZHVyYXRpb246IDEsXG5cdFx0ICBvcGFjaXR5OiBcIjBcIlxuXHRcdH0pXG5cdFx0LmFkZCh7XG5cdFx0ICB0YXJnZXRzOiBcIi5idXR0b25cIixcblx0XHQgIGR1cmF0aW9uOiAxMzAwLFxuXHRcdCAgaGVpZ2h0OiAxMCxcblx0XHQgIHdpZHRoOiAzMDAsXG5cdFx0ICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJCMkQyRlwiLFxuXHRcdCAgYm9yZGVyOiBcIjBcIixcblx0XHQgIGJvcmRlclJhZGl1czogMTAwXG5cdFx0fSlcblx0XHQuYWRkKHtcblx0XHQgIHRhcmdldHM6IFwiLnByb2dyZXNzLWJhclwiLFxuXHRcdCAgZHVyYXRpb246IDIwMDAsXG5cdFx0ICB3aWR0aDogMzAwLFxuXHRcdCAgZWFzaW5nOiBcImxpbmVhclwiXG5cdFx0fSlcblx0XHQuYWRkKHtcblx0XHQgIHRhcmdldHM6IFwiLmJ1dHRvblwiLFxuXHRcdCAgd2lkdGg6IDAsXG5cdFx0ICBkdXJhdGlvbjogMVxuXHRcdH0pXG5cdFx0LmFkZCh7XG5cdFx0ICB0YXJnZXRzOiBcIi5wcm9ncmVzcy1iYXJcIixcblx0XHQgIHdpZHRoOiA4MCxcblx0XHQgIGhlaWdodDogODAsXG5cdFx0ICBkZWxheTogNTAwLFxuXHRcdCAgZHVyYXRpb246IDc1MCxcblx0XHQgIGJvcmRlclJhZGl1czogODAsXG5cdFx0ICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzcxREZCRVwiXG5cdFx0fSlcblx0XHQuYWRkKHtcblx0XHQgIHRhcmdldHM6IHBhdGhFbCxcblx0XHQgIHN0cm9rZURhc2hvZmZzZXQ6IFtvZmZzZXQsIDBdLFxuXHRcdCAgZHVyYXRpb246IDIwMCxcblx0XHQgIGVhc2luZzogXCJlYXNlSW5PdXRTaW5lXCJcblx0XHR9KTtcblx0ICAgIFxuXHQgICAgJChcIi5idXR0b25cIikuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0YmFzaWNUaW1lbGluZS5wbGF5KCk7XG5cdCAgICB9KTtcblx0ICAgIFxuXHQgICAgJChcIi50ZXh0XCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdGJhc2ljVGltZWxpbmUucGxheSgpO1xuXHQgICAgfSk7XG5cdFxuXHR2YXIgYmFzaWNUaW1lbGluZSA9IGFuaW1lLnRpbWVsaW5lKHtcblx0ICBhdXRvcGxheTogZmFsc2Vcblx0fSk7XG4gICAgXG5cdHZhciBwYXRoRWxzID0gJChcIi5jaGVja1wiKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoRWxzLmxlbmd0aDsgaSsrKSB7XG5cdCAgdmFyIHBhdGhFbCA9IHBhdGhFbHNbaV07XG5cdCAgdmFyIG9mZnNldCA9IGFuaW1lLnNldERhc2hvZmZzZXQocGF0aEVsKTtcblx0ICBwYXRoRWwuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgb2Zmc2V0KTtcblx0fVxuICAgIFxuXHRiYXNpY1RpbWVsaW5lXG5cdCAgLmFkZCh7XG5cdCAgICB0YXJnZXRzOiBcIi50ZXh0XCIsXG5cdCAgICBkdXJhdGlvbjogMSxcblx0ICAgIG9wYWNpdHk6IFwiMFwiXG5cdCAgfSlcblx0ICAuYWRkKHtcblx0ICAgIHRhcmdldHM6IFwiLmJ1dHRvblwiLFxuXHQgICAgZHVyYXRpb246IDEzMDAsXG5cdCAgICBoZWlnaHQ6IDEwLFxuXHQgICAgd2lkdGg6IDMwMCxcblx0ICAgIGJhY2tncm91bmRDb2xvcjogXCIjMkIyRDJGXCIsXG5cdCAgICBib3JkZXI6IFwiMFwiLFxuXHQgICAgYm9yZGVyUmFkaXVzOiAxMDBcblx0ICB9KVxuXHQgIC5hZGQoe1xuXHQgICAgdGFyZ2V0czogXCIucHJvZ3Jlc3MtYmFyXCIsXG5cdCAgICBkdXJhdGlvbjogMjAwMCxcblx0ICAgIHdpZHRoOiAzMDAsXG5cdCAgICBlYXNpbmc6IFwibGluZWFyXCJcblx0ICB9KVxuXHQgIC5hZGQoe1xuXHQgICAgdGFyZ2V0czogXCIuYnV0dG9uXCIsXG5cdCAgICB3aWR0aDogMCxcblx0ICAgIGR1cmF0aW9uOiAxXG5cdCAgfSlcblx0ICAuYWRkKHtcblx0ICAgIHRhcmdldHM6IFwiLnByb2dyZXNzLWJhclwiLFxuXHQgICAgd2lkdGg6IDgwLFxuXHQgICAgaGVpZ2h0OiA4MCxcblx0ICAgIGRlbGF5OiA1MDAsXG5cdCAgICBkdXJhdGlvbjogNzUwLFxuXHQgICAgYm9yZGVyUmFkaXVzOiA4MCxcblx0ICAgIGJhY2tncm91bmRDb2xvcjogXCIjNzFERkJFXCJcblx0ICB9KVxuXHQgIC5hZGQoe1xuXHQgICAgdGFyZ2V0czogcGF0aEVsLFxuXHQgICAgc3Ryb2tlRGFzaG9mZnNldDogW29mZnNldCwgMF0sXG5cdCAgICBkdXJhdGlvbjogMjAwLFxuXHQgICAgZWFzaW5nOiBcImVhc2VJbk91dFNpbmVcIlxuXHQgIH0pO1xuICAgIFxuXHRiYXNpY1RpbWVsaW5lLnBsYXkoKTtcbiAgICB9XG4gICAgXG4gIFxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=