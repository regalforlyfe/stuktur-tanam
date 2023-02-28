import React from 'react'

const ListComment = ({comment}) => {
  return (
    <div>
        <table className='border-collapse border w-full'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Post Id</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody>
                {comment.map((item, index) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.post_id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.body}</td>
                </tr>
                    ))}
            </tbody>
        </table>
    </div>
  )
}

export default ListComment