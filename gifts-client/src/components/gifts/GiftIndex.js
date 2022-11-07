import React, { useEffect, useState } from 'react' 
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { giftIndex } from '../../api/gift'

const cardContainerLayout = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const GiftIndex = ({ user, msgAlert }) => {

    const [allGifts, setAllGifts] = useState([])

    useEffect(() => {
        giftIndex(user)
        .then(res => {
            setAllGifts(res.data.gifts)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Failure to find gifts' + error,
                variant: 'danger'
            })
        })
    }, [])

    const giftCards = allGifts.map(gift => (
        <Card key={ gift.id } style={{ width: '30%', margin: 5 }}>
            <Card.Header>{ gift.name }</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to={ `/gifts/${gift.id}` }>View { gift.name }</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    return (
        <div className='container-md' style={ cardContainerLayout }>
            { giftCards }
        </div>
    )
}

export default GiftIndex