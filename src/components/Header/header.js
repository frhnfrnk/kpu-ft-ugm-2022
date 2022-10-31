const { Link } = require("react-router-dom");

export default function Header(){
    return (
        <header className="text-3xl font-bold underline my-10">
            <Link className="mx-5" to={"/"}>Home</Link>
            <Link className="mx-5" to={"/info-calon"}>Calon Ketua</Link>
            <Link className="mx-5" to={"/tentang"}>Tentang</Link>
        </header>
    );
}
