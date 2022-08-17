import './image.scss';

export const Image = (info: {src: string, alt: string}) => {

    return <img className="image" src={info.src} alt={info.alt} />

}