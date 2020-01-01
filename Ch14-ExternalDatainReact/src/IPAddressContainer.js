import React, { Component } from "react";
import IPAddress from "./IPAddress";

var xhr;

class IPAddressContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ip_address: "..."
        };

        this.processRequest = this.processRequest.bind(this);
    };

    /* 
    Note: 
    If a status of 429 is returned, requests on ipinfo.io have reached its limit. 
    You need a token to access more requests. This is a known issue on the forum from 
    author/readers of the book. 
        
    If status = 429, a random ip address that I choose is shown instead.
    */

    componentDidMount() {
        xhr = new XMLHttpRequest();
        xhr.open('GET', "https://ipinfo.io/json", true);
        xhr.send();
        xhr.addEventListener("readystatechange", this.processRequest, false);
    }

    processRequest() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);

            this.setState({
                ip_address: response.ip
            });
        }

        /* Random IP address is assigned! */
        if (xhr.status === 429) {
            this.setState({
                ip_address: "127.114.28.176"
            })
        }
    }

    render() {
        return (
            <IPAddress ip={this.state.ip_address}/>
        );
    }
};

export default IPAddressContainer;