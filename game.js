class Boat {
	constructor(id) {
		this.length = $;
	}
}


class Player {
	constructor(name) {
		this.name = name;
	}
}

class Robot {
	constructor(name) {
		this.name = name;
	}
}


// boat1 = new Boat(4)
// boat2 = new Boat(3)
// boat3 = new Boat(3)
// boat4 = new Boat(2)
// boat5 = new Boat(2)
// boat6 = new Boat(2)
// boat7 = new Boat(1)
// boat8 = new Boat(1)
// boat9 = new Boat(1)
// boat10 = new Boat(1)

// $("#boat1").on("mousedown", function() {
// 	$("body").mousemove(function (event) {
// 		$("#boat1").css("left", event.screenX);
// 		$("#boat1").css("top", event.screenY - 70);
// 	});
// });

// $("#boat1").on("mouseup", function () {
// 	$("body").unbind("mousemove");
// })

// $( ".field" ).mousemove(function( event ) {
// 	console.log(event.pageX + ", " + event.pageY);
// });

function remove_by_id(id, lst) {
	for (let i = 0; i < lst.length; i++){
		if (lst[i].id === id){
			lst.splice(i, 1);
			break;
		}
	}
}

let selected_boat = null

let free_player_tiles = $(".player .tile");
let boat_selected_tiles = [];

$(".boat").on("click", function (event) {
	selected_boat = null
	let css_selected = "1.5px solid rgb(255, 255, 0)"
	if ($(this).css("border") !== css_selected) {
		$(".boat").css("border", "");
		$(this).css("border", css_selected);
		selected_boat = $(this)
	}
	else if ($(this).css("border") === css_selected) {
		$(this).css("border", "");
	}

	let green = "rgba(0, 255, 0, 0.3)";
	let transparent = "rgba(255, 255, 255, 0)";
	let gray = "rgba(220, 220, 220, 0.5)";

	if (selected_boat) {
		let boat_length = $(selected_boat).css("width").replace("px", "") / 40;
		let boat_current_length = 0;

		$(".second-screen .player .tile").css("background-color", green);
		for (let i of boat_selected_tiles) {
			$("#" + i).css("background-color", gray);
		}

		$(".player .tile").on("click", function (event) {
			if (boat_current_length < boat_length && !boat_selected_tiles.includes( $(this).attr("id") )) {
				boat_selected_tiles.push( $(this).attr("id") );
				$(".second-screen .player .tile").css("background-color", transparent);
				for (let i of boat_selected_tiles) {
					$("#" + i).css("background-color", gray);
				}
				
				boat_current_length++;
				if (boat_current_length === boat_length) $(selected_boat).remove();
			}
		});
	} 
	else $(".second-screen .player .tile").css("background-color", transparent);
});



// $(".second-screen .tile").on("click", function (event) {
// 	$(this).css("background-color", "rgba(255, 0, 0, 0.3)");
// });


