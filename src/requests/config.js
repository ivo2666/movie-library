const getCookie = (name) => {
    if (typeof document === 'undefined') {
      return null
    }
      const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
      return cookieValue ? cookieValue[2] : null;
    }
    
    export default getCookie

const server = 'http://localhost:9999';

const headers = {
    'Content-Type': 'application/json',
    'Authorization': getCookie('x-auth-token')
  }
export { server, headers, getCookie }