import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.join(path.dirname(fileURLToPath(import.meta.url)),'dist');
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.woff2':'font/woff2','.mp4':'video/mp4'};
const server=http.createServer((req,res)=>{
 let url;try{url=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400);res.end();return}
 const candidate=path.resolve(root,'.'+url);if(candidate!==root&&!candidate.startsWith(root+path.sep)){res.writeHead(403);res.end();return}
 let file=candidate;try{if(!fs.statSync(file).isFile())file=path.join(root,'index.html')}catch{if(path.extname(url)){res.writeHead(404);res.end('Not found');return}file=path.join(root,'index.html')}
 const size=fs.statSync(file).size;const type=mime[path.extname(file)]||'application/octet-stream';
 if(req.headers.range&&type==='video/mp4'){
 const match=/^bytes=(\d+)-(\d*)$/.exec(req.headers.range);if(!match){res.writeHead(416,{'Content-Range':`bytes */${size}`});res.end();return}
 const start=Number(match[1]),end=match[2]?Math.min(Number(match[2]),size-1):size-1;if(start> end||start>=size){res.writeHead(416,{'Content-Range':`bytes */${size}`});res.end();return}
 res.writeHead(206,{'Content-Type':type,'Content-Length':end-start+1,'Content-Range':`bytes ${start}-${end}/${size}`,'Accept-Ranges':'bytes'});if(req.method==='HEAD'){res.end();return}fs.createReadStream(file,{start,end}).pipe(res);return;
 }
 res.writeHead(200,{'Content-Type':type,'Content-Length':size,'Cache-Control':'no-cache','Accept-Ranges':'bytes'});if(req.method==='HEAD'){res.end();return}fs.createReadStream(file).pipe(res);
});
const port=Number(process.env.PORT||5173);server.listen(port,'127.0.0.1',()=>console.log(`Square Studio preview: http://127.0.0.1:${port}`));
