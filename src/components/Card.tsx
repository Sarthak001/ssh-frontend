

interface Status{
    ipAddress:string,
    isOnline:boolean;

}
interface CardProps {
    title:string;
    description:string;
    status:Status;
}

const Card = (props:CardProps)=>{
    return(<>
    </>)
}

export default Card;