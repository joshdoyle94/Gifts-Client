import React, { useEffect, useState } from 'react' 
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
import { giftDelete, giftShow } from '../../api/gift'
import EditGiftModal from './EditGiftModal'

const cardContainerLayout = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const GiftShow = ({ user, msgAlert }) => {

    const [gift, setGift] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [updated, setUpdated] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        giftShow(user, id)
            .then((res) => {
                setGift(res.data.gift)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Failure to show gift' + error,
                    variant: 'danger'
                })
            })
    }, [updated])

    const handleDeleteGift = () => {
        giftDelete(user, id)
        .then(() => {
            setDeleted(true)
            msgAlert({
                heading: 'Success',
                message: 'Deleting a Gift',
                variant: 'success'
            })
            
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Failure to delete Gift' + error,
                variant: 'danger'
            })
        })
    }

    // oneliner
    if (deleted) navigate('/gifts')

    if (!gift) {
        return <p>...loading</p>
    }

    return (
        <>
			<Container className="fluid">
                <Card>
                <Card.Header>{ gift.name }</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <small>Cost: { gift.cost }</small><br/>
                        <small>Type: { gift.type }</small><br/>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Container>
            <EditGiftModal 
                user={user}
                gift={gift}
                show={editModalShow}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                handleClose={() => setEditModalShow(false)}
            />
        </>
    )
}

export default GiftShow