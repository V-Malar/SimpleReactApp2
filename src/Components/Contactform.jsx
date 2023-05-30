import './Hero.css';

export default function Contactform() {
  function onClickHandler(e) {
    e.preventDefault();

  }
  return (
    <>
      <form onClick={onClickHandler}>
        <div className='style'>
          <div className="col-md-3">
            <label htmlFor="fname">First Name</label>
            <input type="text" className="form-control"id="inputfname" placeholder="Firstname" />
          </div>
          <div className="col-md-3">
            <label htmlFor="lname">Last Name</label>
            <input type="text" className="form-control"id="inputlname" placeholder="Lastname" />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" className="form-control"id="inputEmail4" placeholder="Email" />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputAddress">Address</label>
            <input type="text" className="form-control"id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputAddress2">Phone</label>
            <input type="text" className="form-control"id="inputnumber" placeholder="123456789" /></div>
          <div className=" col-md-3">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control"id="inputCity" /></div>
          <div className=" col-md-3">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>TamilNadu</option>
              <option>Kerala</option>
              <option>Karnataka</option>
              <option>Jammu & Kashmir</option>
              <option>Oddisha</option>
              <option>Madhya Pradesh</option>
            </select></div>
          <div className="col-md-3">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="col-md-3">
            <label htmlFor="dcity">Departure City</label>
            <input type="text" className="form-control" id="dcity" placeholder="City name" />
          </div>
          <div className="col-md-3">
            <label htmlFor="acity">Arrival City</label>
            <input type="text" className="form-control" id="acity" placeholder="City name" />
          </div>
          <div className="col-md-3">
            <label htmlFor="dtime">Depature Time</label>
            <input type="date" className="form-control" id="dtime" />
          </div>
          <div className="col-md-3">
            <label htmlFor="atime">Arrival Time</label>
            <input type="date" className="form-control" id="atime" />
          </div></div>
          <div className='bn'>
          <button type="submit" className="btn btn-primary">Submit</button></div>
      </form>
    </>
  )
}