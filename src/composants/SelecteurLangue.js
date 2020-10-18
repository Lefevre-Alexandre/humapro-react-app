import React from 'react';


export default function SelecteurLangue() {



    return (
        <div>

            <form>
                <div className="form-group">
                    <label >Choix de votre langue</label>
                    <select className="form-control" >
                        <option value="fr" selected >Français</option>
                        <option value="en" selected >Anglais</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
