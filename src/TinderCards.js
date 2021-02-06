// import { SwipeableDrawer } from '@material-ui/core';
import React ,{useState} from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";


function TinderCards() {
    // eslint-disable-next-line
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg',
        },
        {
            name: 'Jeff Bezoz',
            url: 'https://cdn-istoedinheiro-ssl.akamaized.net/wp-content/uploads/sites/17/2019/11/f894b31d638a10f4ce48e871f1742b5f7b988141.jpg',
        },
    ]);

    const swiped = (direction, nametoDelete) => {
        console.log("Removing: ", nametoDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + " Left the screen!");
    };



    return (
        <div className= 'tinderCards'>
            <div className = "tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className = 'swipe'
                        key= {person.name}
                        preventSwipe = {['up', 'down']}
                        onSwipe = {(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                        <div
                            style={{ backgroundImage: `url(${person.url})`}}
                            className = "card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>        
        </div>
        ); 
    }

export default TinderCards;
