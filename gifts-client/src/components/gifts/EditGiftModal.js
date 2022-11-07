import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import GiftForm from '../shared/GiftForm'
import { giftUpdate } from '../../api/gift'

const EditGiftModal = (props) => {
    const { 
        user, show, handleClose, 
        msgAlert, triggerRefresh 
    } = props

    const [gift, setGift] = useState(props.gift)

    const handleChange = (e) => {
        setGift(prevGift => {
            const updatedName = e.target.name
            let updatedValue = e.target.value
            // this handles our number type
            if (e.target.type === 'number') {
                // this looks at the input type and changes from the default type of string to an actual number
                updatedValue = parseInt(e.target.value)
            }

            const updatedGift = { [updatedName]: updatedValue }

            return { ...prevGift, ...updatedGift }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        giftUpdate(gift, user, props.gift._id)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: 'Updated Gift!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Failure to update gift' + error,
                    variant: 'danger'
                })
            })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton/>
            <Modal.Body>
                <GiftForm 
                    gift={gift}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Update Gift"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditGiftModal