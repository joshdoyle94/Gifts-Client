import { Form, Button, Container } from 'react-bootstrap'

const GiftForm = (props) => {
    // here are the props we're going to bring into our form
    const { gift, handleChange, heading, handleSubmit } = props

    return (
        <Container className="justify-content-center">
            <h3>{ heading }</h3>
            <Form onSubmit={ handleSubmit }>
                <Form.Label>Name:</Form.Label>
                <Form.Control 
                    placeholder="what is this gift?"
                    name="name"
                    id="name"
                    value= { gift.name }
                    onChange={ handleChange }
                />
                <Form.Label>Type:</Form.Label>
                <Form.Control 
                    placeholder="what type of gift is this?"
                    name="type"
                    id="type"
                    value= { gift.type }
                    onChange={ handleChange }
                />
                <Form.Label>Cost:</Form.Label>
                <Form.Control 
                    placeholder="How much does it cost?"
                    type="number"
                    name="cost"
                    id="cost"
                    value= { gift.cost }
                    onChange={ handleChange }
                />
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default GiftForm