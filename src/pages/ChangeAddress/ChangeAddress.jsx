import React from 'react'

function ChangeAddress() {
  return (
    <div>
        <div>
            <h3 className='font-bold text-3xl'>Change Shipping Address</h3>
        </div>
        <div>
            <input type="text" className='w-full h-full' placeholder='Enter new Address' />
        </div>
        <div>
            <button>Cancel</button>
            <button>Save Address</button>
        </div>
    </div>
  )
}

export default ChangeAddress;