import React from 'react';

const SearchBox = (props) => {

    const {searchField, searchChange} = props;

    return (
        <div className="pa4">
            <form className="bg-light-red mw7 center pa4 br2-ns ba b--black-10">
                <fieldset className="cf bn ma0 pa0">
                <legend className="pa0 f1 f4-ns mb3 white">Search some robots</legend>
                <div className="cf">
                    <label className="clip">Name of robots</label>
                    <input 
                    className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 center " 
                    placeholder="Search some robots" 
                    type="text" 
                    name="robot"  
                    id="id"
                    onChange = {searchChange}/>
                </div>
                </fieldset>
            </form>
        </div>
    );
};

export default SearchBox;