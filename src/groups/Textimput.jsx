import React from 'react';

class textimp extends React.Component{
    render() {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row txtimp">
                        <div className="input-field col s10">
                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                            <label for="textarea1">New post</label>
                        </div>
                        <div className="btn file-field input-field col s1">
                            <span>File</span>
                            <input type="file"/>
                        </div>
                        <div className="btn file-field input-field col s1">
                            <span>Send</span>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

export default textimp;