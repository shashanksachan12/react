function customRender(reactElement, container) {
      const domElement = document.createElement(reactElement.type);

      // Apply props as attributes
      for (let [key, value] of Object.entries(reactElement.props || {})) {
        domElement.setAttribute(key, value);
      }

      // Set text content safely
      domElement.textContent = reactElement.children;

      // Append to the container
      container.appendChild(domElement);
    }

    // Example React-like element
    const reactElement = {
      type: 'a',
      props: {
        href: 'https://google.com',
        target: 'blank'
      },
      children: 'Click me to visit Google'
    };

    // Target DOM container
    const mainContainer = document.querySelector('#root');

    // Render the element
    customRender(reactElement, mainContainer);