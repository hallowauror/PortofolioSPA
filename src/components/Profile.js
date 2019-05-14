import React from 'react'
import ImageAvatars from './ImageAvatars';
import ControlledExpansionPanels from './ControlledExpansionPanels';

export const Profile = () => {
    return (
        <div>
            <ImageAvatars></ImageAvatars>
            <ControlledExpansionPanels></ControlledExpansionPanels>
        </div>
    )
}

export default Profile;