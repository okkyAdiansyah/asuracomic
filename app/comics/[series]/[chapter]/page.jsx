import React from 'react'

const Chapter = async ({params}) => {
    const { chapter } = await params;
    
    return (
        <div>Chapter</div>
    )
}

export default Chapter