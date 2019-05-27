import React from 'react';
class SearchBar extends React.Component{
    state = {
        term : ''
    }
    OnSubmitForm= (e)=>{
        e.preventDefault();
        this.props.Onsearch(this.state.term)
    }
    render(){
        return(<div className="ui segment">
            <form className="ui form" onSubmit={this.OnSubmitForm}>
                <div className="field">
                    <label>Search Videos</label>
                    <input type="text" value={this.state.term} onChange={(e) => this.setState({term : e.target.value})}/>
                </div>
            </form>
        </div>)
    }
}
export default SearchBar;