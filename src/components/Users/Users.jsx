import React from 'react'
import styles from './Users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://www.magix.com/fileadmin/user_upload/Startseite/SEO/software-for-photo-editing-and-presentation-int.jpg',
                followed: false,
                fullname: 'Dmitriy!',
                status: 'Cool',
                location: { city: 'Minsk', country: 'Belarus' }
            },
            {
                id: 2,
                photoUrl: 'https://www.magix.com/fileadmin/user_upload/Startseite/SEO/software-for-photo-editing-and-presentation-int.jpg',
                followed: false,
                fullname: 'Ivan!',
                status: 'Cool',
                location: { city: 'Astana', country: 'Kazakhstan' }
            },
            {
                id: 3,
                photoUrl: 'https://www.magix.com/fileadmin/user_upload/Startseite/SEO/software-for-photo-editing-and-presentation-int.jpg',
                followed: true,
                fullname: 'Masha!',
                status: 'Cool',
                location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 4,
                photoUrl: 'https://www.magix.com/fileadmin/user_upload/Startseite/SEO/software-for-photo-editing-and-presentation-int.jpg',
                followed: true,
                fullname: 'Anna!',
                status: 'Cool',
                location: { city: 'Grodno', country: 'Belarus' }
            }
        ])
    }

    return <div>
        {
            
            props.users.map(u => <div key={u.id}>
                <span>

                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>

                </span>
                <span>
                    <span>
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>

                    </span>
                </span>
            </div>)
        }
    </div>
}



export default Users