export const fetchOrder = async (data: object) => {
   const response = await fetch(
      'https://frosty-wood-6558.getsandbox.com:443/dishes',
      {
         method: 'POST',
         headers: {
            'Content-type': 'application/json',
         },
         body: JSON.stringify(data),
      }
   );

   return response.json();
};
