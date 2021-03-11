document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
    // UPDATE
    const eatBurger = document.querySelectorAll('.devour');
  
    // Set up the event listener for the create button
    if (eatBurger) {
      eatBurger.forEach((button) => {
        button.addEventListener('click', (e) => {
          console.log('test');
          // Grabs the id of the element that goes by the name, "id"
          const id = e.target.getAttribute('data-id');
          
          const devourBur = {
            devoured: true,
          };
  
          fetch(`/api/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            // make sure to serialize the JSON body
            body: JSON.stringify(devourBur),
          }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
              console.log(`changed burger to: ${id}`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  
    // CREATE
    const createDaBurger = document.getElementById('create-form');
  
    if (createDaBurger) {
      createDaBurger.addEventListener('submit', (e) => {
        e.preventDefault();
  
        // Grabs the value of the textarea that goes by the name, "quote"
        const newBur = {
          name: document.getElementById('bur').value.trim()
        };
  
        // Send POST request to create a new quote
        fetch('/api', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          // Make sure to serialize the JSON body
          body: JSON.stringify(newBur),
        }).then(() => {
          // Empty the form
          document.getElementById('bur').value = '';
  
          // Reload the page so the user can see the new quote
          console.log('Created a burger!');
          location.reload("/");
        });
      });
    }
  });