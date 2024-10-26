
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(data => setProfiles(data.data))
  }, [])

  return (
    <>
      <h1> User Profiles </h1>

      <div className="d-flex flex-row justify-content-center flex-wrap">

      { profiles.map( (profile) => (
          
            <Card className='m-3 col-3 shadow bg-light rounded-5'>
              <Card.Img variant="top" style={{ borderRadius: '50%', border: '1px solid blue'}} src={profile.avatar} />
              <Card.Body>
                <Card.Title>{profile.first_name} {profile.last_name}</Card.Title>
                <Card.Text>
                  {profile.email}
                </Card.Text>
              </Card.Body>
            </Card>
        ))
      }
      </div>
    </>
  )
}

export default App
