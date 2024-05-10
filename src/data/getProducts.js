    const productos = [
      {
        id:"uno",
        name:"Napolitana",
        description:"Salsa de tomate, queso, jamón, tomate y orégano.",
        stock:2,
        category:"pizza",
        price:"700",
        image:"./public/img/napo.jpg"
      },
      {
        id:"dos",
        name:"Lomo completo ",
        description:"tomate en rodajas, Hojas de lechuga cappuchina, huevo, Queso tybo, Jamón cocido, Pan para lomito (estilo vienés)",
        stock:3,
        category:"lomito",
        price:"600",
        image:"./public/img/lomo.jpg"
      },
      {
        id:"tres",
        name:"Hamburguesa doble",
        description:"pan, salsa, carne, queso, cebolla, lechuga, tomate",
        stock:3,
        category:"hamburguesa",
        price:"500",
        image:"./public/img/hamburguesa.jpg"
      }
    ]
  
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 3000);
    });
    


