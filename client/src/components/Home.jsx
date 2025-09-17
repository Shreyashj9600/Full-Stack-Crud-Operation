import React from 'react'

function Home() {
    return (
        <div className='w-full px-5 min-h-[calc(100vh-60px)]'>
            <div className='w-full grid grid-cols-5 gap-3 my-4'>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor=''>Book Name</label>
                    <input type='text' placeholder='book name' className='w-full border-2 border-gray-500 text-gray-800 rounded-sm outline-none h-8 px-2' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor=''>Book Title</label>
                    <input type='text' placeholder='book Title' className='w-full border-2 border-gray-500 text-gray-800 rounded-sm outline-none h-8 px-2' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor=''>Author</label>
                    <input type='text' placeholder='Author' className='w-full border-2 border-gray-500 text-gray-800 rounded-sm outline-none h-8 px-2' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor=''>Selling Price</label>
                    <input type='text' placeholder='selling price' className='w-full border-2 border-gray-500 text-gray-800 rounded-sm outline-none h-8 px-2' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor=''>Publish date</label>
                    <input type='date' placeholder='Publish date' className='w-full border-2 border-gray-500 text-gray-800 rounded-sm outline-none h-8 px-2' />
                </div>
            </div>

            <div className='w-full flex justify-end'>
                <button className='bg-gray-500 text-white h-9 w-22 rounded-md cursor-pointer'>Submit</button>
            </div>

            <div className='w-full mt-10'>
                <div className='w-full'>
                    <table className='w-full bg-white divide-y divide-gray-200'>
                        <thead className='bg-gray-50'>
                            <tr>
                                <th className='tracking-wide px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Book Name</th>
                                <th className='tracking-wide px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Book Title</th>
                                <th className='tracking-wide px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Author</th>
                                <th className='tracking-wide px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>selling price</th>
                                <th className='tracking-wide px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Publish date</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200'>
                            <tr className='hover:bg-gray-200'>
                                <td className='px-6 py-3 whitespace-nowrap'>Name</td>
                                <td className='px-6 py-3 whitespace-nowrap'>Name</td>
                                <td className='px-6 py-3 whitespace-nowrap'>Name</td>
                                <td className='px-6 py-3 whitespace-nowrap'>Name</td>
                                <td className='px-6 py-3 whitespace-nowrap'>Name</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home
