export async function getStaticPaths() {
    const res = await fetch(`${process.env.END_POINT}`);
    const data = await res.json()

    const paths = data.map(user => {
        return{
            params: {id: user.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`${process.env.END_POINT}` + id);
    const data = await res.json()
  
    return {
      props: {user: data}
    }
}

export default function Details({ user }){
    return (
        <div>
            <h1>Name: { user.name }</h1>
            <p>Email: { user.email }</p>
            <p>Website: { user.website }</p>
            <p>Home address: { user.address.city }</p>
        </div>
    )
}