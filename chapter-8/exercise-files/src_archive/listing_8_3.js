//Listing 8.3 from React Quickly Chapter 8 - Handling events in React

//Creates video play/pause event handling to demonstrate events that work with only certain types of elements. 

import { useState, useRef } from "react";

//Get video source - Apollo 11 EVA TV Comparison
const VIDEO_SRC = "//images-assets.nasa.gov/video/One Small Step/One Small Step~orig.mp4";

/*
Define our video payer that has a play pause button. 

Will have four event listeners:
 - Play event on the video object
 - Pause event on the video object
 - Click event on play/pause button when paused
 - Click event on play/pause button when playing
*/

function VideoPlayer() {
    const [isPlaying, setPlaying] = useState(false);
    const onPlay = () => setPlaying(true);                              //Toggles state flag to true when video starts playing
    const onPause = () => setPlaying(false);                            //Opposite to above

    const onClickPlay = () => video.current.play();                     //Uses useRef to invoke play on the reference to the video DOM elemenet - we'll use this for the button
    const onClickPause = () =>  video.current.pause();                  //Same as above but opposite
    
    const video = useRef();                                             //Reference to the video element on the DOM for the button event handling

    return (
        <section>
            <video 
                ref={video}
                src={VIDEO_SRC}
                controls                                                //Tells react to have a control
                width="480"                                             //Sets width of controls
                onPlay={onPlay}                                         //Assigns the event listeners defined earlier to the video elements
                onPause={onPause}                                       //using the appropriate properties
            />
            <button onClick={
                isPlaying ? onClickPause : onClickPlay                  //Assigns one of the button click event listeners to the onClick property depending on the flag
            }>
                {isPlaying ? "Pause" : "Play"}                          {//Change the name of the button depending on play/pause status
                }
            </button>
        </section>
    );
}

function App() {
    return <VideoPlayer />;
}

export default App;
