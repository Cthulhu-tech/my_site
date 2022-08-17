import { Image } from '../image/image';
import './contacts.scss';

import leetcode from '../../assets/contacts/leetcode.png';
import github from '../../assets/contacts/github.png';

export const Contacts = () => {

    return <div className="container__contacts">

        <div className="wrapper__contacts">
            <a href="https://github.com/Cthulhu-tech" className="filter">
                <Image {...{src: github, alt: 'github'}}/>
            </a>      
        </div>


        <div className="wrapper__contacts">
            <a href="https://leetcode.com/Cthulhu-tech/" className="filter">
                <Image {...{src: leetcode, alt: 'leetcode'}}/>
            </a>
        </div>

    </div>

}
