import React from 'react'

type Props = {
    EmailText : string
}

const EmailList = ({ EmailText } : Props) => {


  return (
    <div className=''>{EmailText}</div>
  )
}

export default EmailList