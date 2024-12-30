
// code for mood tracker!
// variable declaration:
var container = $('.mood-track-buttons');
var jsButton1 = $('.amazing');
var jsButton2 = $('.frustrated');
var jsButton3 = $('.sad');
var jsButton4 = $('.anxious');
var jsButton5 = $('.productive');
var jsButton6 = $('.tired');
var jsButton7 = $('.weak');
var jsArea = $('.empty');
var jsBox1 = $('.box1');
var jsBox2 = $('.box2');
var jsBox3 = $('.box3');
var jsBox4 = $('.box4');
var jsBox5 = $('.box5');
var jsBox6 = $('.box6');
var jsBox7 = $('.box7');
var jsBox8 = $('.box8');
var jsBox9 = $('.box9');
var jsBox10 = $('.box10');


//counter for moving to next box
var counter = -1
var jsBoxes = [jsBox1, jsBox2, jsBox3, jsBox4, jsBox5, jsBox6, jsBox7, jsBox8, jsBox9, jsBox10]

//will make jorunal en try+resources show up when user clicks a mood button
jsButton1.on("click", function() {
  jsArea.append(`<center><input class=journalentry value="You go! We're so excited you're feeling great. Tell us more! (type here)"></center><center><button class= submissionbutton>Submit Another Entry</button></center><div class = resources><h2>Here are some tips to help pump you up more</h2><p>1. Focus on the positives in the present moment, instead of dwelling on the past</p><p>2. Be at ease with yourself. You are a unique person with much to offer the world</p><p>3. Take walk, exercise is your friendly stress reducer</p><p>4. Surround yourself with people that make you happy</p><p>5. Be thankful for yourself</p><p><iframe width="560" height="315" src="https://www.youtube.com/embed/aYnyMPc3LQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p><p><iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/23CM3vE0nJNkRiV7k27sJM?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></p></div>`);
  counter += 1;
  jsBoxes[counter].css("background-color", "#cc7171");
})

jsButton2.on("click", function() {
  jsArea.append(`<div class = resources><center><h2>Tip Jar</h2><p>1. Identify possible solutions.</p><p>2. Get some exercise.</p><p>3. Use humor to release tension</p><p>4. Do some breathing exercises</p><p>5. Talk to someone who is familiar with your situation.</p><p> </center></p><p><iframe src="https://open.spotify.com/embed/playlist/5wGvACh5raucsnDIGKGUKa?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></p><center><button class= submissionbutton>Submit Another Entr</button></center></div>`);
  counter += 1;
  jsBoxes[counter].css("background-color", "#ffb6c1");

})

jsButton3.on("click", function() {
  jsArea.append(`<div class = resources><center><h2>Tip Jar</h2><p>1. Acknowledge your feelings. It's okay not to be okay </p><p>2. Recovery is a hard process, your bravery in healing is commendable</p><p>3. Reach out to people you love. Call/chat or text them</p><p>4. Prioritize rest</p><p>5. Take a walk around your neighborhood</p><p> </center></p><p><iframe src="https://open.spotify.com/embed/playlist/5wGvACh5raucsnDIGKGUKa?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></p><center><button class= submissionbutton>Submit Another Entry</button></center></div>`);
  counter += 1;
  jsBoxes[counter].css("background-color", "#ffb6c1");
})

  jsButton4.on("click", function() {
    jsArea.append(`<div class = resources><center><h2>Tip Jar</h2><p>1. Avoid recreational activities like drugs or alcohol for relief</p><p>2. Control your breathing</p><p>3. Set small targets that can be achieved</p><p>4. You're not alone, many people face anxiety everyday</p><p>5. Avoid avoiding situations that cause anxiety</p><p> </center></p><p><iframe src="https://open.spotify.com/embed/playlist/5wGvACh5raucsnDIGKGUKa?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></p><center><button class= submissionbutton>Submit Another Entry</button></center></div>`);
  counter += 1;
  jsBoxes[counter].css("background-color", "#ffb6c1");
})

  jsButton5.on("click", function() {
    jsArea.append(`<center><input class=journalentry value="awesome! tell us more! (type here!)"></center><center><button class= submissionbutton>make another entry!</button></center><div class = resources><h2>in the meantime, here are some resources to keep that good mood up!</h2><p>1. Tackle your challenging tasks before lunch.</p><p>2. Stop confusing productivity with laziness.</p><p>3.  Set intentions for your productive day</p><p>4. Manage Distractions </p><p>5. Follow the 80/20 rule.</p><p><iframe width="560" height="315" src="https://www.youtube.com/embed/Mt-YuVhsvpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p><p><iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></p></div>`);
    counter += 1;
    jsBoxes[counter].css("background-color", "#7aaad6");

  })

  jsButton6.on("click", function() {

    jsArea.append(`<div class = resources><center><h2>Tip Jar</h2><p>1. Re-energize yourself by moving around </p><p>2. Talking therapy beats fatigue</p><p>3. Be careful with caffeine</p><p>4. Prioritize rest</p><p>5. Stretch</p><p> </center></p><p><iframe src="https://open.spotify.com/embed/playlist/5wGvACh5raucsnDIGKGUKa?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></p><center><button class= submissionbutton>Submit Another Entry</button></center></div>`);
  counter += 1;
  jsBoxes[counter].css("background-color", "#ffb6c1");
})

  jsButton7.on("click", function() {

    jsArea.append(`<div class = resources><center><h2>Tip Jar</h2><p>1. Although it may feel like your slipping, remember how hard it was to take the first step </p><p>2. Lighten up your workload</p><p>3. Go take a walk in the park</p><p>4. Explore new cafes</p><p>5. Read a book</p><p> </center></p><p><iframe src="https://open.spotify.com/embed/playlist/5wGvACh5raucsnDIGKGUKa?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></p><center><button class= submissionbutton>Submit Another Entry</button></center></div>`);
  counter += 1;
  jsBoxes[counter].css("background-color", "#ffb6c1");
})

  //gets rid of resources
  jsArea.on("click", changeColor)
  function changeColor() {
    if (event.target.className === "submissionbutton") {
      $(".empty").html("");
    }
  }

