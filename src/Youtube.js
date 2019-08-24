import React, {Component} from 'react';

const API = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA'
const channelID= 'UCXgGy0wkgOzynnHvSEVmE3A'
const result = 5;


var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelID=${channelID}&part=snippet,id&order=date&maxResults=${result}`

class Youtube extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            resultyt: []
        };
        this.clicked = this.clicked.bind(this);

    }
    // This is the fetch code that makes the tool pull random YouTube results from the web to then load in the application.
    clicked() {
        fetch(finalURL)
        .then((response) => response.json())
        .then((responseJson) => {
           // console.log(responseJson);
           const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
           this.setState({resultyt});
           console.log(this.state.resultyt)
        })
        .catch((error) => {
            console.error(error);
        });
    }
    render() {
        // console.log(finalURL)
        return (<div>
            <button className="button" onClick={this.clicked}> Get Youtube Videos</button> {
        
                            this.state.resultyt.map((link, i) => {
                                console.log(link);
                                var frame = <div className="youtube"><iframe width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                             
                               </div>
                                return frame;
               })
          }
          {this.frame}
          <a href="mailto:enochcoalition@gmail.com"><button className="button2">Feedback?</button></a>
        </div>
        )}
};

const button2 = (<a href="mailto:enochcoalition@gmail.com?subject=Youtube Fetch App"><button className="button2">Feedback?</button></a>)

export default Youtube;