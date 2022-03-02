import React, { useState } from 'react'

const Form = () => {
    const [val, setVal] = useState(0);
    return (
        <div className='div-col'>
            <div className='container pt-5'>
                <div className='card card-width box-sha '>
                    <h3 className='text-center py-3 text-blu fw-bold'>Task Manager</h3>
                    <div className='mx-4 pb-5'>
                        <form>
                            <div className={val == 1?"form-group my-2":"form-border my-2"} onClick={e => setVal(1)}>
                                {val == 1 ? <label>Task title</label> : null}
                                <input type="text" className="form-control input-lg" placeholder={val == 1?"":'Task Title'} />
                            </div>
                            <div className={val == 2?"form-group1 my-4":"form-border my-2"} onClick={e => setVal(2)}>
                                {val == 2 ? <label>Task Description</label> : null}
                                <textarea className="form-control input-lg" placeholder={val == 2?"":'Task Desctiption'}  ></textarea>
                            </div>
                            <div className={val == 3?"form-group2 my-4":"form-border my-2"} onClick={e => setVal(3)}>
                                {val == 3 ? <label>Date</label> : null}
                                <input type="date" className="form-control input-lg"  placeholder='Date' />
                            </div>
                            <div>
                                <button className='text-center btn-class'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='mt-3'>
                    <h3 className='text-center py-3 text-blu fw-bold'>Your Tasks</h3>
                    <div className='card p-3 box-sha'>
                        <div className='d-flex justify-content-between'>
                            <h5 className='text-center text-blu'>1. Completing Assignment on time...</h5>
                            <div className='d-flex'>
                                <button className='btn-com mx-2'>Completed</button>
                                <button className='btn-del'>Delete</button>
                            </div>
                        </div>
                    </div>
                    <div className='card p-3 mt-2 box-sha'>
                        <div className='d-flex justify-content-between'>
                            <h5 className='text-center text-blu'>2. Submitting assignment to Sir...</h5>
                            <div className='d-flex'>
                                <button className='btn-com mx-2'>Completed</button>
                                <button className='btn-del'>Delete</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Form