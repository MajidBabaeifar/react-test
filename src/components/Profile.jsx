import { useState } from 'react';
const Profile = () => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        isActive: false
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data);
    }
    const handleChange = (e) => {
        setData(prev => ({
            ...prev,
            [e.target.name]:
                e.target.name !== "isActive" ? e.target.value : !prev.isActive
        }))
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column p-3">
            <label htmlFor="name">name</label>
            <input value={data.name} name='name' onChange={(e) => handleChange(e)} className="m-3" id="name" type="text" />
            <label htmlFor="phoneNumber">phone number</label>
            <input value={data.phone} name='phone' onChange={(e) => handleChange(e)} className="m-3" id="phoneNumber" type="number" />
            <label htmlFor="active">active</label>
            <input checked={data.isActive} name='isActive' onChange={(e) => handleChange(e)} className="m-3" id="active" type="checkbox" />
            <button>send data</button>
        </form>
    );
}

export default Profile;