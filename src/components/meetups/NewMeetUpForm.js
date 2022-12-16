import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetUpForm.module.css';


function NewMeetUpForm(props){
  const meetupTitle = useRef();
  const meetupImage = useRef();
  const meetupAddress = useRef();
  const meetupDesc = useRef();

  function submitHandler(event){
    event.preventDefault();

    const title = meetupTitle.current.value;
    const imageUrl = meetupImage.current.value;
    const address = meetupAddress.current.value;
    const description = meetupDesc.current.value;

    const meetupData = {
      title:title,
      image:imageUrl,
      address:address,
      description:description
    };
    props.onAddMeetup(meetupData);


  }

    return (
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="title">Meet up title</label>
            <input type="text" required id="title" ref={meetupTitle} />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Image</label>
            <input type="url" required id="image" ref={meetupImage} />
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Address</label>
            <input type="text" required id="address" ref={meetupAddress} />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              required
              rows="5"
              ref={meetupDesc}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Add Meetup</button>
          </div>
        </form>
      </Card>
    );
}


export default NewMeetUpForm;