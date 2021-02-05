import React, {Component} from 'react';
import { Card, CardImgOverlay, CardTitle, CardImg } from 'reactstrap';

class Directory extends Component{

    render(){
        const directory = this.props.campsites.map(campsite => {
            return(
                // need to add unique id
                <div key={campsite.id} className="col-md-5 m-1">
                   <Card onClick={() => this.props.onClick(campsite.id)}>    
                        <CardImg width="100%" src={campsite.image} alt = {campsite.name} />
                        <CardImgOverlay>
                             <CardTitle> {campsite.name} </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
                // use a jsx div
            );
        });
        
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                
            </div>
        );

    }


}

//concept of props in components, and how to pass props from one component to another.
// to pass data to component A to component B

// class ExampleParentComponent extends Component {
//     constructor(props){
//         super(props); 
//         this.state = {
//             number: 333
//         }
//     }
//     render() {
//         return <ExampleChildComponent number = {this.state.number} greetings = "Hello World" />;
//     }
// }

// class ExampleChildComponent extends Component {
//     render() {
//         return <div>{this.props.number} {this.props.greetings}</div>
//     }
// }




export default Directory;