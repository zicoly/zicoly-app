import React from 'react'
import DisplayText from './DisplayText'

export default function ParentText() {

    const title = 'Welcome to React Props!'
    const subTitle = 'Learning Props is Fun and Easy.'
  return (
    <div>
        < DisplayText Title={title} Subtitle={subTitle} />
    </div>
  )
}
