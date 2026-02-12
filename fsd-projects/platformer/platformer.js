$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(200, 650, 100, 30, "red")
createPlatform(400, 550, 100, 30, "orange")
createPlatform(600, 450, 100, 30, "yellow")
createPlatform(800, 350, 100, 30, "green")
createPlatform(1000, 250, 100, 30, "blue")
createPlatform(1100, 450, 400, 30, "pink")



    // TODO 3 - Create Collectables
createCollectable("goldrupee", 200, 50, 0.2, 0.3);
createCollectable("goldrupee", 600, 50, 0.2, 0.3);
createCollectable("goldrupee", 1000, 50, 0.2, 0.3);
createCollectable("ms3", 1200, 400, 0.2, 0.3);


    
    // TODO 4 - Create Cannons
createCannon("bottom", 500, 2000);
createCannon("right", 200, 2000);
createCannon("top", 800, 2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
