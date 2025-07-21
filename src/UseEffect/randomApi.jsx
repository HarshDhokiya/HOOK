import { useEffect, useState } from "react";




function RandomApi() {

    const [user, Setuser] = useState(null);
    const [loading, Setloading] = useState(true);

    useEffect(() => {

        fetch('https://randomuser.me/api/')
            .then((response) => response.json())
            .then((data) => {
                Setuser(data.results[0]);
                Setloading(false);
            })
            .catch((error) => {
                console.error('Error fetching User', error);
                Setloading(false);
            })
    }, []);

    if (loading) {
        return <p>Loading User... </p>

    }










    return (
        <>


            <h2>User info</h2>
            <p><strong>Name:</strong>{user.name.first} {user.name.last}</p>
            <p><strong>Email:</strong>{user.email}</p>
            <img src={user.picture.medium} alt="User" />











        </>
    )
}

export default RandomApi