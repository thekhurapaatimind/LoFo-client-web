import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Button, Card } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteBtn from './DeleteBtn';
import WishBtn from './WishBtn';
import ItemCard from './ItemCard';

function Deck(props) {
    const { user } = props
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            {
                props.items.length > 0 ?
                    <Carousel
                        responsive={responsive}
                        autoPlaySpeed={2000}
                        autoPlay={true}
                        infinite={true}

                    >
                        {props.items.map((item) =>
                            <ItemCard item={item} />
                        )}
                    </Carousel> : <h6 className='text-center text-secondary mt-5' >No similar items!</h6>
            }

        </>)
}
const mapStateToProps = (state) => {
    return {
        user: state.user,
        auth: state.Authorised
    }
}

export default connect(mapStateToProps)(Deck);