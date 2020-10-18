import React from 'react'
import { Helmet } from 'react-helmet'


export default function Contact() {

    const TITLE = 'Contact';

    return (
        <div className="container">
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <h2 className="text-center">{TITLE}</h2>

        </div>
    )
}
