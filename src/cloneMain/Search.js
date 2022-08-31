import React, {useState} from 'react';
import logo from './images/logo.png';
import profile from './images/profile.jpg';


const Search = ({ onSubmit }) => {

    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event) =>  setSearchTerm(event.target.value);

    const onkeyPress = (event) => {
        if (event.key === "Enter") {
            onSubmit(searchTerm);
        }
    }

    return (
        <>
            <div className='header'>
               <div className='logo'>
                    <a href="/" className='bar'>
                        <i class="fa-solid fa-bars"></i>
                    </a>
                    <a href="/" className='brand'>
                        <img src={logo} alt="logo" className='logoBrand' />
                    </a>
               </div>
               <div className='search'>
                    <input
                        type="text"
                        className='form-floating'
                        fullWidth
                        placeholder="Search.."
                        value={searchTerm}
                        onChange={handleChange}
                        onKeyPress={onkeyPress}
                    /> 
                    {/* <a href="Enter" className='fa-magnifying-glass1'> */}
                        <i class="fa-solid fa-magnifying-glass"></i>
                    {/* </a> */}
                    <a href="/" className='fa-microphone1'>
                        <i class="fa-solid fa-microphone"></i>
                    </a>
               </div>
                <div className='icons'>
                    <a href="/">
                        <i class="fa-solid fa-video"></i>
                    </a>
                    <a href="/">
                        <i class="fa-solid fa-bell"></i>
                    </a>
                    <a href='/' className='profile'>
                        <img src={profile}  alt="profile" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Search;