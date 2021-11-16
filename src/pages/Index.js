import { useState } from "react";
import { Link } from "react-router-dom"
const Index = (props) => {
  const [newForm, setNewForm] = useState({
    name: "",
    countryOfOrigin: "",
    image: ""
  })
  const handleChange = event => {
    setNewForm({...newForm, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.createCheese(newForm)
    setNewForm({
      name: "",
      image: "",
      title: ""
    })
  }
  
  const loaded = () => (
    props.cheese.map((oneCheese) => (
      <div key={oneCheese._id} className="oneCheese">
        <Link to={`/${oneCheese._id}`}><h1> {oneCheese.name} </h1> </Link>
        <img src={oneCheese.image} alt = {oneCheese.name} />
        <h3>{oneCheese.countryOfOrigin}</h3>
        
      </div>
    ))

  )

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <>
      <form onSubmit= {handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.countryOfOrigin}
          name="countryOfOrigin"
          placeholder="Country of Origin"
          onChange={handleChange}
        />

        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image"
          onChange={handleChange}
        />
        <input type="submit" value = "Add a New Cheese"/>
        
      </form>
      {props.cheese ? loaded() : loading () }

    </>
  )
};
export default Index;
