import { FC } from 'react';
import { IAlumniGroup } from '../../interfaces/Interfaces';

const AlumniGroupItem : FC<IAlumniGroup>  = ({ groupId, name, description, isPrivate, createdBy }) => {

    return (
        <article className="card bg-light mb-3" style={{padding: "0.5rem" }}>
        <div className="card-body">
            <h4 className="card-title">{ name } {groupId} </h4>
            <p className="card-text">Description:  { description }</p>
            <p className="card-text">Private/Public: { isPrivate }</p>
            <p className="card-text">Created by: { createdBy } kr/t</p>
        </div>
    </article>
    )
}

export default AlumniGroupItem;