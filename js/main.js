const app = new Vue({

    el: '#app',
    data: {

        active: 0,

        inputValue: '',

        searchValue: '',

        dataAccesso: dayjs().format('HH:mm'),

        user: [
        
            {
              name: 'Michele',
              img: 'img/avatar_1.jpg',
              visible: true,
              messages: [

                  {            
                      date: dayjs().format('DD/MM/YYYY HH:mm'),
                      text: 'Hai portato a spasso il cane?',
                      status: 'sent',
                      menuMsgVisible: false,
                      
                  },

                  {            
                      date: '10/01/2020 16:15:45',
                      text: 'Ricordati di dargli da mangiare',
                      status: 'sent',
                      menuMsgVisible: false,
                  },

                    {            
                      date: '10/01/2020 16:20:10',
                      text: 'Tutto fatto!',
                      status: 'received',
                      menuMsgVisible: false,

                  },
                  
              ],

            },

            {
              name: 'Fabio',
              img: 'img/avatar_2.jpg',
              visible: true,
              messages: [

                  {            
                      date: '10/01/2020 16:21:22',
                      text: 'Ciao come stai?',
                      status: 'sent',
                      menuMsgVisible: false,
                  },

                    {            
                      date: '10/01/2020 16:29:10',
                      text: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received',
                      menuMsgVisible: false,
                  },

                  {            
                      date: '10/01/2020 16:21:22',
                      text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                      status: 'sent',
                      menuMsgVisible: false,
                  },

                  {            
                      date: '10/01/2020 16:21:22',
                      text: 'Possiamo fare un altro giorno',
                      status: 'sent',
                      menuMsgVisible: false,
                  },

                    {            
                      date: '10/01/2020 16:29:10',
                      text: 'Va benissimo',
                      status: 'received',
                      menuMsgVisible: false,
                  },

                  {            
                      date: '10/01/2020 16:21:22',
                      text: 'Ti va bene martedì?',
                      status: 'sent',
                      menuMsgVisible: false,
                  },

                  {            
                      date: '10/01/2020 16:21:22',
                      text: 'Meglio mercoledì',
                      status: 'received',
                      menuMsgVisible: false,
                  },

                    {            
                      date: '10/01/2020 16:29:10',
                      text: 'Ok?',
                      status: 'received',
                      menuMsgVisible: false,
                  },

                  {            
                      date: '10/01/2020 16:21:22',
                      text: 'Posso dirlo anche agli altri',
                      status: 'received',
                      menuMsgVisible: false,
                  },

                    {            
                      date: '10/01/2020 16:29:10',
                      text: 'Sperando che possano stavolta',
                      status: 'received',
                      menuMsgVisible: false,
                  },

                  {            
                      date: '10/01/2020 16:21:22',
                      text: 'Perfetto!',
                      status: 'sent',
                      menuMsgVisible: false,
                  },

                  {            
                      date: '10/01/2020 16:21:22',
                      text: 'Fammi sapere',
                      status: 'sent',
                      menuMsgVisible: false,
                  },

              ],
            },

            {
              name: 'Samuele',
              img: 'img/avatar_3.jpg',
              visible: true,
              messages: [

                  {            
                      date: '10/01/2020 16:15:22',
                      text: 'La Marianna va in campagna',
                      status: 'sent',
                      menuMsgVisible: false,
                  },

                    {            
                      date: '10/01/2020 16:20:10',
                      text: 'Sicuro di non aver sbagliato chat',
                      status: 'received',
                      menuMsgVisible: false,
                  },

                  {            
                      date: '10/01/2020 16:15:22',
                      text: 'Ah scusa!',
                      status: 'sent',
                      menuMsgVisible: false,
                  },

              ],
            },

            {
              name: 'Mario',
              img: 'img/avatar_4.jpg',
              visible: true,
              messages: [

                  {            
                      date: '10/01/2020 16:15:22',
                      text: 'Lo sai che ha aperto una nuova pizzeria',
                      status: 'sent',
                      menuMsgVisible: false,
                  },

                    {            
                      date: '10/01/2020 16:20:10',
                      text: 'Si, ma preferirei andare al cinema',
                      status: 'received',
                      menuMsgVisible: false,
                  },

              ],
            },

            {
              name: 'Riccardo',
              img: 'img/avatar_5.jpg',
              visible: true,
              messages: [

                  {            
                      date: '10/01/2020 16:15:22',
                      text: 'Hey, come va?',
                      status: 'sent',
                      menuMsgVisible: false,
                  },

                    {            
                      date: '10/01/2020 16:20:10',
                      text: 'Tutto bene, grazie. Tu?',
                      status: 'received',
                      menuMsgVisible: false,
                  },

                  {            
                      date: '10/01/2020 16:15:22',
                      text: 'Alla grande! Felice di sentirti :)',
                      status: 'sent',
                      menuMsgVisible: false,
                  },

              ],
            },

            {
              name: 'Alessia',
              img: 'img/avatar_6.jpg',
              visible: true,
              messages: [

                  {            
                      date: '10/01/2020 16:15:22',
                      text: 'Ciao Alessia, hai ricevuto le slide?',
                      status: 'sent',
                      menuMsgVisible: false,
                  },

                    {            
                      date: '10/01/2020 16:20:10',
                      text: 'Sì ti ringrazio!',
                      status: 'received',
                      menuMsgVisible: false,
                  },

              ],
            },

            {
              name: 'Jack',
              img: 'img/avatar_7.jpg',
              visible: true,
              messages: [

                  {            
                      date: '10/01/2020 16:15:22',
                      text: 'Ci vediamo alle 20 :D',
                      status: 'sent',
                      menuMsgVisible: false,
                  },

                    {            
                      date: '10/01/2020 16:20:10',
                      text: 'A dopo!',
                      status: 'received',
                      menuMsgVisible: false,
                  },

              ],
            },

              {
              name: 'Mike',
              img: 'img/avatar_8.jpg',
              visible: true,
              messages: [

                  {            
                      date: '10/01/2020 16:15:22',
                      text: 'Ho preso un regalo per Jack',
                      status: 'sent',
                      menuMsgVisible: false,
                  },

                    {            
                      date: '10/01/2020 16:20:10',
                      text: 'Grande! Cosa hai preso?',
                      status: 'received',
                      menuMsgVisible: false,
                  },

                   {            
                      date: '10/01/2020 16:15:22',
                      text: 'Ti mando una foto tra poco.',
                      status: 'sent',
                      menuMsgVisible: false,
                  },

              ],
            },

        ],

    },

    methods: {

        //assegno come valore ad active l'indice della chat che clicco
        changeActive(index) {
        
            this.active = index;

        },

        //pusho in messages il testo che ho scritto nell'input così da mostrarlo in chat
        sendMessage() {

            const msgToSend = {

                date: dayjs().format('DD/MM/YYYY HH:mm'), 
                text: this.inputValue, 
                status: 'sent',
                menuMsgVisible: false,

            }

            if (this.inputValue !== '') {

                this.user[this.active].messages.push(msgToSend);
                setTimeout(this.answerMessage, 1000);

            }

            //svuoto il campo input
            this.inputValue = '';

            //chiamo la funzione con il messaggio di risposta in ritardo di 1 secondo
        },

        //pusho in messages un messaggio di risposta che vado a chiamare nella funzione sendMessage()
        answerMessage() {

            const msgAnswer = {

                date: dayjs().format('DD/MM/YYYY HH:mm'), 
                text: 'ok', 
                status: 'received',
                menuMsgVisible: false,
              
            }

            this.user[this.active].messages.push(msgAnswer);
        
        },

        /*funzione che mostra gli utenti il cui nome contiene una o più lettere digitate 
          all'interno dell'input di ricerca*/
        filterChat() {

            for (let i = 0; i < this.user.length; i++) {
            
                let userName = this.user[i].name.toUpperCase();

                if (userName.includes(this.searchValue.toUpperCase())) {
                
                    this.user[i].visible = true;
                
                } else {

                    this.user[i].visible = false;

                }
            
            }
        },

        /*funzione che cambia il valore di menuMsgVisible 
        per mostrare o meno il menu nei singoli messaggi in chat*/
        menuMsg(index) {

            if(this.user[this.active].messages[index].menuMsgVisible == false) {
            
                this.user[this.active].messages[index].menuMsgVisible = true;
              
            } else {
            
                this.user[this.active].messages[index].menuMsgVisible = false;
            
            }; 

        },

        /* funzione che elimina i messaggi quando si clicca su elimina messaggio nel menu a tendina del messaggio in chat */
        deleteMsg(index) {

            this.user[this.active].messages.splice(index, 1);

        }
    
    }

})