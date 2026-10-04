(function(){
  const OWNER='SinceJack', REPO='blog', BLOG='https://sincejack.github.io/blog';
  const token=sessionStorage.getItem('blog_github_token')||'';
  if(!token) return;
  const box=document.getElementById('postAdminBar');
  if(!box) return;
  const sourcePath=box.dataset.sourcePath;
  const title=box.dataset.title||'这篇文章';
  async function api(path,opt={}){
    const r=await fetch('https://api.github.com'+path,{...opt,headers:{'Accept':'application/vnd.github+json','Authorization':'Bearer '+token,'X-GitHub-Api-Version':'2022-11-28',...(opt.headers||{})}});
    const data=await r.json().catch(()=>({}));
    if(!r.ok) throw new Error(data.message||('GitHub API '+r.status));
    return data;
  }
  async function init(){
    try{
      const user=await api('/user');
      if(user.login!==OWNER) return;
      box.hidden=false;
      document.getElementById('editPostBtn').onclick=()=>{
        location.href=BLOG+'/admin/?edit='+encodeURIComponent(sourcePath);
      };
      document.getElementById('deletePostBtn').onclick=async()=>{
        if(!confirm('确定删除《'+title+'》吗？\n\n删除后 GitHub Pages 会自动重新构建，文章将从博客中移除。')) return;
        if(!confirm('再次确认：这个操作会删除文章源文件，是否继续？')) return;
        const btn=document.getElementById('deletePostBtn');
        btn.disabled=true; btn.textContent='删除中…';
        try{
          const file=await api('/repos/'+OWNER+'/'+REPO+'/contents/'+sourcePath+'?ref=main');
          await api('/repos/'+OWNER+'/'+REPO+'/contents/'+sourcePath,{method:'DELETE',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:'Delete post: '+title,sha:file.sha,branch:'main'})});
          alert('文章已删除，GitHub Pages 正在重新构建。');
          location.href=BLOG+'/';
        }catch(e){
          alert('删除失败：'+e.message);
          btn.disabled=false; btn.textContent='删除文章';
        }
      };
    }catch(e){/* 非作者或 Token 失效时保持隐藏 */}
  }
  init();
})();