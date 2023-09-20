let { host, port = null } = document.location;
host = host.replace('http://','').replace('https://','');
export const base = import.meta.env.VITE_BACKEND || 'api';

export const getBase = () => sessionStorage.getItem('uri_home') || null;
export const getToken = () => sessionStorage.getItem('token') || null;

export async function responseOk(res){
    if(!res.ok) throw new Error(await res.text())
    return res;
}