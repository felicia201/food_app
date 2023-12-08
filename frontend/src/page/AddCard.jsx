import React from 'react'

function Input({ type, value, id, label }){
  return (
    <div className="addorupdate">
      <label htmlFor={id}>{label}</label>
      <input type={type} value={value} id={id}/>
    </div>
  )
}

export default function AddCard() {

  function send(e){
    e.preventDefault()
    // Code d'envoi
  }

  return (
    <form onSubmit={send} encType='multpart/form-data'>
        <Input type="file" value="" id="image" label="image"/>
        <Input type="text" value="" id="name" label="Nom du produit"/>
        <Input type="text" value="" id="ingredients" label="Ingrédients du produits"/>
        <Input type="text" value="" id="price" label="Prix"/>
        <input type="submit" value="Ajouter un produit" />
    </form>
  )
}
