(function(){
  function start(){
    const imageBtn=document.getElementById('imageBtn');
    if(!imageBtn||document.getElementById('videoBtn')) return;
    const videoBtn=document.createElement('button');
    videoBtn.type='button';videoBtn.id='videoBtn';videoBtn.textContent='🎬 视频';videoBtn.title='上传视频';
    imageBtn.insertAdjacentElement('afterend',videoBtn);
    const input=document.createElement('input');
    input.type='file';input.accept='video/mp4,video/webm,video/quicktime';input.hidden=true;document.body.appendChild(input);
    videoBtn.onclick=()=>input.click();
    input.onchange=async()=>{const file=input.files&&input.files[0];if(!file)return;await uploadVideo(file);input.value=''};
  }
  function fileBase64(file){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(String(r.result).split(',')[1]);r.onerror=reject;r.readAsDataURL(file)})}
  async function uploadVideo(file){
    const token=sessionStorage.getItem('blog_github_token')||'';
    const state=document.getElementById('uploadState');
    if(!token){if(state)state.textContent='请先登录';return}
    if(file.size>90*1024*1024){if(state)state.textContent='视频请控制在 90MB 以内';return}
    try{
      if(state)state.textContent='正在上传视频 '+file.name+' …';
      const d=new Date(),p=n=>String(n).padStart(2,'0'),ext=(file.name.split('.').pop()||'mp4').toLowerCase().replace(/[^a-z0-9]/g,'');
      const name=Date.now()+'-'+Math.random().toString(36).slice(2,7)+'.'+ext;
      const path='assets/uploads/'+d.getFullYear()+'/'+p(d.getMonth()+1)+'/'+name;
      const res=await fetch('https://api.github.com/repos/SinceJack/blog/contents/'+path.split('/').map(encodeURIComponent).join('/'),{method:'PUT',headers:{'Accept':'application/vnd.github+json','Authorization':'Bearer '+token,'X-GitHub-Api-Version':'2022-11-28','Content-Type':'application/json'},body:JSON.stringify({message:'Upload blog video',content:await fileBase64(file),branch:'main'})});
      if(!res.ok){const x=await res.json().catch(()=>({}));throw new Error(x.message||('GitHub API '+res.status))}
      const url='https://sincejack.github.io/blog/'+path;
      const md='\n<video controls preload="metadata" style="max-width:100%;border-radius:12px">\n  <source src="'+url+'">\n</video>\n';
      const rich=document.getElementById('richEditor');
      if(rich&&!rich.hidden){document.getElementById('mdMode')?.click();await new Promise(r=>setTimeout(r,30))}
      const editor=document.getElementById('body');
      if(editor){const a=editor.selectionStart,b=editor.selectionEnd;editor.setRangeText(md,a,b,'end');editor.dispatchEvent(new Event('input',{bubbles:true}));editor.focus()}
      if(state)state.textContent='✅ 视频已上传并插入正文';
    }catch(e){if(state)state.textContent='视频上传失败：'+e.message}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();