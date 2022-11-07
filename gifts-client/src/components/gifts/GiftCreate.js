import React, { useState } from 'react' 
import { giftCreate } from '../../api/gift'
import { useNavigate } from 'react-router-dom'

import GiftForm from '../shared/GiftForm'

const GiftCreate = ({ user, msgAlert }) => {
    const navigate = useNavigate()

    const defaultGift = {
        name: '',
        type: '',
        cost: '',
    }

    const [gift, setGift] = useState(defaultGift)

    const handleChange = (e) => {
        // to keep the values as users input info 
        // first spread the current pet
        // then comma and modify the key to the value you need
        // this was fine for the old way of building a pet
        // need new stuff to handle new data types number and boolean
        // setPet({...pet, [event.target.name]: event.target.value})
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

    const handleCreateGift = (e) => {
        e.preventDefault()
        
        giftCreate(gift, user)
            .then(res => { navigate(`/gifts/${res.data.gift.id}`)})
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: 'Create Gift',
                    variant: 'success'
                })
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Failure to create gift' + error,
                    variant: 'danger'
                })
            })
    }

    return (
        <GiftForm
            gift={ gift }
            handleChange={ handleChange }
            heading="Add a new gift!"
            handleSubmit={ handleCreateGift }
        />
	)
}

export default GiftCreate