import React from 'react'
import propTypes from 'prop-types';

const Components = ({name,bio,job,children,handlename}) => {
  return (
    <div>
      <button onClick={()=>handlename(name)}>click me</button>
      <p style={{color:'blue',background:'gray'}}>My name is {name} and {bio}.I am a {job}.</p>
      {children}
    </div>
  )
}
Components.defaultProps = {
  name:'Enter full name',
  bio:'Enter biography',
  job:'Enter your profession',
}
Components.propTypes={
  name:propTypes.string,
  bio:propTypes.string,
  job:propTypes.string,
}

export default Components
