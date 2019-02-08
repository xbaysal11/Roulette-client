import React, { Component } from "react";
import axios from "axios";

class AvatarInput extends Component {
    constructor() {
        super();
        this.state = {
            file: null
        };
        this.uploadFile = this.uploadFile.bind(this);
    }

    uploadFile(e) {
        const file = e.target.files[0];
        const fake_url = URL.createObjectURL(file);
        this.setState({
            file: fake_url
        });
        axios
            .post("/upload", file, {
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "X-Filename": file.name
                }
            })
            .then(response => {
                if (response.data.status === "success") {
                    this.setState({
                        file: response.data.data
                    });
                }
            });
    }

    render() {
        return (
            <div>
                <img src={this.state.file} alt="" />
                <input onChange={this.uploadFile} type="file" />
            </div>
        );
    }
}

export default AvatarInput;
