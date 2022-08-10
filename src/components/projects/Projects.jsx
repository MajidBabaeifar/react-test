import { useState } from 'react';
const Projects = () => {
    const [list, setList] = useState([...Array(18)])
    return (
        <div className="container">
            <p className="h3 card bg-warning border-0 text-white text-capitalize my-3 p-3 text-center">this is a responsive grid designed by bootstrap</p>
            <div className="row justify-content-start g-4">
                {list.map(item => (
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-10">
                        <div className="rounded p-3 shadow-sm">
                            <div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <p className="text-muted small mb-1">Landing page redesign</p>
                                        <span className="badge bg-warning">Finished</span>
                                    </div>
                                    <div className="dropdown">
                                        <i
                                            className="bi bi-three-dots"
                                            type='button'
                                            data-bs-toggle="dropdown"
                                        ></i>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="text-capitalize small mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur animi nobis culpa error eum.</div>
                                <div className="d-flex">
                                    <img className='img-thumbnail rounded-circle mt-2 me-1' src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                                    <img className='img-thumbnail rounded-circle mt-2 me-1' src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                                    <img className='img-thumbnail rounded-circle mt-2 me-1' src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                </div>
                                <div className=" mt-2 position-relative w-100 fw-bold">
                                    progress
                                    <div className="position-absolute end-0 badge bg-dark">
                                        64 %
                                    </div>
                                </div>
                                <div className=" mt-2 progress">
                                    <div
                                        className="progress-bar progress-bar-striped progress-bar-animated"
                                        style={{ width: '64%' }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;