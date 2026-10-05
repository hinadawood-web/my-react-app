const fetchUserProfile = (id) =>
    new Promise((res) => {
        res({
            id,
            membershipYear: '2021',
            accountBalance: '100',
            active: 'true',
        });
    });

export default fetchUserProfile;
