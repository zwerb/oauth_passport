import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const UserPage = (props) => {
  const {user} = props

  if (!user.id) {
    return <Redirect to='/' />
  }

  return (
    <div className='h100 w100 flex column align-items-center justify-center'>
      <div>
        <h1>Welcome back!</h1>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserPage)
