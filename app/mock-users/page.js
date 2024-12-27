import { Button } from '@mui/material';
import { revalidatePath } from 'next/cache';
import React from 'react'

const MockUsers = async () => {

    const res = await fetch('https://676e7bf7df5d7dac1ccaca6e.mockapi.io/api/v1/users');
    const users = await res.json();

    async function AddUser(formData){
        "use server"
        const name = formData.get("name");
        const res = await fetch('https://676e7bf7df5d7dac1ccaca6e.mockapi.io/api/v1/users',
            {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({ name })
            }
        );
        const newUser = await res.json();
        revalidatePath('/mock-users')
    }



  return (
    <div className="py-10">
      <form action={AddUser} className="mb-4">
        <input
          type="text"
          name="name"
          required
          className="p-2 mr-2 border border-gray-300 rounded text-gray-700"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add User
        </button>
      </form>
        {users.map(user => (

            <div className='bg-gray-100 rounded-sm'>
            {user.name}
            </div>
        ))}
    </div>
  )
}

export default MockUsers