import { useState } from 'react';

function TeamSlider({children}) {
    const [currentTeamMemberIndex, setCurrentTeamMemberIndex] = useState(0);

    const currentTeamMember = children[currentTeamMemberIndex];

    const nextFrame = () => {
        let nextIndex = currentTeamMemberIndex + 1;

        if (nextIndex >= children.length) {
            // Wrap around if we're at the end
            nextIndex = 0;
        }
        setCurrentTeamMemberIndex(nextIndex);
    }

    const previousFrame = () => {
        let previousIndex = currentTeamMemberIndex - 1;
        if (previousIndex < 0) {
            // Wrap around if we're at the beginning
            previousIndex = children.length - 1;
        }
        setCurrentTeamMemberIndex(previousIndex);
    };

    return (
        <>
            {currentTeamMember}
            <nav>
                <button onClick={previousFrame}>Previous</button>
                <button onClick={nextFrame}>Next</button>
            </nav>
        </>
    );
}

export default TeamSlider; 