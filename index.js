const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
	// document.getElementById('studentForm').style.display = "none";
	// document.getElementById('teacherForm').style.display = "block";
	document.getElementById('teacherForm').style.zIndex = 9
	document.getElementById('studentForm').style.zIndex = 0
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");

});


student = () => {
	container.classList.add("right-panel-active");

	document.getElementById('teacherForm').style.zIndex = 0
	document.getElementById('studentForm').style.zIndex = 5


}