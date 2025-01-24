import Modal from "react-modal"

import { useState,  } from "react"
import { useDispatch } from "react-redux"
import { updateProfile } from "../../redux/action/profile.actions"
import './editmodal.scss'
const  EditModal=({ isOpen, onRequestClose })=> {
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [usertName, setUserName] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    // Function handling from submission
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      updateProfile({ usertName:usertName})
    )
    setFirstName("")
    setLastName("")
    setIsSubmitted(true)
  }
  <Modal
  isOpen={isOpen}
  onRequestClose={isSubmitted ? onRequestClose : null} // Fermer la modal si isSubmitted est true
  contentLabel="Edit Modal"
  className="Modal"
  overlayClassName="Overlay"
>
  <section className="edit-name-content">
   
  
    <h1 className="edit-name-title">Edit User Name</h1>
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="UserName">User Name</label>
        <input
          type="text"
          id="UserName"
          autoFocus
          autoComplete="off"
          onChange={(e) => setUserName(e.target.value)}
          value={usertName}
          placeholder="New UserName"
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="FirstName">First Name</label>
        <input
          type="text"
          id="FirstName"
          autoComplete="off"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          placeholder="New FirstName"
          required
        />
         <label htmlFor="lastName">User Name</label>
        <input
          type="text"
          id="LastName"
          autoFocus
          autoComplete="off"
          onChange={(e) => setUserName(e.target.value)}
          value={lastName}
          placeholder="lastName"
          required
        />
      </div>
    
      
    </form>
  </section>
</Modal>

}
export default EditModal

