const getConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default getConfig;

/* en esta funcion retornamos un objeto, que es la configuracion de axios para enviarle el token, 
para poder acceder a purchases, que son las compras! */
