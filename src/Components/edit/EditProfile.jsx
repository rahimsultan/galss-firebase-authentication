import React from 'react';
import useAuth from '../../hooks/UseAuth';

const EditProfile = () => {
    // use context 
    const {updateUserProfile,  setuserImage, setuserName,  userImage, userName} = useAuth();
    // console.log(useAuth());

    const handleUpdate =(e)=>{
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.value
        setuserImage(image)
        setuserName(name)

        updateUserProfile(name, image)
        .then(()=>console.log('profile updated'))
        .catch(error => console.log(error.message))
    }
    // console.log(userImage, userName, 'FROM EDIT');

  return (
    <form onSubmit={handleUpdate} className="flex flex-col w-full items-center justify-center space-x-2 md:w-1/3 mx-auto h-[calc(100vh-291px)]">
      <div className='w-full mx-auto flex flex-col gap-2 mb-5'>
        <input
        name='name'
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="name"
        ></input>
        <input
        name='image'
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="image url"
        ></input>
      </div>
      <button
        type="submit"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Update Profile
      </button>
    </form>
  )
}

export default EditProfile