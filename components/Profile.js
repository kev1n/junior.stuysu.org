import getImg from '../lib/prefix'
import profile from '../styles/Profile.module.scss'
import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Profile({name, job, imagePath, facebook, instagram, github, email}) {
    return (
        <>
            <div className={profile.profileContainer}>
                <div className={profile.innerContainer}>
                <img className={profile.image} src={imagePath ? getImg(imagePath) : getImg("/Default_pfp.jpeg")}></img>
                    

                    <div className={profile.textContainer}>
                        <h2 className={profile.text}>{name}</h2>
                        <h3 className={profile.text}>{job}</h3>
                    </div>
                    
                    <div className={profile.iconsContainer}>
                        {facebook && <a target="_blank" rel="noreferrer" href={facebook}><FaFacebookF/></a>}
                        {instagram && <a target="_blank" rel="noreferrer" href={instagram}><FaInstagram/></a>}
                        {github && <a target="_blank" rel="noreferrer" href={github}><FaGithub/></a>}
                        {email && <a target="_blank" rel="noreferrer" href={"mailto:" + email}><MdEmail/></a>}
                    </div>
                    
                </div>
            </div>
        </>
    )
}
