import {useState, useEffect} from 'react'

function Favorites(props) {
    const [meetups, setmeetups] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8000/meetups/')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setmeetups(data)
        })
    })


    function removefromfavorites(meetup) {
        fetch('http://localhost:8000/remove-from-favorites/' + String(meetup.id) + "/", {
              method : 'POST',
              headers : {'Content-Type' : 'application/json'}
        })

        .then(() => {
            alert('Removed from favorites')
        })
    }
    return (
        <div className="container my-5">
        <h1>Favorite Meetups</h1>
        <hr />
        <ul>
        {meetups && meetups.map((meetup) => {
           return (
            
           <li key={meetup.id}>
               {meetup.is_favorite &&
               <div className="card mb-3">
                   <div className="card-body">
                       <img src={meetup.image_url} alt="" id="header-image"/>
                      <p className="my-3" id="title">{meetup.title}</p>
                      <p id="location">{meetup.location}</p>
                      <p>{meetup.description}</p>
                      <button className="btn btn-danger" onClick={() => removefromfavorites(meetup)}>Remove from favorites</button>
                     </div>
               </div>
               }

           </li>
           )
        })}
        </ul>
        </div>
    )
}

export default Favorites;