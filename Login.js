user = [
	{
		username: 'kartik',
		password: 'hello'
	}
]

usrn = document.querySelector('.uname');
pass = document.querySelector('.pasword');
lin = document.querySelector('.login');
clr = document.querySelector('.col');
body = document.querySelector('#main');

const set = (event) => {
	body.style.background = clr.value;
}

clr.addEventListener('input', set);


lin.addEventListener('click', ()=>{
	if (usrn.value===user[0].username && pass.value===user[0].password) {
		console.log('Success');
		window.location = 'Homepage.html';
} else if (usrn.value==='' && pass.value==='') {
	window.location = 'errorpage.html';
	console.log('Enter username and password');
} else {
	window.location = 'errorpage.html';
	console.log('Wrong username and password or Register');
}
});
/*
if(usrn.value === user[0].username && pass.value === user[0].password) {
lin.addEventListener('click', () => {
	console.log('Success');
})
}
*/