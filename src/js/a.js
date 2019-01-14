
export function componentA () {
	let aDiv = document.createElement('div')

	aDiv.innerHTML = `
		<ul class="a-ul">
			<li>1</li>
			<li>2</li>
			<li>33</li>
		</ul>
	`
	return aDiv
}
