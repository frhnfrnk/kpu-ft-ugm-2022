import { Link } from 'react-router-dom';


export default function Button(props) {
  return (
    <div className='flex justify-center mt-[3vh]'>
        <Link to="/"><button className="h-[auto] w-[auto] py-[calc(0.5rem+1vmin)] px-[calc(0.5rem+3vmin)] text-white font-bold font-Lato text-xl rounded-full mt-[40px] lg:mt-[20px] bg-gradient-to-r from-[#8A2D2D] to-[#6E2424]">{props.text}</button></Link>
    </div>
  );
}