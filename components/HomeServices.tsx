'use client';
import {useState} from 'react';
import Link from 'next/link';
import {Plus,Minus,ScanLine,Layers3,Drill,ClipboardCheck} from 'lucide-react';
import {services,serviceHref} from '@/lib/content';
const icons=[ScanLine,Layers3,Drill,Drill,ClipboardCheck];
export default function HomeServices(){const[active,setActive]=useState(0);return <div className="services-interactive"><div className="service-list">{services.map((s,i)=><button id={`tab-${s.id}`} key={s.id} aria-expanded={active===i} aria-controls="service-detail" className={active===i?'service-button active':'service-button'} onClick={()=>setActive(i)}><span className="mono">{s.number}</span><span>{s.title}</span>{active===i?<Minus size={19}/>:<Plus size={19}/>}</button>)}</div><div id="service-detail" className="service-detail" aria-live="polite">{(()=>{const Icon=icons[active];return <Icon size={42} strokeWidth={1}/>})()}<span className="eyebrow">{services[active].category}</span><h3>{services[active].intro}</h3><p>{services[active].description}</p><Link className="text-link" href={serviceHref(services[active].id)}>Conhecer o serviço <Plus size={16}/></Link><span className="detail-number" aria-hidden="true">{services[active].number}</span></div></div>}
