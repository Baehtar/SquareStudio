import fs from 'node:fs/promises';
import path from 'node:path';
import {weddings,articles} from './dist/content.js';
const routes=['portfolio','real-weddings','films','about-us','contact-us','testimonials','job','blogs','term-condition',...weddings.map(w=>'real-weddings/'+w.slug),...articles.map(a=>'blogs/'+a.slug)];
const html=await fs.readFile(new URL('./dist/index.html',import.meta.url),'utf8');
for(const route of routes){const dir=new URL('./dist/'+route+'/',import.meta.url);await fs.mkdir(dir,{recursive:true});await fs.writeFile(new URL('index.html',dir),html)}
console.log(`Prepared ${routes.length+1} static page entries.`);
