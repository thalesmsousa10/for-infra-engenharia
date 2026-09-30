import {assetUrl} from '@/lib/paths';
import {photoSources} from '@/lib/images';
import Link from 'next/link';
import {ActionMark} from './Shell';
export function InstitutionalHero({title,text,href,label}:{title:string;text:string;href:string;label:string}){return <section className="institutional-hero"><h1>{title}</h1><div><p>{text}</p><Link href={href} className="button">{label}<ActionMark/></Link></div></section>}
export function EditorialPhoto({src,alt,position}:{src:string;alt:string;position?:string}){return <figure className="institutional-photo"><img src={assetUrl(src)} srcSet={photoSources(src)} sizes="100vw" alt={alt} width={1536} height={1024} style={position?{objectPosition:position}:undefined}/></figure>}
