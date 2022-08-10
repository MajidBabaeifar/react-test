import { useState } from 'react';
const Gallery = () => {
    const [list, setList] = useState([...Array(16)])
    return (
        <div className="container">
            <div className="row g-5 my-4">
                {list.map((_, i) => (
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className='--hover overflow-hidden position-relative'>
                            <img src={`https://picsum.photos/id/${i}/200/300`} className='w-100 ' />
                            <div className="p-3 d-flex flex-column justify-content-center
                            align-items-center text-center text-white --cover bg-dark w-100 h-100 position-absolute start-0 top-0 bg-opacity-50">
                                <div className="h1">title</div>
                                <div className="lead">Lorem ipsum dolor sit amet.</div>
                                <button className="btn btn-outline-warning my-5">click me</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Gallery;