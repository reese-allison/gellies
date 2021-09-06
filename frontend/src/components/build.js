import { h, Fragment, Component} from 'preact';


/** @jsx h */
/** @jsxFrag Fragment */

class Build extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    fetch_html(url){
        fetch(url)
        .then(response => {
            return response.text();
        })
        .then(content => {
            this.setState({content: content});
        })
        .catch(function(error){
            console.log(error);
        });
    }

    showComponents(component) {
        this.fetch_html('/api/build/' + component);  
    }

    render(){
        return (
            <div>
                <h1 style={{cursor: 'pointer', float: 'left', margin: '30px'}} onClick={() => this.showComponents('body')}>Bodies</h1>
                <h1 style={{cursor: 'pointer', float: 'left', margin: '30px'}} onClick={() => this.showComponents('eyes')}>Eyes</h1>
                <h1 style={{cursor: 'pointer', float: 'left', margin: '30px'}} onClick={() => this.showComponents('gradient')}>Gradients</h1>
                <h1 style={{cursor: 'pointer', float: 'left', margin: '30px'}} onClick={() => this.showComponents('mouth')}>Mouths</h1>
                <h1 style={{cursor: 'pointer', float: 'left', margin: '30px'}} onClick={() => this.showComponents('pattern')}>Patterns</h1>
                <h1 style={{cursor: 'pointer', float: 'left', margin: '30px'}} onClick={() => this.showComponents('headwear')}>Headwear</h1>
                <div style="clear: left;" id='selection-grid' dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
            </div>
        )
    }
}

export default Build;
