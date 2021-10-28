import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function Allmeetups(props) {
    const [meetups, setmeetups] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/meetups/?format=json')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setmeetups(data)
        })
    })


    function addtofavorites(meetup) {
        fetch('http://localhost:8000/add-to-favorites/' + String(meetup.id) + "/", {
              method : 'POST',
              headers : {'Content-Type' : 'application/json'}
        })

        .then(() => {
            alert('Added to favorites')
        })
    }    

    function removefromfavorites(meetup) {
        fetch('http://localhost:8000/remove-from-favorites/' + String(meetup.id) + "/", {
              method : 'POST',
              headers : {'Content-Type' : 'application/json'},
        })

        .then(() => {
            alert('Removed from favorites')
        })
    }
    
    function deletemeetup(meetup) {
        fetch('http://localhost:8000/delete-meetup/' + String(meetup.id) + '/', {
            method : 'DELETE',
            headers : 
            {
                'Content-Type' : 'application/json'
            },
            body : {}
        })

        .then(() => {
            alert('Meetup deleted')
        })
    }

    return (
        <div className="container my-5">
        <h1>Meetups</h1>
        <hr />
        <ul>
        {meetups && meetups.map((meetup) => {
           return (
           <li key={meetup.id}>
               <div className="card mb-3">
                   <div className="card-body">
                       <img src={meetup.image_url} alt="" id="header-image"/>
                      <p className="my-3" id="title">{meetup.title}</p>
                      <p id="location">{meetup.location}</p>
                      <p>{meetup.description}</p>
                      <div className="btn-group" role="group" aria-label="Basic example">
                      {meetup.is_favorite === false && <button className="btn btn-primary" onClick={ () => addtofavorites(meetup)}>Add to favorites</button>}
                      {meetup.is_favorite && <button className="btn btn-danger" onClick={() => removefromfavorites(meetup)}>Remove from favorites</button>}
                      <Link to={`/update-meetup/${meetup.id}`} className="btn btn-secondary">Update</Link>
                      <button className="btn btn-outline-danger" onClick={() => deletemeetup(meetup)}>Delete</button>
                      </div>
                    </div>
               </div>
           </li>
           )
        })}
        </ul>
        </div>
    )
}

export default Allmeetups;