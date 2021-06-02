interface Theme {
   colors: {
      grey: {
         normal: string;
      };
      blue: {
         normal: string;
      };
      green: {
         normal: string;
      };
      gradient: {
         horizontal: string;
         vertical: string;
      };
   };
}

export const theme: Theme = {
   colors: {
      grey: {
         normal: '#b3b3b3',
      },
      blue: {
         normal: '#09b3bf',
      },
      green: {
         normal: '#5fe3c2',
      },
      gradient: {
         horizontal: 'linear-gradient(45deg, #09b3bf 0%, #5fe3c2 100%);',
         vertical: ' linear-gradient(90deg, #09b3bf 0%, #5fe3c2 100%);',
      },
   },
};
