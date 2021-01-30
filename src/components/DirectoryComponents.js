import React, {Component} from 'react';
import { Card, CardImgOverlay, CardText, CardBody, CardTitle, CardImg } from 'reactstrap';


class Directory extends Component{
    constructor(props){
        super(props);
        this.state = {    
            selectedCampsite: null  
        };
    }
    //set up an event handler need to use setState 
    onCampsiteSelect(campsite){
        this.setState({selectedCampsite: campsite});
    }

    renderSelectedCampsite(campsite){
        if (campsite){
            return (
                <Card>
                    <CardImg top src={campsite.image} alt = {campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            );

        }
        return <div />;
    }


    render(){
        const directory = this.props.campsites.map(campsite => {
            return(
                //need to add unique id
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onCampsiteSelect(campsite)}>
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
                <div className="col-md-5 m-1">
                    {this.renderSelectedCampsite(this.state.selectedCampsite)}
                </div>
                {/* <ExampleParentComponent /> */}

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