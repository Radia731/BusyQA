function AddPet() {
    return(

<>

     <div className="addpetContainer">
        <h1> Add new a pet</h1>

        <div>
            <form action="POST">

                <div>

                    <label htmlFor="name" > Name </label>
                    <input type="text" className="petNameinput"/>

                </div>

                <div>
                    <label htmlFor="petType"> petType </label>
                    <input list="Pet-Types"  placeholder="select your pet type" />

                            <datalist id="Pet-Types">
                                <option value="Dog"></option>
                                <option value="Cat"></option>
                                <option value="Bunny"></option>
                                <option value="Bird"></option>
                                <option value="Fish"></option>
                                <option value="Reptile"></option>
                            </datalist>
                            
                </div>

                <div>
                            <legend>Gender</legend>
                            
                            <input type="radio" id="male" name="gender" value="male" className="petNameinput"/>
                            <label htmlFor="male">Male</label>

                            <input type="radio" id="female" name="gender" value="female" className="petNameinput"/>
                            <label htmlFor="female">Female</label>
                        
                </div>
                <div>

                    <button>
                        Add
                    </button>
                </div>
    

            </form>

        </div>

        </div>

</> 
    )
}
export default AddPet