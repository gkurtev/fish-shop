import React, { Component } from 'react';

class AddFishForm extends Component {
nameRef = React.createRef();
priceRef = React.createRef();
statusRef = React.createRef();
descRef = React.createRef();
imageRef = React.createRef();

    createFish = (e) =>{
    //1 stop the form from submitting
        e.preventDefault()

        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value === 'available' ? true : false,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        }

        this.props.addFish(fish);
        //refresh the form
        e.target.reset();
    }
    render(){
        return(
            <form className="fish-edit" onSubmit={this.createFish}>
               <input name="name" ref={this.nameRef} type="text" placeholder="Name" />

               <input name="price" ref={this.priceRef} type="text" placeholder="Price" />

               <select name="status" ref={this.statusRef}>
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold Out!</option>
               </select>

               <textarea name="desc" ref={this.descRef} type="text" placeholder="Desc" />

               <input name="image" ref={this.imageRef} type="text" placeholder="Image" />

               <button type="submit">+ Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm;

//1 in order to change state you need to use their set State api otherwise it wont work NO OTHER WAY !!!!!!!!!!!!