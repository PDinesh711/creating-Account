function submitbtn(){
    var username = document.getElementById('signupname').value;
    var password = document.getElementById('signupPassword').value;
    // console.log(typeof username); console.log(typeof password)
 var usernameForLogin = localStorage.setItem('usernameForLogin',username);
 var passwordForLogin =localStorage.setItem('loginPassword',password);

}
function loginbtn(){
    var settingname = localStorage.getItem('usernameForLogin')
    var loginname = document.getElementById('user_name').value;
    var passwordlogin=document.getElementById('user_pass').value;
    var settingPassword = localStorage.getItem('loginPassword')
    if(loginname==settingname && passwordlogin==settingPassword){
        document.getElementById('btn').style.display='block';
        console.log('success')
    }
    else{
        document.getElementById('btn').style.display='none'
    console.log('failed')
    }

    if(loginname==settingname){
        document.getElementById('user_name').style.borderColor='green'
    }
    else{
        document.getElementById('user_name').style.borderColor='red' 
    }

    if(passwordlogin==settingPassword){
        document.getElementById('user_pass').style.borderColor='green'
    }
    else{
        document.getElementById('user_pass').style.borderColor='red' 
    }
}