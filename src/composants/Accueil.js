import React from 'react'
import { Helmet } from 'react-helmet'
import SelecteurLangue from './SelecteurLangue'

export default function Accueil() {

    const TITLE = 'Accueil';

    return (
        <div className="container">
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <h2 className="text-center">{TITLE}</h2>
            
            <SelecteurLangue />
        </div>
    )
}
