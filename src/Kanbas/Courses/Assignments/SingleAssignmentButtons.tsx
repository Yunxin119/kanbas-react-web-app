import React from 'react'
import GreenCheckmark from '../Modules/GreenCheckmark'
import { IoEllipsisVertical } from 'react-icons/io5'

const SingleAssignmentButtons = () => {
  return (
    <div className='float-end'>
      <GreenCheckmark />
        <IoEllipsisVertical className="fs-4" />
    </div>
  )
}

export default SingleAssignmentButtons
