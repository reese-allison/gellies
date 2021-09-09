
import { h, Fragment, Component} from 'preact';
import Button from '@material-ui/core/Button'
import pageStyle from '../styles/pages'




export const Home = () =>{
    const pageclass = pageStyle();
    /** @jsx h */
    /** @jsxFrag Fragment */

    
    return(
    <div className={pageclass.pageCenter}>
        <h2 className={pageclass.pageHeader}>HOME SCREEN</h2>
    </div>
    )
};

export const Error = ({ type, url }) => {
    const pageclass = pageStyle();
    return(
        <div className={pageclass.pageCenter}>
        <section className={pageclass.pageError}>
            <h2>
                Error {type}
            </h2>
            <p>It looks like we hit a snag.</p>
            <pre>{url}</pre>
        </section>
        </div>
        )
};

export class Moji extends Component{
     
    refreshPage = ()=>{
        window.location.reload();
     }
    render(){
        const pageclass = pageStyle();
        return (
            <div className={pageclass.pageCenter}>
                
                    <Button className={pageclass.pageButton} onClick={this.refreshPage}>REROLL
                    </Button>
                    <object type="image/svg+xml" data="/api/moji-test/" />
                    <object type="image/svg+xml" data="/api/moji-test/" />
                    <object type="image/svg+xml" data="/api/moji-test/" />
                    <object type="image/svg+xml" data="/api/moji-test/" />
                    <object type="image/svg+xml" data="/api/moji-test/" />
                    <object type="image/svg+xml" data="/api/moji-test/" />
                    <object type="image/svg+xml" data="/api/moji-test/" />
                    <object type="image/svg+xml" data="/api/moji-test/" />
                
            </div>
        )
    }
}
