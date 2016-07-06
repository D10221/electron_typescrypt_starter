import * as yo from 'yo-yo';

var numbers = [] // start empty


function list (items, onclick) {
  return yo`<header class="navbar">
    <section class="navbar-section">
        <a href="#" class="btn btn-link btn-lg">
            <i class="icon icon-people"></i>
        </a>
        <a href="#" class="navbar-brand">Spectre.css</a>
    </section>
    <section class="navbar-section">
        <input type="text" class="form-input input-inline" placeholder="search" />
        <a href="#" class="btn btn-link">documents</a>
        <a href="#" class="btn btn-link">login</a>
        <a href="#" class="btn btn-primary">signup</a>
    </section>
</header>` 
}

function update () {
  // add a new random number to our list
  numbers.push(Math.random())

  // construct a new list and efficiently diff+morph it into the one in the DOM
  var newList = list(numbers, update)
  yo.update(el, newList)
}

var el = list(numbers, update)


document.body.appendChild(el)
