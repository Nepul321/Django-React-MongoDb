import {useState, useEffect, useRef} from 'react'

function UpdateMeetup({ match }) {
    const [meetup, setmeetup] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/meetup-details/' + String(match.params.id))
        .then(res => {
            return res.json();
        })
        .then(data => {
            setmeetup(data)
        })
    })

    const title = useRef();
    const image = useRef();
    const location = useRef();
    const description = useRef();

    if (meetup) {
        title.current.defaultValue = meetup.title
        image.current.defaultValue = meetup.image_url
        location.current.defaultValue = meetup.location
        description.current.defaultValue = meetup.description
    }

    function submithander(event) {
        event.preventDefault();
        fetch('http://localhost:8000/meetup-update/' + String(match.params.id) + "/", {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                 'title' : title.current.value,
                 'image_url' : image.current.value,
                 'location' : location.current.value,
                 'description' : description.current.value
            })
        })

        .then(() => {
            window.location.href = "/"
        })
    }

    
    return (
        <div className="container my-5">
          <h1>Update Meetup </h1>
          <form onSubmit={submithander}>
           <p>
           <label for="title">Title</label>
           <input type="text" id="title" className="form-control" required ref={title}/>
           </p>
           <p>
           <label for="image">Image url</label>
           <input type="url" id="image" className="form-control" required ref={image}/>
           </p>
           <p>
           <label for="location">Location</label>
           <input type="text" id="location" className="form-control" required ref={location}/>
           </p>
           <p>
           <label for="description">Description</label>
           <textarea id="description" rows="10" cols="40" className="form-control"  required ref={description}></textarea>
           </p>
           <button className="btn btn-primary">Update</button>
        </form>
        </div>
    )
}

export default UpdateMeetup;