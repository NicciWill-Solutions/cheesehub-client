import React from 'react';
import { connect } from 'react-redux';
import { fetchCheeses } from '../actions/cheese';

export class CheeseList extends React.Component {
    
    componentDidMount() {
        this.props.dispatch(fetchCheeses())
    }

    render() {
            if(this.props.cheeses === undefined) {
                return (<p>There was a problem with your request.</p>);
            }
            else {
                return (
                    <ul>
                        {this.props.cheeses.map( (cheese, index) => {
                            return <li key={index}>{cheese}</li>;
                        })}
                    </ul>
                );
            }
    }
    
}

const mapStateToProps = state => ({
    cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);