export default function AuthHeader(){
    // check if user exists
    const user = JSON.parse(localStorage.getItem('user'));
    if(user && user.accessToken){
        return { Authorization: 'Bearer ' + user.accessToken };
    }else{
        return {}
    }
}