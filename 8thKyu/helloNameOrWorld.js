function hello(name) {
    return `Hello, ${name ? name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase() : 'World'}!`
  }