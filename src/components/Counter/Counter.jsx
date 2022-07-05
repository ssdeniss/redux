import React, { useState } from 'react'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/exports'
import { increment, decrement, reset, incrementByAmount } from '../../features/counter/counterSlice'
const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState(0)
    const addValue = Number(incrementAmount) || 0
    const resetAll = () => {
        setIncrementAmount(0)
        dispatch(reset())
    }
    return (
        <section className='container counter'>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <input type="text" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
            <div className='bottom-btn'>
                <button onClick={resetAll}>Reset</button>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add</button>
            </div>
        </section >
    )
}

export default Counter