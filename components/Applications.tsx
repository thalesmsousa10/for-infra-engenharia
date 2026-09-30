'use client';
import {assetUrl} from '@/lib/paths';
import {applicationImages} from '@/lib/editorial-images';
import {photoSources} from '@/lib/images';
import {useState} from 'react';
import Link from 'next/link';
import {Plus} from 'lucide-react';
import {applications} from '@/lib/content';
export default function Applications(){const[filter,setFilter]=useState('Todas');return <><div className="filter-row" aria-label="Filtrar aplicações">{['Todas','Residencial','Comercial','Industrial'].map(f=><button className={filter===f?'active':''} key={f} aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}</button>)}</div><div className="application-grid" aria-live="polite">{applications.filter(a=>filter==='Todas'||a.type===filter).map(a=><article className="application-card" key={a.type}><figure className="application-photo"><img src={assetUrl(applicationImages[a.type].src)} srcSet={photoSources(applicationImages[a.type].src)} sizes="(min-width: 900px) 50vw, 88vw" alt={applicationImages[a.type].alt} style={{objectPosition:applicationImages[a.type].position}} loading="lazy"/><figcaption>Imagem conceitual</figcaption></figure><div className="application-copy"><span className="eyebrow">APLICAÇÃO / {a.type.toUpperCase()}</span><h2>{a.title}</h2><p>{a.description}</p><h3>O que orienta a análise</h3><p>{a.focus}</p><Link className="text-link" href="/contato/">Conversar sobre uma obra <Plus size={16}/></Link></div></article>)}</div></>}
