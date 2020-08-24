import React from 'react';


class textimp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    createPost(){
        this.props.createNewPost(this.state.post);
    }
    

    render() {
        return (
            <div className="row">
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
            </div>
        )
    }

}

export default textimp;