import telephone from './images/telephone.png'

function Contact() {
    return (
        <div>
            <img src={telephone} alt="telephone icon"/>
            <h1>Contact us:</h1>
            <div className='contact'><a href="mailto:sraa8033@gmail.com">click here!</a></div>
        </div>
    )
}

export default Contact