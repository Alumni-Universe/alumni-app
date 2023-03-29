import React, { FC, useEffect, useState } from "react";
import { IAlumniGroup, IAlumniUser } from "../../interfaces/Interfaces";
import { AlumniGroupService } from "../../services/AlumniGroupService";
import { AlumniUserService } from "../../services/AlumniUserService";

interface InviteEvents {
    isOpen: boolean;
    changeCreateEventPopUpVisiblility: Function
}

interface InviteOption {
    value: string;
    label: string;
}

function transformGroupData(groups: IAlumniGroup[]): InviteOption[] {
    const options: InviteOption[] = [];
    groups.forEach((group: IAlumniGroup) => {
        options.push({
            value: group.groupId.toString(),
            label: group.name
        })
    });
    return options;
}

function transformUserData(users: IAlumniUser[]): InviteOption[] {
    const options: InviteOption[] = [];
    users.forEach((user: IAlumniUser) => {
        options.push({
            value: user.userId.toString(),
            label: user.name
        })
    });
    return options;
}

const InviteUsersModal: FC<InviteEvents> = ({ isOpen, changeCreateEventPopUpVisiblility }) => {

    const [inviteType, setInviteType] = useState('');
    const [selectedUserOrGroup, setSelectedUserOrGroup] = useState('');

    const [users, setUsers] = useState<InviteOption[]>([]);
    const [groups, setGroups] = useState<InviteOption[]>([]);

    useEffect(() => {
        const fetchUsersAndGroups = async () => {
            try {
                const usersResponse = await AlumniUserService.getAll();
                const groupsResponse = await AlumniGroupService.getAll();

                setUsers(transformUserData(usersResponse));
                setGroups(transformGroupData(groupsResponse));
            } catch (error) {
                console.error('Error fetching users and groups:', error);
            }
        };

        fetchUsersAndGroups();
    }, []);


    const inviteTypes: InviteOption[] = [
        { value: 'users', label: 'Users' },
        { value: 'groups', label: 'Groups' },
    ];

    const usersOrGroups: InviteOption[]= inviteType === 'users' ? users : groups;


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    const handleClose = async () => {
        console.log("Close icon clicked");
        const userResponse = await window.confirm(
            "You have unsaved changes, are you sure you want to close it?"
        );
        if (userResponse) {

            changeCreateEventPopUpVisiblility(false);
        }
    };

    return (
        <div className={`modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex-col flex ${isOpen ? 'block' : 'hidden'}`}>
            {<form onSubmit={handleSubmit} className="bg-white rounded-md p-4 mx-auto mt-16 w-1/2">
                <div className="relative flex items-center justify-center">
                    <p className="text-lg"> Invite users/group</p>
                    <button
                        onClick={handleClose}
                        className="absolute bottom-4 right-2 text-lg font-semibold"
                    >
                        &times;
                    </button>
                </div>
                <div className="w-full max-w-md mx-auto">
                    <label htmlFor="inviteType" className="block text-sm font-medium text-gray-700">
                        Invite Type
                    </label>
                    <select
                        id="inviteType"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base text-gray-700"
                        value={inviteType}
                        onChange={(e) => setInviteType(e.target.value)}
                    >
                        <option value="">Select invite type</option>
                        {inviteTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                                {type.label}
                            </option>
                        ))}
                    </select>

                    {inviteType && (
                        <>
                            <label htmlFor="userOrGroup" className="block mt-4 text-sm font-medium text-gray-700">
                                {inviteType === 'users' ? 'Select User' : 'Select Group'}
                            </label>
                            <select
                                id="userOrGroup"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base text-gray-700"
                                value={selectedUserOrGroup}
                                onChange={(e) => setSelectedUserOrGroup(e.target.value)}
                            >
                                <option value="">Select {inviteType === 'users' ? 'user' : 'group'}</option>
                                {usersOrGroups.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </select>
                        </>
                    )}
                </div>
                <div className='flex justify-end'>
                    <button type='submit'> Invite</button>

                </div>
            </form>}

        </div>
    );
}

export default InviteUsersModal;