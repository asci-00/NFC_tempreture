import React, {useEffect } from 'react'

export default function Test(props) {
    const { updated } = props
    
    useEffect(() => {
        console.log('once')
    }, [])
    
    useEffect(() => {
        console.log('update')
    }, [updated])

    return (
        <div>
            test
        </div>
    )
}