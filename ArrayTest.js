import React from 'react'

const ArrayTest = () => {
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
      ];
    
      return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>User List</h1>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {users.map((user) => (
              <li
                key={user.id}
                style={{
                  padding: '10px',
                  margin: '5px 0',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '5px',
                }}
              >
                {user.name}
              </li>
            ))}
          </ul>
        </div>
      );
}

export default ArrayTest