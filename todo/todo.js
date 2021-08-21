const addForm = document.querySelector('.add')
console.log(addForm);
const list = document.querySelector('.todos')
console.log(list);

addForm.addEventListener('submit',(e) => {
	e.preventDefault()
	const todo = addForm.add.value.trim()

	if (todo.length){
		generatetemplate(todo)
		addForm.reset()
	}

	
	

	
})

const generatetemplate = (todo) =>{
	const html = `<li class="list-group-item d-flex text-light justify-content-between align-items-center">
	<span>${todo}</span>
	<i class="far fa-trash-alt delete"></i>
`
	list.innerHTML += html

}
list.addEventListener('click', (e) => {
	if(e.target.classList.contains('delete')){
		e.target.parentElement.remove()

	}

})
const search = document.querySelector('.search input')
search.addEventListener('keyup', () =>{
	const term = search.value.trim().tolowerCase()
})

const filtertodo = (term) => {
	
}