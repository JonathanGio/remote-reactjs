import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from '../../../src/components/CustomButtons/Button'
import Router from 'next/router'

async function deleteUser(id) {
    const res = await fetch(`http://local.hmartepost.com/moodle38/webservice/rest/server.php?wstoken=11ef0da3e0d571ef0b33f3b8ceb7df39&wsfunction=core_user_delete_users&moodlewsrestformat=json&userids[0]=${id}`, {
        method: "DELETE"
    });

    if (!res.ok) {
        const body = await res.json();
        throw new Error(body.data.error.message);
    }
}

const Users = (props) => {
    const router = useRouter();
    async function handleDeleteButtonClick(id) {
    const answer = confirm("¿Estás seguro de que quieres eliminar este usuario?");
    if (!answer) return;

    try {
        await deleteUser(id);
        alert("User eliminado satisfactoriamente!");
        Router.replace("/");
    } catch (error) {
        alert("Algo salió mal!!!");
        Router.replace("/");
    }   
    }

    return (           
        <ul className="list-group">
        {props.users.map(user => (               
            <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center list-group-item-action">
            <Link href={'/user/[id]'} as={`/user/${user.id}`}>
                <a>{user.fullname}</a>                
            </Link>
            
            -
            <Button justIcon round color="twitter" onClick={() => handleDeleteButtonClick(user.id)}>
        <i
          className={"fab fa-twitter"}
        />x
      </Button>
     

            
            </li>            
        ))}
        </ul>
     
    )
}


export default Users;