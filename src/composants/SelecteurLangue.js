import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

export default function SelecteurLangue() {

  const language_local = useSelector(state => state.langue);

  const dispatch = useDispatch();

  const changeLangue = (event) => {

    let langue_choisie = event.target.value;

    dispatch({
        type : 'UPDATE_LANGUE',
        value: langue_choisie
    })

  }

    return (
        <div>

            <form>
                <div className="form-group">
                    <label >Choix de votre langue</label>
                    <select value={language_local} onChange={changeLangue} className="form-control" >
                        <option value="fr" selected >Français</option>
                        <option value="en" selected >Anglais</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
