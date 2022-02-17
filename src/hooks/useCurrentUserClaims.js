
import { useState, useEffect } from 'react';

import { useAuth } from 'contexts/AuthContext';

const useCurrentUserClaims = () => {
    const [claimsAreLoading, setClaimsAreLoading] = useState(true);
    const { currentUserClaims } = useAuth();

    useEffect(() => {
        if(!currentUserClaims) { return }
        setClaimsAreLoading(false);
    }, [currentUserClaims]);

    return [claimsAreLoading, currentUserClaims]
}



export default useCurrentUserClaims;