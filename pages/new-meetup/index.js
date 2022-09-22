import { useRouter } from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Head from 'next/head'
function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  }

  return (
  
  <>
    <Head>
      <title>New Meetups</title>
      <meta name="meetups" content="add multiple new  meetups"></meta>
    </Head>
    <NewMeetupForm onAddMeetup={addMeetupHandler} /></>
    )
  
}

export default NewMeetupPage;