type Props = {
    params:{
        slug:string;
    };
};

export default async function Page(props:Props){
    return <div>{JSON.stringify(props)}</div>
}