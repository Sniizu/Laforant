function submitdata(){
    let name = document.getElementById('name').value + ""
    let email = document.getElementById('email').value + ""
    let password = document.getElementById('password').value
    let country = document.getElementById('country').value
    let countryidx = document.getElementById('country').selectedIndex
    let agree = document.getElementById('agree').checked
  
    if(name.length == 0){
        document.getElementById('errors').innerHTML = "Name cant't be empty!"
    }else if(!email.endsWith('.com')||!email.includes('@')||
    email.indexOf('@') != email.lastIndexOf('@')||
    email.indexOf('@')+1 == email.lastIndexOf('.com')){
        document.getElementById('errors').innerHTML = "Wrong email format"
    }else if(password.length <= 8){
        document.getElementById('errors').innerHTML = "Password must be more than 8 characters!"
    }else if(countryidx == 0){
        document.getElementById('errors').innerHTML = "Please choose your country"
    }else if(agree == false){
        document.getElementById('errors').innerHTML = "You have to agree to terms and conditions"
    }else{
        document.getElementById('errors').innerHTML = ""
        let result = prompt("Registration Success!", "Type here")
        console.log(result)
    }
}

