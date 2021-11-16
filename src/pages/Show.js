import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const Show = (props) => {
  let navigate =useNavigate()
  const { id } = useParams()
  console.log(id)
  const cheese = props.cheese;
  console.log(cheese)


  const oneCheese = cheese.find((singleCheese) => {
    return singleCheese._id === id
  })

  console.log(oneCheese)

  const [editForm, setEditForm] = useState(oneCheese);

  const handleChange = event => {
    setEditForm({...editForm, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.updateCheese(editForm, oneCheese._id);
    navigate("/")
  }

  const removeCheese = () => {
    props.deleteCheese(oneCheese._id)
    navigate("/")
  }
  console.log(props.routerprovider)

  return (
    <div className="cheese">
      <h1>{oneCheese.name}</h1>
      <h1>{oneCheese.countryOfOrigin}</h1>
      <img src={oneCheese.image} alt={cheese.name} />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.countryOfOrigin}
          name="countryOfOrigin"
          placeholder="countryOfOrigin"
          onChange={handleChange}
        />
        <input type="submit" value="Update Cheese" />
      </form>
      <button onClick={removeCheese} id="delete">
        DELETE
      </button>
    </div>
  )
};
export default Show;
