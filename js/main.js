const app = new Vue({

    el: '#app',
    data: {

        active: 0,
        user: [
        
            {
              name: 'Michele',
              img: 'img/avatar_1.jpg',
              messages: [

                  {            
                      date: '10/01/2020 16:15:22',
                      text: 'Hai portato a spasso il cane?',
                      status: 'sent',
                  },

                  {            
                      date: '10/01/2020 16:15:45',
                      text: 'Ricordati di dargli da mangiare',
                      status: 'sent',
                  },

                    {            
                      date: '10/01/2020 16:20:10',
                      text: 'Tutto fatto!',
                      status: 'received',
                  },

              ],

            },

            {
              name: 'Fabio',
              img: 'img/avatar_2.jpg',
              messages: [

                  {            
                      date: '10/01/2020 16:21:22',
                      text: 'Ciao come stai?',
                      status: 'sent',
                  },

                    {            
                      date: '10/01/2020 16:29:10',
                      text: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received',
                  },

                  {            
                      date: '10/01/2020 16:21:22',
                      text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                      status: 'sent',
                  },

              ],
            },

            {
              name: 'Samuele',
              img: 'img/avatar_3.jpg',
              messages: [

                  {            
                      date: '10/01/2020 16:15:22',
                      text: 'La Marianna va in campagna',
                      status: 'sent',
                  },

                    {            
                      date: '10/01/2020 16:20:10',
                      text: 'Sicuro di non aver sbagliato chat',
                      status: 'received',
                  },

                  {            
                      date: '10/01/2020 16:15:22',
                      text: 'Ah scusa!',
                      status: 'sent',
                  },

              ],
            },

            {
              name: 'Mario',
              img: 'img/avatar_4.jpg',
              messages: [

                  {            
                      date: '10/01/2020 16:15:22',
                      text: 'Lo sai che ha aperto una nuova pizzeria',
                      status: 'sent',
                  },

                    {            
                      date: '10/01/2020 16:20:10',
                      text: 'Si, ma preferirei andare al cinema',
                      status: 'received',
                  },

              ],
            },

            {
              name: 'Riccardo',
              img: 'img/avatar_5.jpg',
              messages: [

                  {            
                      date: '10/01/2020 16:15:22',
                      text: 'Hey, come va?',
                      status: 'sent',
                  },

                    {            
                      date: '10/01/2020 16:20:10',
                      text: 'Tutto bene, grazie. Tu?',
                      status: 'received',
                  },

                  {            
                      date: '10/01/2020 16:15:22',
                      text: 'Alla grande! Felice di sentirti :)',
                      status: 'sent',
                  },

              ],
            },

            {
              name: 'Alessia',
              img: 'img/avatar_6.jpg',
              messages: [

                  {            
                      date: '10/01/2020 16:15:22',
                      text: 'Ciao Alessia, hai ricevuto le slide?',
                      status: 'sent',
                  },

                    {            
                      date: '10/01/2020 16:20:10',
                      text: 'Sì ti ringrazio!',
                      status: 'received',
                  },

              ],
            },

            {
              name: 'Jack',
              img: 'img/avatar_7.jpg',
              messages: [

                  {            
                      date: '10/01/2020 16:15:22',
                      text: 'Ci vediamo alle 20 :D',
                      status: 'sent',
                  },

                    {            
                      date: '10/01/2020 16:20:10',
                      text: 'A dopo!',
                      status: 'received',
                  },

              ],
            },

              {
              name: 'Mike',
              img: 'img/avatar_8.jpg',
              messages: [

                  {            
                      date: '10/01/2020 16:15:22',
                      text: 'Ho preso un regalo per Jack',
                      status: 'sent',
                  },

                    {            
                      date: '10/01/2020 16:20:10',
                      text: 'Grande! Cosa hai preso?',
                      status: 'received',
                  },

                   {            
                      date: '10/01/2020 16:15:22',
                      text: 'Ti mando una foto tra poco.',
                      status: 'sent',
                  },

              ],
            },

        ],

    },

    methods: {
    
        changeActive(index) {
        
            this.active = index;
            console.log(this.active);
        
        }
    
    }

})