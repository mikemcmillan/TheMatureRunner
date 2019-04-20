import React, { Component } from "react";
import OT50Logo from "./images/OT50Logo.jpg";
import OT50 from "./images/OT50.jpg";

class Report extends Component {
  render() {
    return (
      <div>
        
        <h2>Race Report - 2019 Ouachita Trail 50 Mile Endurance Run</h2>
        <img src={OT50} height="300" width="300" alt="OT50 Finisher's Medal"/>
        <p>
           The 2019 Ouachita Trail 50 Endurance Run was held on April 13, 2019 in what can only be called
           less than ideal conditions. The forecast had called for heavy rain all week and for once, the            forecast
           was correct. It began to rain lightly just as the gun (well, Chrissy Ferguson shouting "Go!") 
           went off. The rain stayed light through the first four miles or so as we climbed up half the
           west side of Pinnacle Mountain and then doubled back down before going back around the base trail
           to merge with the Ouachita Trail and start heading west. 
        </p>
        <p>
        I knew the trail was already muddy from my training runs over the past few weeks, but they had dried 
        out some and I was optimistic that the forecast was off and we wouldn't have to suffer through any 
        more than a light rain for the duration of the race. This was true for the first twenty five miles
        or so until we reached the turn-around point at the Hwy. 10 park, which marks the western end of 
        Lake Maumelle.
        </p>
        <p>
        As soon as I headed back into the woods on the trail the rain began to come down heavily and thunder
        started rolling through the clouds. Where the trail had just been muddy, it was now starting to fill
        up with water and runners had no choice but to slosh along the course. 
        </p>
        <p>Creeks that on the first half of the course were maybe shin-deep became knee-deep and even
        upper-thigh deep and the water currents made it hard to stay on your feet. More than once, I had to
        either grab onto a tree to hold myself up or bend down and scramble among boulders to keep from 
        falling completely into the water. Running on the trail was hard because every time I took a stride, 
        I was sure the shoe sinking in the mud was going to stay there when I tried to lift it up.
        </p>
        <p>
        By about the 35 mile point or so, several areas of rain run-off began to look like creeks as they
        flowed into real creeks that were starting to look like rivers, at least to this tired runner.
        However, by the time I reached the spillway (where the trail soon meets Hwy. 300 and goes back into
        Pinnacle Mtn. State Park, the rain let up. Of course, the trail that was left was still water-soaked 
        and mud-covered, so it was hard to gain much speed (or traction). Fortunately, the last two miles of
        the race are on paved road and I was able to pick up my pace as much as I could so that I could 
        cross the finish line strong.
        </p>  
        <p>
        In case I forgot to mention this, this was my first attempt at the 50-mile distance and it will be
        a race I'll never forget. I'd like to thank the race director, Chrissy Ferguson, for putting on a 
        great race in less than ideal conditions, and a special thank you to all the aid station and other
        volunteers who worked in the rain for fourteen hours or so, keeping our food and drinks dry and our
        spirits up. I plan to come back next year to run the race again, rain or shine.
        </p>
      </div>
    );
  }
}
 
export default Report;

