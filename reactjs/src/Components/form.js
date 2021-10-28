import {useRef} from 'react'

function Form() {
   const title = useRef();
   const image = useRef();
   const location = useRef();
   const description = useRef();



   function submithander(event) {
      event.preventDefault();
      let enteredtitle = title.current.value;
      let enteredimageurl = image.current.value;
      let enteredlocation = location.current.value;
      let enteredescription = description.current.value;

    //   const data = {
    //       title : enteredtitle,
    //       image : enteredimageurl,
    //       location : enteredlocation,
    //       description : enteredescription
    //   }

    //   window.location.href = "/"
    fetch('http://localhost:8000/add-meetup/', {
        headers : {'Content-Type' : 'application/json'},
        method : 'POST',
        body : JSON.stringify(
            {
            'title' : enteredtitle, 
            'image_url' : enteredimageurl, 
            'location' : enteredlocation, 
            'description' : enteredescription
        })
    })

    .then(() => {
        window.location.href = "/"
    })
   }
   return (
       <form onSubmit={submithander}>
           <p>
           <label for="title">Title</label>
           <input type="text" id="title" ref={title} className="form-control" required/>
           </p>
           <p>
           <label for="image">Image url</label>
           <input type="url" id="image" ref={image} className="form-control" required/>
           </p>
           <p>
           <label for="location">Location</label>
           <input type="text" id="location" ref={location} className="form-control" required/>
           </p>
           <p>
           <label for="description">Description</label>
           <textarea id="description" ref={description} rows="10" cols="40" className="form-control"  required></textarea>
           </p>
           <button className="btn btn-primary">Create</button>
       </form>
   )
}

export default Form;