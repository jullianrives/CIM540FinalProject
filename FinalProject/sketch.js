function preload() {
  soundFormats('mp3', 'ogg');
  danceParty1 = loadSound('assets/audio/danceParty1.mp3');
  bongos1 = loadSound('assets/audio/bongos1.mp3');
  shaker1 = loadSound('assets/audio/shaker1.mp3');
  funkyGroove1 = loadSound('assets/audio/funkyGroove1.mp3');
  hippieGroove1 = loadSound('assets/audio/hippieGroove1.mp3');
}
var video;

function setup() {
  // put setup code here
  createCanvas(500,500);
  background("gray");
  text("Welcome to the Dance Party Jam App!", 100,10);
  video = createCapture(VIDEO);
  video.size(250,250);
  video.hide();

  ////No Filter Cam Button////
  webcamOnButton = createButton("No Filter Cam");
  //create "No Filter Cam" button
  webcamOnButton.position(50,50);
  //button position x,y
  webcamOnButton.mousePressed(function()
  {
    video = createCapture(VIDEO);
    video.size(250,250);
    vide.show();
  })

  ////Dance Button////
  danceButton = createButton("Dance Party Time? I THINK SO");
  //create "Turn on Webcam" button
  danceButton.position(250,50);
  //button position x,y
  danceButton.mousePressed(function(){
    danceParty1.setVolume(.85);
    danceParty1.play();
    danceParty1.loop();
    danceParty1.rate(1);
    })

    ////Dance Stahp! Button////
    danceStahpButton = createButton("STOP ZE DANCE");
    //create "Dance stahp!" button
    danceStahpButton.position(250,75);
    //button position x,y
    danceStahpButton.mousePressed(function(){
      danceParty1.stop();
      })

    ////Bongos Loop Button////
    bongosButton = createButton("BONGOS?!?!!");
    //create "bongos" button
    bongosButton.position(10,445);
    //button position x,y
    bongosButton.mousePressed(function(){
      bongos1.setVolume(.85);
      bongos1.play();
      bongos1.loop();
      bongos1.rate(1);
      })

      ////Bongos Stahp! Button////
      bongosStahpButton = createButton("BONGO NO!");
      //create "bongos stahp!" button
      bongosStahpButton.position(10,470);
      //button position x,y
      bongosStahpButton.mousePressed(function(){
        bongos1.stop();
        })

        ////Shaker Loop Button////
        shakerButton = createButton("SHAKE n' BAKE");
        //create "shaker" button
        shakerButton.position(100,445);
        //button position x,y
        shakerButton.mousePressed(function(){
          shaker1.setVolume(.85);
          shaker1.play();
          shaker1.loop();
          shaker1.rate(1);
          })

          ////Shaker Stahp! Button////
          shakerStahpButton = createButton("STAHPPP");
          //create "shaker stahp!" button
          shakerStahpButton.position(100,470);
          //button position x,y
          shakerStahpButton.mousePressed(function(){
            shaker1.stop();
            })

            ////Funky Groove Loop Button////
            funkyGroove1Button = createButton("PUT SUM FUNK ON IT");
            //create "funkyGroove1" button
            funkyGroove1Button.position(200,445);
            //button position x,y
            funkyGroove1Button.mousePressed(function(){
              funkyGroove1.setVolume(.85);
              funkyGroove1.play();
              funkyGroove1.loop();
              funkyGroove1.rate(1);
              })

              ////funkyGroove Stahp! Button////
              funkyGroove1StahpButton = createButton("Yeet");
              //create "funkyGroove stahp!" button
              funkyGroove1StahpButton.position(200,470);
              //button position x,y
              funkyGroove1StahpButton.mousePressed(function(){
                funkyGroove1.stop();
                })

                ////Hippie Groove Loop Button////
                hippieGroove1Button = createButton("Did someone say Hippies?");
                //create "hippieGroove" button
                hippieGroove1Button.position(335,445);
                //button position x,y
                hippieGroove1Button.mousePressed(function(){
                  hippieGroove1.setVolume(.6);
                  hippieGroove1.play();
                  hippieGroove1.loop();
                  hippieGroove1.rate(1);
                  })

                  ////Hippie Groove Stahp! Button////
                  hippieGroove1StahpButton = createButton("nevah-moah!");
                  //create "bongos stahp!" button
                  hippieGroove1StahpButton.position(335,470);
                  //button position x,y
                  hippieGroove1StahpButton.mousePressed(function(){
                    hippieGroove1.stop();
                    })
}

function draw() {
  // put drawing code here
  tint(255, 40, 90);
  image(video, 0, 0);
  tint(100, 100, 100);
  image(video, 250, 0);
  tint(150, 240, 3);
  image(video, 0, 250);
  tint(50, 50, 50);
  image(video, 250, 250);
}
