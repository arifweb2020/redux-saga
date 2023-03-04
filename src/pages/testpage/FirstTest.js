import React from 'react';

function FirstTest(props) {
    const [name, setName] = React.useState("");
    return (
        <div>
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="input"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Add Name
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FirstTest;