import { ChangeEvent, FC, SetStateAction, useContext, useRef, useState } from 'react';
import { IAlumniGroup } from '../../interfaces/Interfaces';
import AlumniGroupItem from './AlumniGroupItem';
import { AlumniGroupContext } from '../../contexts/AlumniGroupContext';
import { AlumniGroupContextType } from '../../types/AlumniGroupContextType';

const AlumniGroupList: FC = () => {

    const {alumniGroups} = useContext(AlumniGroupContext) as AlumniGroupContextType;

    const createArtistList = () => {
        return alumniGroups.map( ( group: IAlumniGroup, key: number ) => {
            return (
                <div key={key}>
                    <AlumniGroupItem 
                    groupId={group.groupId}
                    name={group.name}
                    description={group.description}
                    isPrivate={group.isPrivate}
                    createdBy={group.createdBy}
                    />
                </div>
            )
        } );
    }

    return (
        <section>
            <section style={{textAlign: "center"}}>
                <h4>Alumni Groups</h4>
            </section>
            <hr className="mb-1" />
            <div>
                { createArtistList() }
            </div>
        </section>
    )
}

export default AlumniGroupList;