import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setloadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    fetch('https://react-getting-started-45a54-default-rtdb.firebaseio.com/meetups.json')
    .then(response=>{
      return response.json()
    })
    .then(data=>{
      const meetups = [];

      for(const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup)
      }

      setIsLoading(false)
      setloadedMeetups(meetups)
    })
  }, []);

  if(isLoading) {
    return(
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={loadedMeetups}/>
  </section>;
}

export default AllMeetupsPage;