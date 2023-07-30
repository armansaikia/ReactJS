export default function UserInfo() {
    const userInfo = {
        firstName: 'Charan',
        lastName: 'L',
        email: 'karthik.l@gmail.com',
        location: 'Hyderabad'
    };

    const trigger = () => {
        console.log('Triggered event');
    };

    const getUserInfo = (firstName) => {
        console.log(firstName);
    };
    return (
        <div>
            <h4>Firstname: {userInfo.firstName}</h4>
            <h4>Lastname: {userInfo.lastName}</h4>
            <h4>Email: {userInfo.email}</h4>
            <h4>Location: {userInfo.location}</h4>
            <button onClick={trigger}>Trigger</button>
            <button onClick={() => getUserInfo(userInfo.firstName)}>Get First Name</button>
        </div>
    )
}