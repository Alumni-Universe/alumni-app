import { FC } from 'react';
import { IAlumniGroup } from '../../interfaces/Interfaces';

const AlumniGroupItem : FC<IAlumniGroup>  = ({ groupId, name, description, isPrivate, createdBy }) => {

    return (
        <article className="card bg-light" style={{padding: "0.5rem" }}>
        <div className="card-body shadow-lg py-2 bg-slate-200">
            <h4 className="text-lg card-title px-2 font-bold">{ name } {groupId} </h4>
            <p className="text-sm card-text px-2">Description:  { description }</p>
            <p className="text-sm card-text px-2">Created by: { createdBy }</p>
            <div className='flex justify-between px-2'>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Join
        </button>
            <img src="settingsIcon.png" alt="settings" className='h-6 w-6 text-center' />
        </div>
        </div>
        
    </article>
    )
}

export default AlumniGroupItem;