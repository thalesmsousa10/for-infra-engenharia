import {photoSources} from '@/lib/images';
import Link from 'next/link';
import {ActionMark} from './Shell';
export function InstitutionalHero({title,text,href,label}:{title:string;text:string;href:string;label:string}){return <section className="institutional-hero"><h1>{title}</h1><div><p>{text}</p><Link href={href} className="button">{label}<ActionMark/></Link></div></section>}
export function EditorialPhoto({src,alt}:{src:string;alt:string}){return <figure className="institutional-photo"><img src={src} srcSet={photoSources(src)} sizes="100vw" alt={alt} width={1600} height={900}/><figcaption>Imagem conceitual</figcaption></figure>}
