import {useState, useEffect} from 'react';
import React from 'react';

type Recommender = {
    item: string;
    champions: string[];
}

const ItemTable = () =>{

    const [recommenders, setRecommenders] = useState<Recommender[]>([]);

    function getRecommenders(){
        fetch('http://localhost:3000/getRecommenders')
        .then(res => res.json())
        .then((data) => {
            setRecommenders(data);
            console.log(data);
        })
        .catch(error => console.log("ERROR"));
    }

    useEffect(() => {
      getRecommenders();
    }, []);

    return (
        <div className = "app-container">

            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Champions</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {recommenders.map((recommender) => (
                        <tr>
                            <td>{recommender.item}</td>
                            <td>{recommender.champions}</td>
                        </tr>
                ))} 
                </tbody>
            </table>

        </div>
    );
}

export default ItemTable

/*type Recommender = {
    item: string,
    champions: string[],
}

export default class ItemTable extends React.Component{
    state = {
        loading: false,
        recommenders: null,
        item: null,
        firstRec: null
    }

    async componentDidMount(){
        const url = "http://localhost:3000/getRecommenders";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({recommenders: data, firstRec: data[1], loading: false, item: data[1].item});
        console.log(data[1]);
        console.log(this.state.recommenders);
        console.log(this.state.item);
        console.log(this.state.firstRec);
    }

    render() {
        return(
            <div>
                {this.state.loading || !this.state.recommenders || !this.state.firstRec ?
                (<div>loading...</div> ) : 
                (<div>
                    <div>{this.state.item}</div>
                    <div>{this.state.recommenders[0].item}</div>
                </div>)}

            </div>

        );

    }

}*/

