import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';


function VibeCheck() {
  const { youthID } = useParams();

  return (
    <>
    <h1>VibeCheck</h1>
    <Link to="/">
      <button>Go Back to Check In</button>
    </Link>  
    </>
    )
}
export default VibeCheck


