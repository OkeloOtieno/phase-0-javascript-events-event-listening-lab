function addingEventListener() {
    const button = document.getElementById('button');
    button.addEventListener('click', handleClick);
  }
  
  function handleClick() {
    alert("I was clicked")
  }
  