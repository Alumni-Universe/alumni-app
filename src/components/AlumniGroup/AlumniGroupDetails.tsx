import { FC } from "react";
import { IAlumniGroup } from "../../interfaces/Interfaces";
import { useContext } from "react";

const AlumniGroupDetails : FC<IAlumniGroup> = ({
    groupId,
    name,
    description,
    createdBy
}) => {
    return (
            <p>The group name is: {groupId}</p>
    )
}

export default AlumniGroupDetails;