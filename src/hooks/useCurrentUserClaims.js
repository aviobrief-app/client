
import { useState, useEffect } from 'react';

import { useAuth } from 'contexts/AuthContext';

const useCurrentUserClaims = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { currentUserClaims } = useAuth();

    useEffect(() => {
        if(!currentUserClaims) { return }
        setIsLoading(false);
    }, [currentUserClaims]);

    return [isLoading, currentUserClaims]
}



export default useCurrentUserClaims;