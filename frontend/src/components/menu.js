
import { h, Fragment, Component, render } from 'preact';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        this.fetch_html('/api/moji-menu/');
    }

    fetch_html(url){
        fetch(url)
        .then(response => {
            return response.text();
        })
        .then(content => {
            this.setState({content: content})
        })
        .catch(function(error){
            console.log(error)
        });
    }

    render(){
        return (
            // THIS IS DANGEROUS! TO REDUCE XSS ATTACKS, WE NEED TO SANITIZE this.state.content (See DomPurify)
            <div id='menu' dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
        )
    }

}

export default Menu