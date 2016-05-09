var RobotApiModule = function fooFunc(varA, varB) {
	var Direction = {
		RIGHT : {
			toString : function() {
				return "right";
			},
			onStepForward : function(){
				current.x++;
			},
			onTurnRight : function(){
				current.direction = Direction.DOWN;
			},
			onTurnLeft : function(){
				current.direction = Direction.UP;
			}
		},
		LEFT : {
			toString : function() {
				return "LEFT";
			},
			onStepForward : function(){
				current.x--;
			},
			onTurnRight : function(){
				current.direction = Direction.UP;
			},
			onTurnLeft : function(){
				current.direction = Direction.DOWN;
			}
		},
		UP : {
			toString : function() {
				return "UP";
			},
			onStepForward : function(){
				current.y--;
			},
			onTurnRight : function(){
				current.direction = Direction.RIGHT;
			},
			onTurnLeft : function(){
				current.direction = Direction.LEFT;
			}			
		},
		DOWN : {
			toString : function() {
				return "DOWN";
			},
			onStepForward : function(){
				current.y++;
			},
			onTurnRight : function(){
				current.direction = Direction.LEFT;
			},
			onTurnLeft : function(){
				current.direction = Direction.RIGHT;
			}			
			
		},
	};

	var current = {
		direction : Direction.RIGHT,
		x : 1,
		y : 1,
		ammo : 50
	};



	function stepForward(){
		current.direction.onStepForward();
		return current;
	};

	function turnRight(){
		current.direction.onTurnRight();
		return current;
	};

	function turnLeft(){
		current.direction.onTurnLeft();
		return current;
	};

	function shoot(){
		current.ammo--;
		return current.ammo;
	}

	return {
		stepForward : stepForward,
		turnRight : turnRight,
		turnLeft : turnLeft,
		shoot : shoot,

		Direction : Direction,
	};
};

var robot = RobotApiModule();

var currentCoordinates = robot.stepForward();

robot.turnRight();

robot.stepForward();

robot.turnLeft();

robot.shoot();
robot.shoot();
robot.shoot();
robot.shoot();

var ammoRemain = robot.shoot();

console.log('currX = ' + currentCoordinates.x + " currY = "+currentCoordinates.y + " dir = "+currentCoordinates.direction);

console.log("ammo = " + ammoRemain);
