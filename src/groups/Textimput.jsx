import React from 'react';
import {
    TextField, Grid,
    Button
} from '@material-ui/core';
import "./textinput.css";


class textimp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: "",
            file:''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    createPost() {
        this.props.createNewPost(this.state.post,this.state.file);
    }

    onFileChange = (event) => {
        // console.log(event.target.files[0]);
        event.preventDefault();
        this.setState({
          file: event.target.files[0]
        });
      }


    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={8}>
                        <form noValidate autoComplete="off">
                            <TextField className='inp input-boxes' id="post" placeholder="New post" variant="filled" onChange={this.handleChange.bind(this)} />
                        </form>
                    </Grid>
                    <Grid item xs={2}>
                        <Button className="sfbtn" variant="contained" onClick={this.createPost.bind(this)}>Send</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            variant="contained"
                            component="label">
                            File
                         <input onChange={this.onFileChange}
                                type="file"
                                style={{ display: "none" }}
                            />
                        </Button>
                    </Grid>
                </Grid>

                {/* <div className="row">
                <form className="col s12">
                    <div className="row txtimp">
                        <div className="input-field col s10">
                            <textarea id="post" className="materialize-textarea" onChange={this.handleChange.bind(this)}></textarea>
                            <label htmlFor="post">New post</label>
                        </div>
                        <div className="btn file-field input-field col s1">
                            <span>File</span>
                            <input type="file" />
                        </div>
                        <div className="btn file-field input-field col s1">
                            <span onClick={this.createPost.bind(this)}>Send</span>
                        </div>
                    </div>
                </form>
            </div> */}
            </div>
        )
    }

}

export default textimp;