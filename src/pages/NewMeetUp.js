
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

function NewMeetUpPage() {
  const history = useHistory();

  function addMeetUpHandler(meetup){
    fetch(
      "https://react-demo-623da-default-rtdb.europe-west1.firebasedatabase.app/meetup.json",
      {
        method:'POST',
        body:JSON.stringify(meetup),
        headers:{
          'Content-type':'application/json'
        }
      }
    ).then(()=>history.replace('/'));
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetUpForm onAddMeetup={addMeetUpHandler}/>
    </section>
  );
}

export default NewMeetUpPage;
