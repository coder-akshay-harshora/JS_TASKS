const heros = [
    { name: 'Spider-Man' },
    { name: 'Thor' },
    { name: 'Black Panther' },
    { name: 'Captain Marvel' },
    { name: 'Silver Surfer' }
  ];
  let i = 0;
  console.log(heros.map((item)=>
  {
    
    return {
        id : i++,
        hero : item.name
    }
  }
  ))