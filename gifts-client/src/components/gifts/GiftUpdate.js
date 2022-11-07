import React from 'react'

const GiftUpdate = ({ gift, handleChange, handleUpdateGift }) => {
	return (
		<>
			<input 
            type='text' 
            value={gift.name} 
            name='name' 
            onChange={handleChange} 
            />
			<input 
            type='text' 
            value={gif.type} 
            name='type' 
            onChange={handleChange} 
            />
			<button onClick={handleUpdateGift}>Update gift</button>
		</>
	)
}

export default GiftUpdate